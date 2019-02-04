import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('obj')
export class ObjEntity {
    @PrimaryGeneratedColumn()
    objid: number;

    @Column({
        length: 100
    })
    desg: string;
}
