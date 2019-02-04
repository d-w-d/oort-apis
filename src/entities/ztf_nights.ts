import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {ztf} from "./ztf";


@Entity("ztf_nights",{schema:"survey"})
@Index("date",["date",],{unique:true})
export class ztf_nights {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"nightid"
        })
    nightid:number;
        

    @Column("varchar",{ 
        nullable:true,
        unique: true,
        length:64,
        default: () => "'NULL'",
        name:"date"
        })
    date:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"exposures"
        })
    exposures:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'NULL'",
        name:"quads"
        })
    quads:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:64,
        default: () => "'NULL'",
        name:"retrieved"
        })
    retrieved:string | null;
        

   
    @OneToMany(type=>ztf, ztf=>ztf.night,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    ztfs:ztf[];
    
}
