import { Type } from 'class-transformer';
import {
    IsEnum,
    IsInt,
    IsOptional,
    IsPhoneNumber,
    IsString,
    Min,
    ValidateNested
} from 'class-validator';

import { ListChunk } from './Base';
import { UserBaseOutput, UserInputData } from './User';

export enum AddressOwner {
    Seller,
    Buyer
}

export class AddressOutput extends UserBaseOutput {
    @IsEnum(AddressOwner)
    ownership: AddressOwner;

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
    @IsOptional()
    zipCode?: string;

    @IsString()
    signature: string;

    @IsPhoneNumber()
    mobilePhone: string;
}

export class AddressInput implements UserInputData<AddressOutput> {
    @IsEnum(AddressOwner)
    ownership: AddressOwner;

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
    @IsOptional()
    zipCode?: string;

    @IsString()
    signature: string;

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
