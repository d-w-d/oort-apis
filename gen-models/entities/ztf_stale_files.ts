import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("ztf_stale_files",{schema:"survey"})
export class ztf_stale_files {

    @Column("varchar",{ 
        nullable:true,
        length:256,
        default: () => "'NULL'",
        name:"path"
        })
    path:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:256,
        default: () => "'NULL'",
        name:"file"
        })
    file:string | null;
        
}
