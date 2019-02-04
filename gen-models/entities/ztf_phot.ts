import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("ztf_phot",{schema:"survey"})
export class ztf_phot {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"foundid"
        })
    foundid:number;
        

    @Column("float",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:12,
        name:"dx"
        })
    dx:number | null;
        

    @Column("float",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:12,
        name:"dy"
        })
    dy:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"bgap"
        })
    bgap:number | null;
        

    @Column("float",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:12,
        name:"bg"
        })
    bg:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"bg_area"
        })
    bg_area:number | null;
        

    @Column("float",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:12,
        name:"bg_stdev"
        })
    bg_stdev:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"nap"
        })
    nap:number | null;
        

    @Column("blob",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"rap"
        })
    rap:Buffer | null;
        

    @Column("blob",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"flux"
        })
    flux:Buffer | null;
        

    @Column("blob",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"m"
        })
    m:Buffer | null;
        

    @Column("blob",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"merr"
        })
    merr:Buffer | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"flag"
        })
    flag:number | null;
        
}
