import { Type } from 'class-transformer';
import { IsDate, IsInt, IsOptional, ValidateNested } from 'class-validator';

import { UserModel } from './User';

export abstract class BaseModel {
    @IsInt()
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
