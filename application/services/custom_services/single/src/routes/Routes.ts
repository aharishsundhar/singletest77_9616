import { Request, Response, NextFunction } from "express";
import { singleController } from '../controller/singleController';


export class Routes {
    private single: singleController = new singleController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/single').post(this.single.GpCreate);
     }

}