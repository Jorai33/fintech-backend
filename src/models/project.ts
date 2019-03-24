import {getUUID} from "../utils";

export interface IProject {
    id: string;
    name: string;
    tasks: string[];
}

export class Project implements IProject {
    constructor(
        public name: string,
        public id: string = getUUID(),
        public tasks: string[] = []) {
    }

    static create(name: string) {
        return new Project(name)
    }

    static createFromDto(project: IProject) {
        return new Project(project.name, project.id, project.tasks)
    }

    addTask(taskId: string) {
        this.tasks.push(taskId);
    }
}