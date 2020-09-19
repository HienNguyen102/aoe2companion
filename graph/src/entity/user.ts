import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryColumn()
    profile_id: number;

    @Column({ nullable: true })
    steam_id?: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    country?: string;

    @Column({ nullable: true })
    clan?: string;

    @Column({ nullable: true })
    icon?: string;

    @Column({ nullable: true })
    wins?: number;

    @Column({ nullable: true })
    drops?: number;

    @Column({ nullable: true })
    games?: number;

    @Column({ nullable: true })
    losses?: number;

    @Column({ nullable: true })
    rating?: number;

    @Column({ nullable: true })
    streak?: number;

    @Column({ nullable: true })
    last_match?: number;

    @Column({ nullable: true })
    lowest_streak?: number;

    @Column({ nullable: true })
    highest_rating?: number;

    @Column({ nullable: true })
    highest_streak?: number;

    @Column({ nullable: true })
    last_match_time?: number;

    @Column({ nullable: true })
    previous_rating?: number;

    // Live data

    @Column({ nullable: true })
    live_country?: string;

    @Column({ nullable: true })
    live_clan?: string;

    @Column({ nullable: true })
    live_wins?: number;

    @Column({ nullable: true })
    live_drops?: number;

    @Column({ nullable: true })
    live_games?: number;

    @Column({ nullable: true })
    live_rating?: number;

    @Column({ nullable: true })
    live_streak?: number;

    @Column({ nullable: true })
    live_last_match?: number;

    @Column({ nullable: true })
    live_last_match_time?: number;
}
