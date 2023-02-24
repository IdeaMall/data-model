import { Type } from 'class-transformer';
import {
    IsEAN,
    IsInt,
    IsNumber,
    IsOptional,
    IsString,
    IsUrl,
    Min,
    ValidateNested
} from 'class-validator';

import { BaseFilter, ListChunk } from './Base';
import { GoodsOutput } from './Goods';
import { UserBaseOutput, UserInputData } from './User';

export class GoodsItemOutput extends UserBaseOutput {
    @Type(() => GoodsOutput)
    goods: GoodsOutput;

    @IsString()
    name: string;

    @IsUrl()
    image: string;

    @IsNumber()
    price: number;

    @IsNumber()
    @Min(0)
    kilogram: number;

    @IsEAN()
    @IsOptional()
    code?: string;

    @IsString({ each: true })
    @IsOptional()
    styles?: string[];

    @IsInt()
    @Min(0)
    stock: number;
}

export class GoodsItemInput implements UserInputData<GoodsItemOutput> {
    @IsInt()
    @Min(1)
    goods: number;

    @IsString()
    name: string;

    @IsUrl()
    image: string;

    @IsNumber()
    price: number;

    @IsNumber()
    @Min(0)
    kilogram: number;

    @IsEAN()
    @IsOptional()
    code?: string;

    @IsString({ each: true })
    @IsOptional()
    styles?: string[];

    @IsInt()
    @Min(0)
    stock: number;
}

export class GoodsItemFilter
    extends BaseFilter
    implements Partial<GoodsItemInput>
{
    @IsString()
    @IsOptional()
    name?: string;

    @IsEAN()
    @IsOptional()
    code?: string;

    @IsInt()
    @Min(0)
    @IsOptional()
    stock?: number;
}

export class GoodsItemListChunk implements ListChunk<GoodsItemOutput> {
    @IsInt()
    @Min(0)
    count: number;

    @Type(() => GoodsItemOutput)
    @ValidateNested({ each: true })
    list: GoodsItemOutput[];
}
