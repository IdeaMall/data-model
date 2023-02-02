import { Type } from 'class-transformer';
import { IsNumber, IsString, IsUrl, ValidateNested } from 'class-validator';

import { CategoryModel } from './Category';
import { UserBaseModel } from './User';

export class GoodsModel extends UserBaseModel {
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
