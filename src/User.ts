import { IsEnum, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

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
    gender: Gender;
}
