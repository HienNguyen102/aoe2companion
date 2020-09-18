import {fetchLeaderboard, fetchLeaderboardLegacy} from '../api/leaderboard';
import { sortBy, sumBy } from 'lodash-es'
import { IProfile } from '../view/components/profile';
import { composeUserId, minifyUserId, UserIdBase } from '../helper/user';

export const loadProfile = async (game: string, userId: UserIdBase): Promise<IProfile | null> => {
    // console.log("loading profile", game, composeUserId(userId));

    let leaderboards = await Promise.all([
        fetchLeaderboardLegacy(game, 0, {count: 1, ...minifyUserId(userId)}),
        fetchLeaderboardLegacy(game, 1, {count: 1, ...minifyUserId(userId)}),
        fetchLeaderboardLegacy(game, 2, {count: 1, ...minifyUserId(userId)}),
        fetchLeaderboardLegacy(game, 3, {count: 1, ...minifyUserId(userId)}),
        fetchLeaderboardLegacy(game, 4, {count: 1, ...minifyUserId(userId)}),
    ]);

    const leaderboardInfos = leaderboards.flatMap(l => l.leaderboard);
    const sortedLeaderboardInfos = sortBy(leaderboardInfos, l => l.last_match);
    const mostRecentLeaderboard = sortedLeaderboardInfos[0];

    if (sortedLeaderboardInfos?.length === 0) {
        return null;
    }

    return {
        clan: mostRecentLeaderboard.clan,
        country: mostRecentLeaderboard.country,
        icon: mostRecentLeaderboard.icon,
        name: mostRecentLeaderboard.name,
        profile_id: mostRecentLeaderboard.profile_id,
        steam_id: mostRecentLeaderboard.steam_id,
        games: sumBy(leaderboardInfos, l => l.games),
        drops: sumBy(leaderboardInfos, l => l.drops),
        leaderboards: leaderboards.filter(l => l.leaderboard?.length > 0),
    };
};
