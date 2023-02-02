import { Type } from 'class-transformer';
import { IsEnum, ValidateNested } from 'class-validator';

import { GoodsModel } from './Goods';
import { UserBaseModel } from './User';

export enum FavoriteType {
    Like,
    Cart
}

export class FavoriteModel extends UserBaseModel {
    @IsEnum(FavoriteType)
    type: FavoriteType;

    @Type(() => GoodsModel)
    @ValidateNested()
    goods: GoodsModel;
}
