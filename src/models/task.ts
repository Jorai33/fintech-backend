import {getUUID} from "../utils";

export interface ITask {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    assignedUser: string;
}

export class Task implements ITask {
    constructor(
        public title: string,
        public description: string,
        public id: string = getUUID(),
        public completed = false,
        public assignedUser: string = ''
    ) {
    }

    static createFromDto(task: ITask): Task {
        return new Task(task.title, task.description, task.id, task.completed, task.assignedUser);
    }

    toggleCompleted(): boolean {
        this.completed = !this.completed;
        return this.completed;
    }

    assignUser(userId: string) {
        this.assignedUser = userId;
    }
}