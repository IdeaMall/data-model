import { Type } from 'class-transformer';
import {
    IsDate,
    IsInt,
    IsOptional,
    IsString,
    Min,
    ValidateNested
} from 'class-validator';
import { NewData } from 'mobx-restful';

import { BaseFilter, ListChunk, UserBaseModel } from './Base';
import { UserOutput } from './User';

export class CategoryInput {
    @IsString()
    name: string;

    @IsInt()
    @Min(1)
    @IsOptional()
    parentId?: number;
}

export class CategoryFilter
    extends BaseFilter
    implements NewData<CategoryInput>
{
    @IsInt()
    @Min(1)
    @IsOptional()
    parentId?: number;
}

export class CategoryOutput extends CategoryInput implements UserBaseModel {
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

export class CategoryListChunk implements ListChunk<CategoryOutput> {
    @IsInt()
    @Min(0)
    count: number;

    @Type(() => CategoryOutput)
    @ValidateNested({ each: true })
    list: CategoryOutput[];
}
