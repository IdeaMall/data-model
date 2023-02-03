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
