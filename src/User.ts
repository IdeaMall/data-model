import { Type } from 'class-transformer';
import {
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

import { BaseFilter, BaseOutput, InputData, ListChunk } from './Base';

export enum Gender {
    Female,
    Male,
    Other
}

export enum Role {
    Administrator,
    Manager,
    Client
}

export class UserOutput extends BaseOutput {
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

    @IsEnum(Role, { each: true })
    @IsOptional()
    roles?: Role[];

    @IsString()
    @IsOptional()
    token?: string;
}

export class UserInput implements InputData<UserOutput> {
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

export class UserFilter extends BaseFilter implements Partial<UserInput> {
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

export class UserListChunk implements ListChunk<UserOutput> {
    @IsInt()
    @Min(0)
    count: number;

    @Type(() => UserOutput)
    @ValidateNested({ each: true })
    list: UserOutput[];
}

export abstract class UserBaseOutput extends BaseOutput {
    @Type(() => UserOutput)
    @ValidateNested()
    createdBy: UserOutput;

    @Type(() => UserOutput)
    @ValidateNested()
    @IsOptional()
    updatedBy?: UserOutput;
}

export type UserInputData<T> = NewData<
    Omit<T, keyof UserBaseOutput>,
    UserBaseOutput
>;
