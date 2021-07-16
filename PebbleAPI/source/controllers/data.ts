import { NextFunction, Request, Response } from 'express';
import * as si from 'systeminformation';

const serverCPUcheck = (req: Request, res: Response, next: NextFunction) => {
    console.log('CPU route GET request');
    si.currentLoad().then((data) => {
        let returnObject = { sidata: {} }; // init a returnObject
        si.time();
        console.log(si.time(), data.currentLoad);
        returnObject.sidata = data.currentLoad;
        // get current data
        res.status(200).send(returnObject); // respond with data in array
    });
};

const serverMemorycheck = (req: Request, res: Response, next: NextFunction) => {
    console.log('Memory route GET request');
    si.mem().then((data) => {
        let returnObject = { sidata: {} }; // init a returnObject
        si.time();
        console.log(si.time(), data.used);
        returnObject.sidata = {
            memory: data.total * 9.31 * Math.pow(10, -10),
            used: data.used * 9.31 * Math.pow(10, -10)
        };
        // get current data
        res.status(200).send(returnObject); // respond with data in array
    });
};

export default { serverCPUcheck, serverMemorycheck };
