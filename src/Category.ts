import { Type } from 'class-transformer';
import {
    IsInt,
    IsOptional,
    IsString,
    Min,
    ValidateNested
} from 'class-validator';

import { BaseFilter, ListChunk } from './Base';
import { UserBaseOutput, UserInputData } from './User';

export class CategoryOutput extends UserBaseOutput {
    @IsString()
    name: string;

    @IsInt()
    @Min(1)
    @IsOptional()
    parentId?: number;
}

export class CategoryInput implements UserInputData<CategoryOutput> {
    @IsString()
    name: string;

    @IsInt()
    @Min(1)
    @IsOptional()
    parentId?: number;
}

export class CategoryFilter
    extends BaseFilter
    implements Partial<CategoryInput>
{
    @IsInt()
    @Min(1)
    @IsOptional()
    parentId?: number;
}

export class CategoryListChunk implements ListChunk<CategoryOutput> {
    @IsInt()
    @Min(0)
    count: number;

    @Type(() => CategoryOutput)
    @ValidateNested({ each: true })
    list: CategoryOutput[];
}
