import { Type } from 'class-transformer';
import { IsNumber, IsString, IsUrl, ValidateNested } from 'class-validator';

import { BaseModel } from './User';
import { CategoryModel } from './Category';

export class GoodsModel extends BaseModel {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsUrl({}, { each: true })
    images: string[];

    @IsNumber()
    price: number;

    @Type(() => CategoryModel)
    @ValidateNested()
    category: CategoryModel;
}
