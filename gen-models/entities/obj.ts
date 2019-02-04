import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {eph} from "./eph";
import {found} from "./found";


@Entity("obj",{schema:"survey"})
export class obj {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"objid"
        })
    objid:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"desg"
        })
    desg:string;
        

   
    @OneToMany(type=>eph, eph=>eph.obj,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    ephs:eph[];
    

   
    @OneToMany(type=>found, found=>found.obj,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    founds:found[];
    
}
