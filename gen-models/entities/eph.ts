import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {obj} from "./obj";


@Entity("eph",{schema:"survey"})
@Index("objid",["obj",])
export class eph {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"ephid"
        })
    ephid:number;
        

   
    @ManyToOne(type=>obj, obj=>obj.ephs,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'objid'})
    obj:obj | null;


    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"jd"
        })
    jd:number | null;
        

    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"rh"
        })
    rh:number | null;
        

    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"delta"
        })
    delta:number | null;
        

    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"ra"
        })
    ra:number | null;
        

    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"dec"
        })
    dec:number | null;
        

    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"dra"
        })
    dra:number | null;
        

    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"ddec"
        })
    ddec:number | null;
        

    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"vmag"
        })
    vmag:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:64,
        default: () => "'NULL'",
        name:"retrieved"
        })
    retrieved:string | null;
        
}
