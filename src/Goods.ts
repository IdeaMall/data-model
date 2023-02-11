import { Type } from 'class-transformer';
import {
    IsInt,
    IsNumber,
    IsOptional,
    IsString,
    IsUrl,
    Min,
    ValidateNested
} from 'class-validator';

import { BaseFilter, ListChunk } from './Base';
import { CategoryOutput } from './Category';
import { GoodsItemOutput } from './GoodsItem';
import { UserBaseOutput, UserInputData } from './User';

export class GoodsOutput extends UserBaseOutput {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @Type(() => CategoryOutput)
    @ValidateNested()
    category: CategoryOutput;

    @IsString()
    @IsOptional()
    styleName?: string;

    @IsString({ each: true })
    @IsOptional()
    styleValues?: string[];

    @Type(() => GoodsItemOutput)
    @ValidateNested()
    items: GoodsItemOutput[];
}

export class GoodsInput implements UserInputData<GoodsOutput> {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    @Min(1)
    category: number;

    @IsString()
    @IsOptional()
    styleName?: string;

    @IsString({ each: true })
    @IsOptional()
    styleValues?: string[];

    @IsInt({ each: true })
    @Min(1)
    items: number[];
}

export class GoodsFilter extends BaseFilter implements Partial<GoodsInput> {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsInt()
    @Min(1)
    @IsOptional()
    category?: number;

    @IsString()
    @IsOptional()
    styleName?: string;

    @IsString({ each: true })
    @IsOptional()
    styleValues?: string[];
}

export class GoodsListChunk implements ListChunk<GoodsOutput> {
    @IsInt()
    @Min(0)
    count: number;

    @Type(() => GoodsOutput)
    @ValidateNested({ each: true })
    list: GoodsOutput[];
}
