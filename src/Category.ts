import { IsInt, IsOptional, IsString, Min } from 'class-validator';

import { UserBaseModel } from './User';

export class CategoryModel extends UserBaseModel {
    @IsString()
    name: string;

    @IsInt()
    @Min(1)
    @IsOptional()
    parentId?: number;
}
