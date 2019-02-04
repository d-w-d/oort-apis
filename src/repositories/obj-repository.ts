import { getManager } from 'typeorm';
import { obj } from '../entities/obj';

export class ObjRepo {
    getAllObjects() {
        // get Employee repository and find all employees
        return getManager()
            .getRepository(obj)
            .find();
    }

    // saveEmployee(employee: EmployeeEntity) {
    //     return getManager()
    //         .getRepository(EmployeeEntity)
    //         .save(employee);
    // }
}
