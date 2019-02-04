import { Request, Response } from 'express';

export let getTestRoute = async (req: Request, res: Response) => {
    res.send('This is a test GET route');
};
