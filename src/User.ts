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

export enum Gender {
    Female,
    Male,
    Other
}

export abstract class BaseModel {
    @IsInt()
    @Min(1)
    id: number;

    @IsDate()
    createdAt: Date;

    @Type(() => UserModel)
    @ValidateNested()
    createdBy: UserModel;

    @IsDate()
    @IsOptional()
    updatedAt?: Date;

    @Type(() => UserModel)
    @ValidateNested()
    @IsOptional()
    updatedBy?: UserModel;
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
