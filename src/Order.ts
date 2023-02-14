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
import { ParcelOutput } from './Parcel';
import { UserBaseOutput, UserInputData, UserOutput } from './User';

export class OrderOutput extends UserBaseOutput {
    @Type(() => GoodsItemOutput)
    @ValidateNested({ each: true })
    items: GoodsItemOutput[];

    @IsInt({ each: true })
    @Min(1)
    itemCounts: number[];

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

    @Type(() => ParcelOutput)
    @ValidateNested({ each: true })
    @IsOptional()
    parcels?: ParcelOutput[];

    @IsDate()
    @IsOptional()
    confirmedAt?: Date;

    @Type(() => UserOutput)
    @ValidateNested()
    @IsOptional()
    confirmedBy?: UserOutput;
}

export class OrderInput
    implements UserInputData<Omit<OrderOutput, 'parcels' | 'confirmedBy'>>
{
    @IsInt({ each: true })
    @Min(1)
    items: number[];

    @IsInt({ each: true })
    @Min(1)
    itemCounts: number[];

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

    @IsInt({ each: true })
    @Min(1)
    parcels?: number[];

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
