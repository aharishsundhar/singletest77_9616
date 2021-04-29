import { Request, Response } from 'express';
import { singleService } from '../service/singleService';
import { CustomLogger } from '../config/Logger'
let single = new singleService();

export class singleController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
single.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into singleController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from singleController.ts: GpCreate');
    })}


}