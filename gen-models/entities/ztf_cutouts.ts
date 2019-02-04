import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {found} from "./found";
import {ztf_stacks} from "./ztf_stacks";


@Entity("ztf_cutouts",{schema:"survey"})
@Index("foundid",["found",])
@Index("stackid",["stack",])
export class ztf_cutouts {

   
    @ManyToOne(type=>found, found=>found.ztf_cutoutss,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'foundid'})
    found:found | null;


   
    @ManyToOne(type=>ztf_stacks, ztf_stacks=>ztf_stacks.ztf_cutoutss,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'stackid'})
    stack:ztf_stacks | null;


    @Column("varchar",{ 
        nullable:true,
        length:64,
        default: () => "'NULL'",
        name:"retrieved"
        })
    retrieved:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:64,
        default: () => "'NULL'",
        name:"archivefile"
        })
    archivefile:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"sciimg"
        })
    sciimg:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"mskimg"
        })
    mskimg:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"refimg"
        })
    refimg:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"scipsf"
        })
    scipsf:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"diffimg"
        })
    diffimg:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"diffpsf"
        })
    diffpsf:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"vangleimg"
        })
    vangleimg:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"sangleimg"
        })
    sangleimg:number | null;
        
}
