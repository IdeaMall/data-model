import {
    IsDate,
    IsEnum,
    IsInt,
    IsOptional,
    IsPhoneNumber,
    IsString,
    IsUrl,
    Min
} from 'class-validator';
import { NewData } from 'mobx-restful';

import { BaseModel } from './Base';

export enum Gender {
    Female,
    Male,
    Other
}

export class UserInput {
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
}

export class UserFilter implements NewData<UserInput> {
    @IsPhoneNumber()
    @IsOptional()
    mobilePhone?: string;

    @IsString()
    @IsOptional()
    nickName?: string;

    @IsEnum(Gender)
    @IsOptional()
    gender?: Gender;
}

export class UserOutput extends UserInput implements BaseModel {
    @IsInt()
    @Min(1)
    id: number;

    @IsDate()
    createdAt: Date;

    @IsDate()
    @IsOptional()
    updatedAt?: Date;

    @IsString()
    @IsOptional()
    token?: string;
}
