import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from "typeorm";

@Entity()
export class Push {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    body: string;

    @Column({ nullable: true })
    push_token?: string;

    @Column({ nullable: true })
    status?: string;

    @CreateDateColumn()
    created_at: Date;
}
