import { Type } from 'class-transformer';
import {
    IsDate,
    IsInt,
    IsOptional,
    IsString,
    Min,
    ValidateNested
} from 'class-validator';

import { ListChunk, UserBaseModel } from './Base';
import { UserOutput } from './User';

export class AddressInput {
    @IsString()
    country: string;

    @IsString()
    province: string;

    @IsString()
    city: string;

    @IsString()
    district: string;

    @IsString()
    road: string;

    @IsString()
    @IsOptional()
    number?: string;

    @IsString()
    building: string;

    @IsString()
    @IsOptional()
    floor?: string;

    @IsString()
    @IsOptional()
    room?: string;

    @IsString()
    consignee: string;
}

export class AddressOutput extends AddressInput implements UserBaseModel {
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

export class AddressListChunk implements ListChunk<AddressOutput> {
    @IsInt()
    @Min(0)
    count: number;

    @Type(() => AddressOutput)
    @ValidateNested({ each: true })
    list: AddressOutput[];
}
