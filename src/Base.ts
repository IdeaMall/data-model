import { IsDate, IsInt, IsOptional, Min } from 'class-validator';

export abstract class BaseModel {
    @IsInt()
    @Min(1)
    id: number;

    @IsDate()
    createdAt: Date;

    @IsDate()
    @IsOptional()
    updatedAt?: Date;
}
