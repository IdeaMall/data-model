import { Type } from 'class-transformer';
import {
    IsDate,
    IsInt,
    IsNumber,
    IsOptional,
    IsString,
    Min,
    ValidateNested
} from 'class-validator';
import { NewData } from 'mobx-restful';

import { BaseFilter, ListChunk, UserBaseModel } from './Base';
import { GoodsOutput } from './Goods';
import { UserOutput } from './User';

export class OrderInput {
    @Type(() => GoodsOutput)
    @ValidateNested()
    goods: GoodsOutput;

    @IsNumber()
    price: number;

    @IsString()
    @IsOptional()
    remark?: string;

    @IsDate()
    confirmedAt: Date;

    @Type(() => UserOutput)
    @ValidateNested()
    confirmedBy: UserOutput;
}

export class OrderFilter extends BaseFilter implements NewData<OrderInput> {
    @IsString()
    @IsOptional()
    remark?: string;
}

export class OrderOutput extends OrderInput implements UserBaseModel {
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

export class OrderListChunk implements ListChunk<OrderOutput> {
    @IsInt()
    @Min(0)
    count: number;

    @Type(() => OrderOutput)
    @ValidateNested({ each: true })
    list: OrderOutput[];
}
