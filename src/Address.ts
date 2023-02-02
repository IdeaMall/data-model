import { IsOptional, IsString } from 'class-validator';

import { UserBaseModel } from './User';

export class AddressModel extends UserBaseModel {
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
