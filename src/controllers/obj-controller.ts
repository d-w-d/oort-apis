import { Request, Response } from 'express';
import { ObjRepo } from '../repositories/obj-repository';
import { ZtfRepo } from '../repositories/ztf-repository';

export let getAllObjs = async (req: Request, res: Response) => {
    let objRepo: ObjRepo = new ObjRepo();

    console.log('Querying ZTF...');

    // res.send('Received Get Employee Request..');
    objRepo.getAllObjects().then((result: any) => {
        console.log('Result : ' + result);
        res.send(result);
    });
};

// export let saveEmployee = async (req: Request, res: Response) => {
//     let empRepo: EmployeeRepo = new EmployeeRepo();

//     console.log('Received SaveEmployee ==> POST');
//     console.log(req.body);

//     let emp: EmployeeEntity = new EmployeeEntity();
//     emp.email = req.body.email;
//     emp.firstName = req.body.firstName;
//     emp.lastName = req.body.lastName;

//     empRepo.saveEmployee(emp).then((result: any) => {
//         console.log('Result : ' + result);
//         res.send(result);
//     });
// };
