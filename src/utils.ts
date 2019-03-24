import {IError} from "./models/error";

export function getUUID(): string {
    return Math.random().toString(32).substring(2);
}

export function formatNotFound(id: string, message = `${id} not found`): IError {
    return {
        code: 404,
        message
    }
}
