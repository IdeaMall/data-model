import { Type } from 'class-transformer';
import {
    IsNumber,
    IsOptional,
    IsString,
    ValidateNested
} from 'class-validator';

import { GoodsModel } from './Goods';
import { UserBaseModel } from './User';

export class CommentModel extends UserBaseModel {
    @Type(() => GoodsModel)
    @ValidateNested()
    goods: GoodsModel;

    @IsNumber()
    score: number;

    @IsString()
    @IsOptional()
    content?: string;
}
