import { Type } from 'class-transformer';
import { IsEnum, ValidateNested } from 'class-validator';

import { BaseModel } from './User';
import { GoodsModel } from './Goods';

export enum FavoriteType {
    Like,
    Cart
}

export class FavoriteModel extends BaseModel {
    @IsEnum(FavoriteType)
    type: FavoriteType;

    @Type(() => GoodsModel)
    @ValidateNested()
    goods: GoodsModel;
}
