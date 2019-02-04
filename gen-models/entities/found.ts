import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {obj} from "./obj";
import {ztf_cutouts} from "./ztf_cutouts";


@Entity("found",{schema:"survey"})
@Index("objid",["obj",])
export class found {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"foundid"
        })
    foundid:number;
        

   
    @ManyToOne(type=>obj, obj=>obj.founds,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'objid'})
    obj:obj | null;


    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"obsid"
        })
    obsid:number | null;
        

    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"obsjd"
        })
    obsjd:number | null;
        

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
        name:"ra3sig"
        })
    ra3sig:number | null;
        

    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"dec3sig"
        })
    dec3sig:number | null;
        

    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"vmag"
        })
    vmag:number | null;
        

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
        name:"rdot"
        })
    rdot:number | null;
        

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
        name:"phase"
        })
    phase:number | null;
        

    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"selong"
        })
    selong:number | null;
        

    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"sangle"
        })
    sangle:number | null;
        

    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"vangle"
        })
    vangle:number | null;
        

    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"trueanomaly"
        })
    trueanomaly:number | null;
        

    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"tmtp"
        })
    tmtp:number | null;
        

   
    @OneToMany(type=>ztf_cutouts, ztf_cutouts=>ztf_cutouts.found,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    ztf_cutoutss:ztf_cutouts[];
    
}
