import express from "express";
import * as fs from 'fs';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import {IUser, User} from "./models/user";
import {State} from "./models/state";
import {IProject, Project} from "./models/project";
import {ITask, Task} from "./models/task";
import {api} from "./routes/api/api";

const PORT: string = process.env.PORT || '3000';

const usersJson = fs.readFileSync(path.resolve(__dirname, '../../db/users.json')).toString();
const projectsJson = fs.readFileSync(path.resolve(__dirname, '../../db/projects.json')).toString();
const tasksJson = fs.readFileSync(path.resolve(__dirname, '../../db/tasks.json')).toString();

export const state: State = {
    users: JSON.parse(usersJson).map((user: IUser) => User.createFromDto(user)),
    projects: JSON.parse(projectsJson).map((project: IProject) => Project.createFromDto(project)),
    tasks: JSON.parse(tasksJson).map((task: ITask) => Task.createFromDto(task))
};

const app = express();

app.use(bodyParser.json());
app.use('/api', api);

// serve static
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`App listen on localhost:${PORT}`);
});
