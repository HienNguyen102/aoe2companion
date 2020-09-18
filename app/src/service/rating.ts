import { fetchRatingHistory } from '../api/rating-history';
import { composeUserId, minifyUserId, UserId, UserIdBase } from '../helper/user';
import {IRatingHistoryEntry} from "../helper/data";
import {LeaderboardId} from "../helper/leaderboards";

export interface IRatingHistoryRow {
    leaderboard_id: LeaderboardId;
    data: IRatingHistoryEntry[];
}

export const loadRatingHistories = async (game: string, userId: UserIdBase): Promise<IRatingHistoryRow[]> => {
    // console.log("loading ratings", game, composeUserId(userId));

    let ratingHistories = await Promise.all([
        fetchRatingHistory(game, 0, 0, 500, minifyUserId(userId)),
        fetchRatingHistory(game, 1, 0, 500, minifyUserId(userId)),
        fetchRatingHistory(game, 2, 0, 500, minifyUserId(userId)),
        fetchRatingHistory(game, 3, 0, 500, minifyUserId(userId)),
        fetchRatingHistory(game, 4, 0, 500, minifyUserId(userId)),
    ]);

    let ratingHistoryRows = ratingHistories.map((rh, i) => ({
        leaderboard_id: i as LeaderboardId,
        data: rh,
    }));

    ratingHistoryRows = ratingHistoryRows.filter(rh => rh.data?.length);

    // console.log("RETURNING ratingHistoryRows", ratingHistoryRows);

    return ratingHistoryRows;
};
