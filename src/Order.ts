import { Type } from 'class-transformer';
import {
    IsDate,
    IsNumber,
    IsOptional,
    IsString,
    ValidateNested
} from 'class-validator';

import { GoodsModel } from './Goods';
import { BaseModel, UserModel } from './User';

export class OrderModel extends BaseModel {
    @Type(() => GoodsModel)
    @ValidateNested()
    goods: GoodsModel;

    @IsNumber()
    price: number;

    @IsString()
    @IsOptional()
    remark?: string;

    @IsDate()
    confirmedAt: Date;

    @Type(() => UserModel)
    @ValidateNested()
    confirmedBy: UserModel;
}
