import { UUID } from "crypto";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: UUID;

    @Column('varchar')
    name: string;

    @Column('varchar')
    email: string;

    @Column('varchar')
    password: string;    

    @Column('varchar')
    authType: string;
}
