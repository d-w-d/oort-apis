import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {ztf} from "./ztf";


@Entity("obs",{schema:"survey"})
@Index("obs_sources",["source",])
export class obs {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"obsid"
        })
    obsid:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:32,
        default: () => "'NULL'",
        name:"source"
        })
    source:string | null;
        

    @Column("float",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:12,
        name:"jd_start"
        })
    jd_start:number | null;
        

    @Column("float",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:12,
        name:"jd_stop"
        })
    jd_stop:number | null;
        

    @Column("blob",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"fov"
        })
    fov:Buffer | null;
        

   
    @OneToMany(type=>ztf, ztf=>ztf.obs,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    ztfs:ztf[];
    
}
