import { Type } from 'class-transformer';
import { IsDate, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { NewData } from 'mobx-restful';

export abstract class BaseOutput {
    @IsInt()
    @Min(1)
    id: number;

    @IsDate()
    createdAt: Date;

    @IsDate()
    @IsOptional()
    updatedAt?: Date;
}

export type InputData<T> = NewData<Omit<T, keyof BaseOutput>, BaseOutput>;

export class BaseFilter {
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @IsOptional()
    pageSize?: number = 10;

    @Type(() => Number)
    @IsInt()
    @Min(1)
    @IsOptional()
    pageIndex?: number = 1;

    @IsString()
    @IsOptional()
    keywords?: string;
}

export interface ListChunk<T extends BaseOutput> {
    count: number;
    list: T[];
}
