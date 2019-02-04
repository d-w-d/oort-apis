import 'reflect-metadata';
import { ConnectionOptions } from 'typeorm';
import { ObjEntity } from '../entities/_obj-entity';
import { ztf } from '../entities/ztf';
import { obs } from '../entities/obs';
import { ztf_nights } from '../entities/ztf_nights';
import { resolve } from 'path';
import * as dotenv from 'dotenv';
import { obj } from '../entities/obj';
dotenv.config({ path: resolve() + '/.env' });

export let dbOptions: ConnectionOptions = {
    type: process.env.DBTYPE as any,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBDATABASE,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    //     entities: ['./entities/obj-entity.js'],
    entities: ['./dist/entities/*.js'],
    // entities: [ObjEntity, ztf, obs, ztf_nights, obj],
    synchronize: !true
};
