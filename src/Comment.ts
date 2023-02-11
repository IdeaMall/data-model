import { Type } from 'class-transformer';
import {
    IsInt,
    IsNumber,
    IsOptional,
    IsString,
    Min,
    ValidateNested
} from 'class-validator';

import { BaseFilter, ListChunk } from './Base';
import { GoodsOutput } from './Goods';
import { UserBaseOutput, UserInputData } from './User';

export class CommentOutput extends UserBaseOutput {
    @Type(() => GoodsOutput)
    @ValidateNested()
    goods: GoodsOutput;

    @IsNumber()
    score: number;

    @IsString()
    @IsOptional()
    content?: string;
}

export class CommentInput implements UserInputData<CommentOutput> {
    @IsInt()
    @Min(1)
    goods: number;

    @IsNumber()
    score: number;

    @IsString()
    @IsOptional()
    content?: string;
}

export class CommentFilter extends BaseFilter implements Partial<CommentInput> {
    @IsInt()
    @Min(1)
    @IsOptional()
    goods?: number;

    @IsNumber()
    @IsOptional()
    score?: number;

    @IsString()
    @IsOptional()
    content?: string;
}

export class CommentListChunk implements ListChunk<CommentOutput> {
    @IsInt()
    @Min(0)
    count: number;

    @Type(() => CommentOutput)
    @ValidateNested({ each: true })
    list: CommentOutput[];
}
