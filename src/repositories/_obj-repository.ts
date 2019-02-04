import { getManager } from 'typeorm';
import { ObjEntity } from '../entities/_obj-entity';

export class ObjRepo {
    getAllObjects() {
        // get Employee repository and find all employees
        return getManager()
            .getRepository(ObjEntity)
            .find();
    }

    // saveEmployee(employee: EmployeeEntity) {
    //     return getManager()
    //         .getRepository(EmployeeEntity)
    //         .save(employee);
    // }
}
