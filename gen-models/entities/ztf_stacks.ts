import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {ztf_cutouts} from "./ztf_cutouts";


@Entity("ztf_stacks",{schema:"survey"})
export class ztf_stacks {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"stackid"
        })
    stackid:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:64,
        default: () => "'NULL'",
        name:"stackfile"
        })
    stackfile:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:64,
        default: () => "'NULL'",
        name:"stackdate"
        })
    stackdate:string | null;
        

   
    @OneToMany(type=>ztf_cutouts, ztf_cutouts=>ztf_cutouts.stack,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    ztf_cutoutss:ztf_cutouts[];
    
}
