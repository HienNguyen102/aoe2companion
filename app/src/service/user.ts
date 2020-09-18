import {fetchLeaderboard, fetchLeaderboardLegacy} from '../api/leaderboard';
import { groupBy, sortBy, sumBy } from 'lodash-es'
import {Flag} from "../helper/flags";
import {ILeaderboardPlayer} from "../helper/data";

export interface IFetchedUser {
    clan: string;
    country: Flag;
    drops: number;
    games: number;
    icon: any;
    last_match: Date;
    name: string;
    profile_id: number;
    steam_id: string;
    entries: ILeaderboardPlayer[];
}

export const loadUser = async (game: string, search: string) => {
    console.log("loading user", game, search);

    let leaderboards = await Promise.all([
        fetchLeaderboardLegacy(game, 0, {count: 50, search: search}),
        fetchLeaderboardLegacy(game, 1, {count: 50, search: search}),
        fetchLeaderboardLegacy(game, 2, {count: 50, search: search}),
        fetchLeaderboardLegacy(game, 3, {count: 50, search: search}),
        fetchLeaderboardLegacy(game, 4, {count: 50, search: search}),
    ]);

    // Group by
    const leaderboardEntries = leaderboards.flatMap(l => l.leaderboard);

    const users = groupBy(leaderboardEntries, l => l.steam_id + '-' + l.profile_id);

    const result = [];

    for (const userId in users) {
        const entries = users[userId];
        const sortedEntries = sortBy(entries, e => e.last_match);
        const mostRecentEntry = sortedEntries[0];

        result.push({
            clan: mostRecentEntry.clan,
            country: mostRecentEntry.country,
            icon: mostRecentEntry.icon,
            name: mostRecentEntry.name,
            last_match: mostRecentEntry.last_match,
            profile_id: mostRecentEntry.profile_id,
            steam_id: mostRecentEntry.steam_id,
            games: sumBy(entries, e => e.games),
            drops: sumBy(entries, e => e.drops),
            entries,
        } as IFetchedUser);
    }

    // console.log(leaderboards);
    // console.log(result);

    return result;
};
