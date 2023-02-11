import {
    IsEAN,
    IsNumber,
    IsOptional,
    IsString,
    IsUrl,
    Min
} from 'class-validator';

import { UserBaseOutput, UserInputData } from './User';

export class GoodsItemOutput extends UserBaseOutput {
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
}

export class GoodsItemInput implements UserInputData<GoodsItemOutput> {
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
}
