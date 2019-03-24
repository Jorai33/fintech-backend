import {Request, Response} from "express";
import {state} from "../..";
import {formatNotFound, saveTasks} from "../../utils";
import {api} from "./api";

api.get('/tasks', (req: Request, res: Response) => {
    res.json(state.tasks);
});

api.get('/tasks/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const task = state.tasks.find(u => u.id === id);

    if (!task) {
        return res.status(404).json(formatNotFound(id));
    }

    res.json(task);
});

api.post('/tasks/toggle', async (req: Request, res: Response) => {
    const taskId = req.body.taskId;
    const task = state.tasks.find(task => task.id === taskId);
    if (!task) {
        return res.status(400).json({
            error: 400,
            message: `Task id ${taskId} not found!`
        });
    }

    task.completed = !task.completed;
    await saveTasks(state.tasks);
    res.json({success: true});
});
