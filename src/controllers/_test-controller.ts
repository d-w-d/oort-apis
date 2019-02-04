import { Request, Response } from 'express';

export let getTestRoute = async (req: Request, res: Response) => {
    res.send('This is a test GET route');
};

export let getTestRoute2 = async (req: Request, res: Response) => {
    res.send('This is a test GET route 2');
};

export let getTestRouteCCCC = async (req: Request, res: Response) => {
    res.send('This is a test GET route CCCC');
};

export let getTestRouteAll = async (req: Request, res: Response) => {
    res.send('This is a test GET route ****');
};
