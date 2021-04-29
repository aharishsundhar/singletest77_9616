import { Request, Response } from 'express';
import {singleDao} from '../dao/singleDao';
import { CustomLogger } from '../config/Logger'
let single = new singleDao();

export class singleService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into singleService.ts: GpCreate')
     const  singleData = req.body;
     single.GpCreate(singleData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from singleService.ts: GpCreate')
         callback(response);
         });
    }


}