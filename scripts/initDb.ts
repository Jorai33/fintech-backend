import {User} from "../src/models/user";
import {Project} from "../src/models/project";
import {Task} from "../src/models/task";
import * as fs from 'fs';
import * as path from 'path';

const user = new User('Vita');
const project = new Project('test');
const task1 = new Task('Learn JS', 'Learn TypeScript. Its very nice!');
const task2 = new Task('Learn TS', 'Learn JavaScript. Its very nice!');
const task3 = new Task('Learn Angular', 'Learn Angular. Its very nice!');

task1.assignUser(user.id);
task2.assignUser(user.id);
task3.assignUser(user.id);

project.addTask(task1.id);
project.addTask(task2.id);
project.addTask(task3.id);

fs.writeFileSync(path.resolve(__dirname, '../../db/users.json'), JSON.stringify([user]));
fs.writeFileSync(path.resolve(__dirname, '../../db/projects.json'), JSON.stringify([project]));
fs.writeFileSync(path.resolve(__dirname, '../../db/tasks.json'), JSON.stringify([task1, task2, task3]));
