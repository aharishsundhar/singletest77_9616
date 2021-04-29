import * as mongoose from 'mongoose';
import singleModel from '../models/single';
import { CustomLogger } from '../config/Logger'


export class singleDao {
    private single = singleModel;
    constructor() { }
public GpCreate(singleData, callback){
new CustomLogger().showLogger('info', 'Enter into singleDao.ts: GpCreate')
let temp = new singleModel(singleData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from singleDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}