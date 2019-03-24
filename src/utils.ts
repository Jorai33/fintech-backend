import {IError} from "./models/error";
import {ITask} from "./models/task";
import * as fs from 'fs';
import * as path from 'path';

export function getUUID(): string {
    return Math.random().toString(32).substring(2);
}

export function formatNotFound(id: string, message = `${id} not found`): IError {
    return {
        code: 404,
        message
    }
}

export async function saveTasks(tasks: ITask[]) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(__dirname, '../../db/tasks.json'), tasks, function (error) {
            if (error) {
                return reject(error);
            }

            resolve()
        });
    })
}
