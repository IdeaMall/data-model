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
import { AddressOutput } from './Address';

import { BaseFilter, ListChunk } from './Base';
import { GoodsItemOutput } from './GoodsItem';
import { UserBaseOutput, UserInputData, UserOutput } from './User';

export class OrderOutput extends UserBaseOutput {
    @Type(() => GoodsItemOutput)
    @ValidateNested()
    items: GoodsItemOutput;

    @IsNumber()
    price: number;

    @Type(() => AddressOutput)
    @ValidateNested()
    address: AddressOutput;

    @IsString()
    @IsOptional()
    remark?: string;

    @IsString()
    payMethod: string;

    @IsString()
    payCode: string;

    @IsDate()
    @IsOptional()
    confirmedAt?: Date;

    @Type(() => UserOutput)
    @ValidateNested()
    @IsOptional()
    confirmedBy?: UserOutput;
}

export class OrderInput
    implements UserInputData<Omit<OrderOutput, 'confirmedBy'>>
{
    @IsInt()
    @Min(1)
    items: number;

    @IsNumber()
    price: number;

    @IsInt()
    @Min(1)
    address: number;

    @IsString()
    @IsOptional()
    remark?: string;

    @IsString()
    payMethod: string;

    @IsString()
    payCode: string;

    @IsDate()
    @IsOptional()
    confirmedAt?: Date;

    @IsInt()
    @Min(1)
    @IsOptional()
    confirmedBy?: number;
}

export class OrderFilter extends BaseFilter implements Partial<OrderInput> {
    @IsString()
    @IsOptional()
    remark?: string;

    @IsString()
    @IsOptional()
    payMethod?: string;
}

export class OrderListChunk implements ListChunk<OrderOutput> {
    @IsInt()
    @Min(0)
    count: number;

    @Type(() => OrderOutput)
    @ValidateNested({ each: true })
    list: OrderOutput[];
}
