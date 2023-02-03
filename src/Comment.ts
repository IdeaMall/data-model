import { Type } from 'class-transformer';
import {
    IsDate,
    IsInt,
    IsNumber,
    IsOptional,
    IsString,
    Min,
    ValidateNested
} from 'class-validator';
import { NewData } from 'mobx-restful';

import { UserBaseModel } from './Base';
import { GoodsOutput } from './Goods';
import { UserOutput } from './User';

export class CommentInput {
    @Type(() => GoodsOutput)
    @ValidateNested()
    goods: GoodsOutput;

    @IsNumber()
    score: number;

    @IsString()
    @IsOptional()
    content?: string;
}

export class CommentFilter implements NewData<CommentInput> {
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

export class CommentOutput extends CommentInput implements UserBaseModel {
    @IsInt()
    @Min(1)
    id: number;

    @IsDate()
    createdAt: Date;

    @IsDate()
    @IsOptional()
    updatedAt?: Date;

    @Type(() => UserOutput)
    @ValidateNested()
    createdBy: UserOutput;

    @Type(() => UserOutput)
    @ValidateNested()
    @IsOptional()
    updatedBy?: UserOutput;
}
