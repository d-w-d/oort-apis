import { getManager } from 'typeorm';
import { ztf } from '../entities/ztf';

export class ZtfRepo {
    getAllObjects() {
        // get Employee repository and find all employees
        return getManager()
            .getRepository(ztf)
            .find(
                //
                {
                    //
                    // select: ['obsdate'],
                    take: 50
                }
            );
        //     {
        //     take: 20
        // }
    }

    // saveEmployee(employee: EmployeeEntity) {
    //     return getManager()
    //         .getRepository(EmployeeEntity)
    //         .save(employee);
    // }
}
