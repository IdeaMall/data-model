import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';

import { BaseModel } from './Base';

export class CategoryModel extends BaseModel {
    @IsString()
    name: string;

    @Type(() => CategoryModel)
    @ValidateNested()
    @IsOptional()
    parent?: CategoryModel;
}
