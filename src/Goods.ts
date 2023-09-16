import { Type } from 'class-transformer';
import {
    IsInt,
    IsNumber,
    IsOptional,
    IsString,
    Min,
    ValidateNested
} from 'class-validator';

import { AddressOutput } from './Address';
import { BaseFilter, ListChunk } from './Base';
import { CategoryOutput } from './Category';
import { GoodsItemOutput } from './GoodsItem';
import { UserBaseOutput, UserInputData } from './User';

export class GoodsStyle {
    @IsString()
    name: string;

    @IsString({ each: true })
    values: string[];
}

export class GoodsOutput extends UserBaseOutput {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @Type(() => CategoryOutput)
    @ValidateNested()
    category: CategoryOutput;

    @Type(() => GoodsStyle)
    @ValidateNested({ each: true })
    @IsOptional()
    styles?: GoodsStyle[];

    @Type(() => GoodsItemOutput)
    @ValidateNested()
    @IsOptional()
    items?: GoodsItemOutput[];

    @Type(() => AddressOutput)
    @ValidateNested()
    store: AddressOutput;
}

export class GoodsInput implements Omit<UserInputData<GoodsOutput>, 'items'> {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    @Min(1)
    category: number;

    @Type(() => GoodsStyle)
    @ValidateNested({ each: true })
    @IsOptional()
    styles?: GoodsStyle[];

    @IsInt({ each: true })
    @Min(1)
    @IsOptional()
    items?: number[];

    @IsNumber()
    @Min(1)
    store: number;
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

    @IsNumber()
    @Min(1)
    @IsOptional()
    store?: number;
}

export class GoodsListChunk implements ListChunk<GoodsOutput> {
    @IsInt()
    @Min(0)
    count: number;

    @Type(() => GoodsOutput)
    @ValidateNested({ each: true })
    list: GoodsOutput[];
}
