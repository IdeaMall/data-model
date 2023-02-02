import { Type } from 'class-transformer';
import {
    IsEnum,
    IsOptional,
    IsPhoneNumber,
    IsString,
    IsUrl,
    ValidateNested
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

export abstract class UserBaseModel extends BaseModel {
    @Type(() => UserModel)
    @ValidateNested()
    createdBy: UserModel;

    @Type(() => UserModel)
    @ValidateNested()
    @IsOptional()
    updatedBy?: UserModel;
}
