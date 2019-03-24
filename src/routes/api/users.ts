import {Request, Response} from "express";
import {state} from "../..";
import {formatNotFound} from "../../utils";
import {api} from "./api";

api.get('/users', (req: Request, res: Response) => {
    res.json(state.users);
});

api.get('/users/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const user = state.users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json(formatNotFound(id));
    }

    res.json(user);
});
