import 'reflect-metadata'; //Needed for decorators
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import * as appConfig from './config/app-config';

// Express setup
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 3000);

// Primary app routes
import * as empController from './controllers/employee-controller';
import * as objController from './controllers/obj-controller';
import * as testController from './controllers/test-controller';

app.get('/GetAllEmployees', empController.getAllEmployees);
app.post('/SaveEmployee', empController.saveEmployee);
app.get('/GetAllObjs', objController.getAllObjs);
app.get('/test', testController.getTestRoute);

// Connect to DB
createConnection(appConfig.dbOptions)
    .then(async connection => {
        console.log('Connected to DB');
    })
    .catch(error => console.log('TypeORM connection error: ', error));

// Finish
app.listen(app.get('port'), () => {
    console.log('\n\n----------------');
    console.log(`App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`);
    console.log('----------------\n\n');
});

module.exports = app;
