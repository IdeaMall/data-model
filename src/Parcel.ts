import { Type } from 'class-transformer';
import { IsInt, IsString, Min, ValidateNested } from 'class-validator';

import { GoodsItemOutput } from './GoodsItem';
import { OrderOutput } from './Order';
import { UserBaseOutput, UserInputData } from './User';

export class ParcelOutput extends UserBaseOutput {
    @Type(() => OrderOutput)
    @ValidateNested()
    order: OrderOutput;

    @Type(() => GoodsItemOutput)
    @ValidateNested({ each: true })
    items: GoodsItemOutput[];

    get kilogram() {
        return this.items.reduce((sum, { kilogram }) => sum + kilogram, 0);
    }

    get address() {
        return this.order.address;
    }

    @IsString()
    postCompany: string;

    @IsString()
    trackCode: string;
}

export class ParcelInput
    implements UserInputData<Omit<ParcelOutput, 'kilogram' | 'address'>>
{
    @IsInt()
    @Min(1)
    order: number;

    @IsInt({ each: true })
    @Min(1)
    items: number[];

    @IsString()
    postCompany: string;

    @IsString()
    trackCode: string;
}
