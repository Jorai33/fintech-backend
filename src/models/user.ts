import {getUUID} from "../utils";

export interface IUser {
    name: string;
    id: string;
}

export class User implements IUser {
    constructor(
        public name: string,
        public id: string = getUUID()
    ) {
    }

    static createFromDto(user: IUser) {
        return new User(user.name, user.id);
    }
}