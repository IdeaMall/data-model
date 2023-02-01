import { Type } from 'class-transformer';
import {
    IsNumber,
    IsOptional,
    IsString,
    ValidateNested
} from 'class-validator';

import { BaseModel } from './Base';
import { GoodsModel } from './Goods';

export class CommentModel extends BaseModel {
    @Type(() => GoodsModel)
    @ValidateNested()
    goods: GoodsModel;

    @IsNumber()
    score: number;

    @IsString()
    @IsOptional()
    content?: string;
}
