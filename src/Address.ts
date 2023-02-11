import { Type } from 'class-transformer';
import {
    IsInt,
    IsOptional,
    IsPhoneNumber,
    IsPostalCode,
    IsString,
    Min,
    ValidateNested
} from 'class-validator';

import { ListChunk } from './Base';
import { UserBaseOutput, UserInputData } from './User';

export class AddressOutput extends UserBaseOutput {
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

    @IsPostalCode()
    @IsOptional()
    zipCode?: string;

    @IsString()
    consignee: string;

    @IsPhoneNumber()
    mobilePhone: string;
}

export class AddressInput implements UserInputData<AddressOutput> {
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

    @IsPostalCode()
    @IsOptional()
    zipCode?: string;

    @IsString()
    consignee: string;

    @IsPhoneNumber()
    mobilePhone: string;
}

export class AddressListChunk implements ListChunk<AddressOutput> {
    @IsInt()
    @Min(0)
    count: number;

    @Type(() => AddressOutput)
    @ValidateNested({ each: true })
    list: AddressOutput[];
}
