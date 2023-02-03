import { Type } from 'class-transformer';
import {
    IsDate,
    IsInt,
    IsNumber,
    IsOptional,
    IsString,
    IsUrl,
    Min,
    ValidateNested
} from 'class-validator';
import { NewData } from 'mobx-restful';

import { UserBaseModel } from './Base';
import { CategoryOutput } from './Category';
import { UserOutput } from './User';

export class GoodsInput {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsUrl({}, { each: true })
    images: string[];

    @IsNumber()
    price: number;

    @Type(() => CategoryOutput)
    @ValidateNested()
    category: CategoryOutput;
}

export class GoodsFilter implements NewData<GoodsInput> {
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
}

export class GoodsOutput extends GoodsInput implements UserBaseModel {
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
