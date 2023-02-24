import { Type } from 'class-transformer';
import {
    IsInt,
    IsOptional,
    IsString,
    IsUrl,
    Min,
    ValidateNested
} from 'class-validator';

import { BaseFilter, ListChunk } from './Base';
import { UserBaseOutput, UserInputData } from './User';

export class CategoryOutput extends UserBaseOutput {
    @IsString()
    name: string;

    @IsUrl()
    @IsOptional()
    image?: string;

    @IsInt()
    @Min(1)
    @IsOptional()
    parentId?: number;
}

export class CategoryInput implements UserInputData<CategoryOutput> {
    @IsString()
    name: string;

    @IsUrl()
    @IsOptional()
    image?: string;

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
