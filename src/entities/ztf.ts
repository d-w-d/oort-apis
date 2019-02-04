import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {obs} from "./obs";
import {ztf_nights} from "./ztf_nights";


@Entity("ztf",{schema:"survey"})
@Index("obsid",["obs",])
@Index("nightid",["night",])
export class ztf {

   
    @ManyToOne(type=>obs, obs=>obs.ztfs,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'obsid'})
    obs:obs | null;


    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"pid"
        })
    pid:string;
        

   
    @ManyToOne(type=>ztf_nights, ztf_nights=>ztf_nights.ztfs,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'nightid'})
    night:ztf_nights | null;


    @Column("varchar",{ 
        nullable:true,
        length:64,
        default: () => "'NULL'",
        name:"obsdate"
        })
    obsdate:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"infobits"
        })
    infobits:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"field"
        })
    field:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"ccdid"
        })
    ccdid:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"qid"
        })
    qid:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"rcid"
        })
    rcid:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"fid"
        })
    fid:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:2,
        default: () => "'NULL'",
        name:"filtercode"
        })
    filtercode:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"expid"
        })
    expid:number | null;
        

    @Column("bigint",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"filefracday"
        })
    filefracday:string | null;
        

    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"seeing"
        })
    seeing:number | null;
        

    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"airmass"
        })
    airmass:number | null;
        

    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"moonillf"
        })
    moonillf:number | null;
        

    @Column("double",{ 
        nullable:true,
        default: () => "'NULL'",
        precision:22,
        name:"maglimit"
        })
    maglimit:number | null;
        
}
