import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {setAuth, useMutate, useSelector} from '../redux/reducer';
import {useNavigationState} from "@react-navigation/native";
import {TabBarLabel} from "./components/tab-bar-label";
import {fetchPlayerMatches, LeaderboardId} from "@nex/data";
import {useCachedConservedLazyApi} from "../hooks/use-cached-conserved-lazy-api";
import {get, set} from 'lodash';
import {getStats} from "../service/stats";
import {FontAwesome5} from "@expo/vector-icons";
import MainProfile from "./main/main-profile";
import MainStats from "./main/main-stats";
import MainMatches from "./main/main-matches";
import {createStylesheet} from '../theming-new';
import {getTranslation} from '../helper/translate';
import Constants from 'expo-constants';
import {leaderboardIdsData} from '@nex/dataset';

const Tab = createMaterialTopTabNavigator();

interface MainPageInnerProps {
    profileId: number;
}

export function MainPageInner({ profileId }: MainPageInnerProps) {
    const loadingMatchesOrStatsTrigger = useSelector(state => state.loadingMatchesOrStats);
    const leaderboardId = useSelector(state => state.prefs.leaderboardId) ?? leaderboardIdsData[0];

    const currentTabIndex = useNavigationState(state => {
        const mainState = state.routes[state.index].state;

        // Direct navigation to child tab via web browser
        if (mainState && mainState.index == null && mainState.routes.length === 1) {
            return ['MainProfile', 'MainStats', 'MainMatches'].indexOf(mainState.routes[0].name);
        }
        return mainState?.index ?? 0;
    });

    console.log('CACHED API ACCESS', profileId);

    // let allMatches = useCachedConservedLazyApi(
    //     [currentTabIndex, loadingMatchesOrStatsTrigger],
    //     () => currentTabIndex > 0,
    //     state => get(state, ['user', user.id, 'matches']),
    //     (state, value) => set(state, ['user', user.id, 'matches'], value),
    //     fetchPlayerMatches, 'aoe2de', 0, 500, [user]
    // );
    //
    // useCachedConservedLazyApi(
    //     [allMatches.data, leaderboardId],
    //     () => allMatches.data != null,
    //     state => get(state, ['statsPlayer', user.id, leaderboardId]),
    //     (state, value) => set(state, ['statsPlayer', user.id, leaderboardId], value),
    //     getStats, {matches: allMatches.data, user: user, leaderboardId}
    // );

    const appName = Constants.expoConfig?.name || Constants.expoConfig2?.extra?.expoClient?.name;

    return (
            <Tab.Navigator screenOptions={{ lazy:true, swipeEnabled: true }}>
                <Tab.Screen name="MainProfile" options={{title: appName, tabBarLabel: (x) => <TabBarLabel {...x} title={getTranslation('main.heading.profile')}/>}} component={MainProfile} />
                <Tab.Screen name="MainStats" options={{title: appName, tabBarLabel: (x) => <TabBarLabel {...x} title={getTranslation('main.heading.stats')}/>}} component={MainStats} />
                <Tab.Screen name="MainMatches" options={{title: appName, tabBarLabel: (x) => <TabBarLabel {...x} title={getTranslation('main.heading.matches')}/>}} component={MainMatches} />
            </Tab.Navigator>
    );
}

const useStyles = createStylesheet(theme => StyleSheet.create({
    menu: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        flex: 1,
        marginRight: 10,
    },
    menuButton: {
        // backgroundColor: 'blue',
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        marginHorizontal: 2,
    },
    menuIcon: {
        opacity: 0.5,
        color: theme.textColor,
    },
}));
