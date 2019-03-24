import {Request, Response} from "express";
import {state} from "../..";
import {formatNotFound} from "../../utils";
import {api} from "./api";

api.get('/projects', (req: Request, res: Response) => {
    res.json(state.projects);
});

api.get('/projects/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const project = state.projects.find(u => u.id === id);

    if (!project) {
        return res.status(404).json(formatNotFound(id));
    }

    res.json(project);
});