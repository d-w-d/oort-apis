import { getManager } from 'typeorm';
import { ztf } from '../entities/ztf';

export class ZtfRepo {
    getAllObjects() {
        // get Employee repository and find all employees
        return getManager()
            .getRepository(ztf)
            .find({
                take: 20
            });
    }

    // saveEmployee(employee: EmployeeEntity) {
    //     return getManager()
    //         .getRepository(EmployeeEntity)
    //         .save(employee);
    // }
}
