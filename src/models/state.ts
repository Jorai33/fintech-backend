import {IProject} from "./project";
import {ITask} from "./task";
import {IUser} from "./user";

export interface State {
    users: IUser[],
    projects: IProject[],
    tasks: ITask[]
}
