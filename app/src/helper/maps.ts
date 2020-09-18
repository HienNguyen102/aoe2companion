import {getString, getStringId} from "./strings";

export const maps = {
    9: require('../../assets/maps/rm_arabia.png'),
    10: require('../../assets/maps/rm_archipelago.png'),
    11: require('../../assets/maps/rm_baltic.png'),
    12: require('../../assets/maps/rm_black-forest.png'),
    13: require('../../assets/maps/rm_coastal.png'),
    14: require('../../assets/maps/rm_continental.png'),
    15: require('../../assets/maps/rm_crater-lake.png'),
    16: require('../../assets/maps/rm_fortress.png'),
    17: require('../../assets/maps/rm_gold-rush.png'),
    18: require('../../assets/maps/rm_highland.png'),
    19: require('../../assets/maps/rm_islands.png'),
    20: require('../../assets/maps/rm_mediterranean.png'),
    21: require('../../assets/maps/rm_migration.png'),
    22: require('../../assets/maps/rm_rivers.png'),
    23: require('../../assets/maps/rm_team-islands.png'),
    24: require('../../assets/maps/rm_full-random.png'),
    25: require('../../assets/maps/rm_scandinavia.png'),
    26: require('../../assets/maps/rm_mongolia.png'),
    27: require('../../assets/maps/rm_yucatan.png'),
    28: require('../../assets/maps/rm_salt-marsh.png'),
    29: require('../../assets/maps/rm_arena.png'),
    31: require('../../assets/maps/rm_oasis.png'),
    32: require('../../assets/maps/rm_ghost-lake.png'),
    33: require('../../assets/maps/rm_nomad.png'),
    49: require('../../assets/maps/rwm_iberia.png'),
    50: require('../../assets/maps/rwm_britain.png'),
    51: require('../../assets/maps/rwm_mideast.png'),
    52: require('../../assets/maps/rwm_texas.png'),
    53: require('../../assets/maps/rwm_italy.png'),
    54: require('../../assets/maps/rwm_central_america.png'),
    55: require('../../assets/maps/rwm_france.png'),
    56: require('../../assets/maps/rwm_norse_lands.png'),
    57: require('../../assets/maps/rwm_sea_of_japan.png'),
    58: require('../../assets/maps/rwm_byzantium.png'),
    59: require('../../assets/maps/cm_generic.png'),
    60: require('../../assets/maps/rm_random_land_map.png'),
    62: require('../../assets/maps/rwm_random_real_world_map.png'),
    63: require('../../assets/maps/rm_blind_random.png'),
    // 65: require('../../assets/maps/random special map'),
    // 66: require('../../assets/maps/random special map'),
    67:  require('../../assets/maps/rm_acropolis.png'),
    68:  require('../../assets/maps/rm_budapest.png'),
    69:  require('../../assets/maps/rm_cenotes.png'),
    70:  require('../../assets/maps/rm_city-of-lakes.png'),
    71:  require('../../assets/maps/rm_golden-pit.png'),
    72:  require('../../assets/maps/rm_hideout.png'),
    73:  require('../../assets/maps/rm_hill-fort.png'),
    74:  require('../../assets/maps/rm_lombardia.png'),
    75:  require('../../assets/maps/rm_steppe.png'),
    76:  require('../../assets/maps/rm_valley.png'),
    77:  require('../../assets/maps/rm_megarandom.png'),
    78:  require('../../assets/maps/rm_hamburger.png'),
    79:  require('../../assets/maps/rm_ctr_random.png'),
    80:  require('../../assets/maps/rm_ctr_monsoon.png'),
    81:  require('../../assets/maps/rm_ctr_pyramid-descent.png'),
    82:  require('../../assets/maps/rm_ctr_spiral.png'),
    83:  require('../../assets/maps/rm_kilimanjaro.png'),
    84:  require('../../assets/maps/rm_mountain-pass.png'),
    85:  require('../../assets/maps/rm_nile-delta.png'),
    86:  require('../../assets/maps/rm_serengeti.png'),
    87:  require('../../assets/maps/rm_socotra.png'),
    88:  require('../../assets/maps/rwm_amazon.png'),
    89:  require('../../assets/maps/rwm_china.png'),
    90:  require('../../assets/maps/rwm_horn_of_africa.png'),
    91:  require('../../assets/maps/rwm_india.png'),
    92:  require('../../assets/maps/rwm_madagascar.png'),
    93:  require('../../assets/maps/rwm_west_africa.png'),
    94:  require('../../assets/maps/rwm_bohemia.png'),
    95:  require('../../assets/maps/rwm_earth.png'),
    96:  require('../../assets/maps/sm_canyons.png'),
    97:  require('../../assets/maps/sm_enemy-archipelago.png'),
    98:  require('../../assets/maps/sm_enemy-islands.png'),
    99:  require('../../assets/maps/sm_far-out.png'),
    100: require('../../assets/maps/sm_front-line.png'),
    101: require('../../assets/maps/sm_inner-circle.png'),
    102: require('../../assets/maps/sm_motherland.png'),
    103: require('../../assets/maps/sm_open-plains.png'),
    104: require('../../assets/maps/sm_ring-of-water.png'),
    105: require('../../assets/maps/sm_snake-pit.png'),
    106: require('../../assets/maps/sm_the-eye.png'),
    107: require('../../assets/maps/rwm_australia.png'),
    108: require('../../assets/maps/rwm_indochina.png'),
    109: require('../../assets/maps/rwm_indonesia.png'),
    110: require('../../assets/maps/rwm_strait_of_malacca.png'),
    111: require('../../assets/maps/rwm_phillipines.png'),
    112: require('../../assets/maps/rm_bog-islands.png'),
    113: require('../../assets/maps/rm_mangrove-jungle.png'),
    114: require('../../assets/maps/rm_pacific-islands.png'),
    115: require('../../assets/maps/rm_sandbank.png'),
    116: require('../../assets/maps/rm_water-nomad.png'),
    117: require('../../assets/maps/sm_jungle-islands.png'),
    118: require('../../assets/maps/sm_holy-line.png'),
    119: require('../../assets/maps/sm_border-stones.png'),
    120: require('../../assets/maps/sm_yin-yang.png'),
    121: require('../../assets/maps/sm_jungle-lanes.png'),
    122: require('../../assets/maps/rm_alpine-lakes.png'),
    123: require('../../assets/maps/rm_bogland.png'),
    124: require('../../assets/maps/rm_mountain-ridge.png'),
    125: require('../../assets/maps/rm_ravines.png'),
    126: require('../../assets/maps/rm_wolf-hill.png'),
    132: require('../../assets/maps/rwm_antarctica.png'),
    137: require('../../assets/maps/cm_generic.png'),
    139: require('../../assets/maps/rm_golden-swamp.png'),
    140: require('../../assets/maps/rm_four-lakes.png'),
    141: require('../../assets/maps/rm_land_nomad.png'),
};

export type AoeMap = keyof typeof maps;

export function getMapImage(map: AoeMap) {
    if (map == null) {
        return require('../../assets/maps/cm_generic.png');
    }
    return maps[map];
}

export function getMapImageByLocationString(map: string) {
    if (map == null) {
        return require('../../assets/maps/cm_generic.png');
    }
    const stringId = getStringId('map_type', map) as AoeMap;
    if (stringId == null || !(stringId in maps)) {
        return require('../../assets/maps/cm_generic.png');
    }
    return maps[stringId as AoeMap];
}

export function getMapName(map: AoeMap) {
    if (map == null) {
        return 'Custom';
    }
    return getString('map_type', map);
}

