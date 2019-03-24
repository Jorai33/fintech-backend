import {Request, Response} from "express";
import {state} from "../..";
import {formatNotFound} from "../../utils";
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
