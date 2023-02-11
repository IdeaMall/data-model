import { Type } from 'class-transformer';
import {
    IsEnum,
    IsInt,
    IsOptional,
    Min,
    ValidateNested
} from 'class-validator';

import { BaseFilter, ListChunk } from './Base';
import { GoodsOutput } from './Goods';
import { UserBaseOutput, UserInputData } from './User';

export enum FavoriteType {
    Like,
    Cart
}

export class FavoriteOutput extends UserBaseOutput {
    @IsEnum(FavoriteType)
    type: FavoriteType;

    @Type(() => GoodsOutput)
    @ValidateNested()
    goods: GoodsOutput;
}

export class FavoriteInput implements UserInputData<FavoriteOutput> {
    @IsEnum(FavoriteType)
    type: FavoriteType;

    @IsInt()
    @Min(1)
    goods: number;
}

export class FavoriteFilter
    extends BaseFilter
    implements Partial<FavoriteInput>
{
    @IsEnum(FavoriteType)
    @IsOptional()
    type?: FavoriteType;
}

export class FavoriteListChunk implements ListChunk<FavoriteOutput> {
    @IsInt()
    @Min(0)
    count: number;

    @Type(() => FavoriteOutput)
    @ValidateNested({ each: true })
    list: FavoriteOutput[];
}
