import { Type } from 'class-transformer';
import {
    IsDate,
    IsEnum,
    IsInt,
    IsOptional,
    Min,
    ValidateNested
} from 'class-validator';
import { NewData } from 'mobx-restful';

import { BaseFilter, ListChunk, UserBaseModel } from './Base';
import { GoodsOutput } from './Goods';
import { UserOutput } from './User';

export enum FavoriteType {
    Like,
    Cart
}

export class FavoriteInput {
    @IsEnum(FavoriteType)
    type: FavoriteType;

    @Type(() => GoodsOutput)
    @ValidateNested()
    goods: GoodsOutput;
}

export class FavoriteFilter
    extends BaseFilter
    implements NewData<FavoriteInput>
{
    @IsEnum(FavoriteType)
    @IsOptional()
    type?: FavoriteType;
}

export class FavoriteOutput extends FavoriteInput implements UserBaseModel {
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

export class FavoriteListChunk implements ListChunk<FavoriteOutput> {
    @IsInt()
    @Min(0)
    count: number;

    @Type(() => FavoriteOutput)
    @ValidateNested({ each: true })
    list: FavoriteOutput[];
}
