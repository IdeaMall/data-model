import { Type } from 'class-transformer';
import {
    IsDate,
    IsEnum,
    IsInt,
    IsOptional,
    IsPhoneNumber,
    IsString,
    IsUrl,
    Min,
    ValidateNested
} from 'class-validator';
import { NewData } from 'mobx-restful';

import { BaseFilter, BaseModel, ListChunk } from './Base';

export enum Gender {
    Female,
    Male,
    Other
}

export enum Role {
    Root,
    Admin,
    Client
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

    @IsEnum(Role, { each: true })
    @IsOptional()
    roles?: Role[];
}

export class UserFilter extends BaseFilter implements NewData<UserInput> {
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

export class UserListChunk implements ListChunk<UserOutput> {
    @IsInt()
    @Min(0)
    count: number;

    @Type(() => UserOutput)
    @ValidateNested({ each: true })
    list: UserOutput[];
}
