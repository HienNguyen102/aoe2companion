
export interface IChange {
    type: 'feature' | 'bugfix' | 'minor';
    title: string;
    content?: string;
}

export interface IChangelog {
    [version: string]: IChange[];
}

export const changelog: IChangelog = {
    '15.0.3': [
        {
            type: 'bugfix',
            title: 'Fix width w/ me',
        },
    ],
    '15.0.2': [
        {
            type: 'bugfix',
            title: 'Fix width for player name in leaderboard',
        },
    ],
    '15.0.1': [
        {
            type: 'bugfix',
            title: 'Fix display of game result (won/lost)',
        },
    ],
    '15.0.0': [
        {
            type: 'bugfix',
            title: 'Fix stable units position in full tech tree',
        },
    ],
    '14.0.18': [
        {
            type: 'feature',
            title: 'Show crown/skull for win/loose next to map',
        },
        {
            type: 'minor',
            title: 'Underline relevant players in following page and me/user match list',
        },
        {
            type: 'minor',
            title: 'Prepare for web version',
        },
    ],
    '14.0.17': [
        {
            type: 'bugfix',
            title: 'Fix user stats page',
        },
    ],
    '14.0.16': [
        {
            type: 'feature',
            title: 'Redesign user/me page',
        },
        {
            type: 'feature',
            title: 'Add leaderboard filter & search for user match list',
        },
        {
            type: 'feature',
            title: 'Added "Show more" button in player stats',
        },
        {
            type: 'minor',
            title: 'Added dismounted konnik',
        },
        {
            type: 'bugfix',
            title: 'Fix scout cavalry line upgrades (line of sight, speed, attack)',
        },
    ],
    '14.0.15': [
        {
            type: 'minor',
            title: 'Add time filter for rating history',
        },
        {
            type: 'bugfix',
            title: 'Fix statistics leaderboard picker',
        },
    ],
    '14.0.14': [
        {
            type: 'bugfix',
            title: 'Try to redirect to following page when notification is clicked',
        },
    ],
    '14.0.13': [
        {
            type: 'feature',
            title: 'Add unit comparison on unit page',
        },
        {
            type: 'feature',
            title: 'Add civ availability to unit/tech/building page',
        },
        {
            type: 'feature',
            title: 'Add affected units to tech page',
        },
        {
            type: 'feature',
            title: 'Add steam/xbox profile links to user page',
        },
        {
            type: 'minor',
            title: 'Added more tips & tricks',
        },
        {
            type: 'bugfix',
            title: 'Add hand cannoneer and slinger to unit list',
        },
        {
            type: 'bugfix',
            title: 'Fixed unit/tech links in civ description and bonus list',
        },
        {
            type: 'bugfix',
            title: 'Leaderboard page now has correctly sized rank column',
        },
    ],
    '14.0.12': [
        {
            type: 'minor',
            title: 'Click on my rank at the top of the leaderboard scrolls to my rank in the leaderboard',
        },
        {
            type: 'bugfix',
            title: 'Feed page does not show error when no players are being followed',
        },
    ],
    '14.0.11': [
        {
            type: 'bugfix',
            title: 'Me page is start page again',
        },
    ],
    '14.0.10': [
        {
            type: 'minor',
            title: 'Added scroll handle (circle on the right) to leaderboard',
        },
        // {
        //     type: 'bugfix',
        //     title: 'Open Following Page when push notification is clicked',
        // },
    ],
    '14.0.9': [
        {
            type: 'feature',
            title: 'Tips & Tricks',
        },
    ],
    '14.0.8': [
        {
            type: 'minor',
            title: 'Change default dark mode to system',
        },
        {
            type: 'bugfix',
            title: 'Show AI in match player list',
        },
        {
            type: 'bugfix',
            title: 'Filtering of unique unit counters for both weak vs. / strong vs.',
        },
        {
            type: 'bugfix',
            title: 'Fix fetching more player matches',
        },
    ],
    '14.0.7': [
        {
            type: 'bugfix',
            title: 'Fix civ/unit/tech/building screens',
        },
    ],
    '14.0.6': [
        {
            type: 'bugfix',
            title: 'Fixed storage of settings',
        },
    ],
    '14.0.5': [
        {
            type: 'feature',
            title: 'Push Notifications when followed player starts match (see settings)',
        },
        {
            type: 'feature',
            title: 'Increased followed players limit to 30',
        },
        {
            type: 'minor',
            title: 'Faster following page',
        },
        {
            type: 'bugfix',
            title: 'Try to fix country selector width',
        },
    ],
    '14.0.4': [
        {
            type: 'bugfix',
            title: 'Fixed country selector',
        },
    ],
    '14.0.3': [
        {
            type: 'feature',
            title: 'Add unique unit counters',
        },
    ],
    '14.0.2': [
        {
            type: 'bugfix',
            title: 'Try to fix country selector',
        },
    ],
    '14.0.0': [
        {
            type: 'minor',
            title: 'Prepare push notifications',
        },
    ],
    '13.0.0': [
        {
            type: 'minor',
            title: 'More info in user profile',
        },
    ],
    '12.0.14': [
        {
            type: 'minor',
            title: 'Prepare push notifications',
        },
    ],
    '12.0.13': [
        {
            type: 'bugfix',
            title: 'Lobby Browser now removes lobbies correctly',
        },
    ],
    '12.0.12': [
        {
            type: 'feature',
            title: 'Lobby Browser',
        },
    ],
    '12.0.11': [
        {
            type: 'bugfix',
            title: 'Bulgarian now have krepost in tech tree',
        },
        {
            type: 'bugfix',
            title: 'Show more armour classes for units',
        },
    ],
    '12.0.10': [
        {
            type: 'feature',
            title: 'Full tech tree on civ page',
        },
        {
            type: 'feature',
            title: 'Added buildings screen',
        },
        {
            type: 'minor',
            title: 'Sort unique units alphabetically',
        },
        {
            type: 'bugfix',
            title: 'Fixed unit list linking',
        },
    ],
    '12.0.9': [
        {
            type: 'minor',
            title: 'Implement AoE II DE Update 39284',
        },
        {
            type: 'minor',
            title: 'Techs/Units are now sorted into categories',
        },
        {
            type: 'bugfix',
            title: 'Tech/Unit search is not case sensitive anymore.',
        },
    ],
    '12.0.8': [
        {
            type: 'feature',
            title: 'Added pocket/flank position stats.',
        },
        {
            type: 'feature',
            title: 'Added ability to search for techs and units.',
        },
    ],
    '12.0.7': [
        {
            type: 'minor',
            title: 'Added supporter list to about page.',
        },
        {
            type: 'minor',
            title: 'Updated map images.',
        },
    ],
    '12.0.6': [
        {
            type: 'bugfix',
            title: 'Fix drop rate calculation.',
        },
    ],
    '12.0.5': [
        {
            type: 'minor',
            title: 'Transparent units/tech images for light mode.',
        },
    ],
    '12.0.3': [
        {
            type: 'bugfix',
            title: 'Fix footer popup menu for dark mode.',
        },
    ],
    '12.0.2': [
        {
            type: 'bugfix',
            title: 'Fix leaderboard.',
        },
    ],
    '12.0.1': [
        {
            type: 'minor',
            title: 'Added help and support links to footer popup menu. Add icons to popup menu.',
        },
        {
            type: 'bugfix',
            title: '"App updated..." notification only shows up once.',
        },
    ],
    '12.0.0': [
        {
            type: 'feature',
            title: 'Changelog',
            content: 'The changelog shows new features and bugfixes after each release.',
        },
        {
            type: 'minor',
            title: 'Added "my rank" to leaderboard',
        },
        {
            type: 'bugfix',
            title: 'Leaderboard does not fail if few entries are displayed.',
        },
        {
            type: 'bugfix',
            title: 'Startup screen is now "me" page again.',
        },
    ],
    '11.0.5': [
        {
            type: 'feature',
            title: 'Country Leaderboard',
            content: 'The leaderboard page can now show leaderboard for every country.',
        },
    ],
    '11.0.0': [
        {
            type: 'feature',
            title: 'System-based dark mode',
            content: 'Added option to change dark mode based on device settings.',
        },
        {
            type: 'bugfix',
            title: 'Fix status bar color in dark mode',
        },
    ],
    '10.0.6': [
        {
            type: 'feature',
            title: 'Statistics filtering',
            content: 'Added statistics filtering by leaderboard (RM 1v1, RM Team, DM 1v1, DM Team, Unranked)',
        },
        {
            type: 'feature',
            title: 'Dark Mode',
            content: 'Added dark mode (see settings)',
        },
    ],
    '10.0.4': [
        {
            type: 'feature',
            title: 'Update Bar',
            content: 'Check for updates on startup and show update bar if update is available.',
        },
    ],
    '10.0.3': [
        {
            type: 'minor',
            title: 'Added cost, training time and many other information on unit page',
        },
        {
            type: 'minor',
            title: 'Added cost, research time on tech page',
        },
        {
            type: 'minor',
            title: 'Added Parthian Tactics to tech tree',
        },
    ],
    '10.0.2': [
        {
            type: 'minor',
            title: 'Added Steppe Lancer, Battle Elephant and Eagle line to tech tree',
        },
        {
            type: 'minor',
            title: 'Fixed Indians civ page',
        },
    ],
};
