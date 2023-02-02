import {
    IsEnum,
    IsOptional,
    IsPhoneNumber,
    IsString,
    IsUrl
} from 'class-validator';

import { BaseModel } from './Base';

export enum Gender {
    Female,
    Male,
    Other
}

export class UserModel extends BaseModel {
    @IsPhoneNumber()
    mobilePhone: string;

    @IsString()
    @IsOptional()
    nickName?: string;

    @IsEnum(Gender)
    @IsOptional()
    gender?: Gender;

    @IsUrl()
    @IsOptional()
    avatar?: string;

    @IsString()
    @IsOptional()
    password?: string;

    @IsString()
    @IsOptional()
    token?: string;
}
