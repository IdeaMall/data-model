import { IsInt, IsOptional, IsString, Min } from 'class-validator';

import { UserOutput } from './User';

export interface BaseModel {
    id: number;
    createdAt: Date;
    updatedAt?: Date;
}

export interface UserBaseModel extends BaseModel {
    createdBy: UserOutput;
    updatedBy?: UserOutput;
}

export class BaseFilter {
    @IsInt()
    @Min(1)
    @IsOptional()
    pageSize?: number = 10;

    @IsInt()
    @Min(1)
    @IsOptional()
    pageIndex?: number = 1;

    @IsString()
    @IsOptional()
    keywords?: string;
}

export interface ListChunk<T extends BaseModel> {
    count: number;
    list: T[];
}
