import { StatusModel } from "./status.model";

export interface TaskModel{
    id: number;
    name: string;
    description: string;
    daysToComplete: number;
    status: StatusModel;
}