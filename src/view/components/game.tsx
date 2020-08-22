import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {getString} from '../../helper/strings';
import {formatAgo} from '../../helper/util';
import React from 'react';
import {Player, PlayerSkeleton} from './player';
import MyListAccordion from './accordion';
import {IMatch} from "../../helper/data";
import { getMapImage, getMapName } from "../../helper/maps";
import {TextLoader} from "./loader/text-loader";
import {ImageLoader} from "./loader/image-loader";
import {ViewLoader} from "./loader/view-loader";
import {groupBy} from "lodash-es";
import {differenceInSeconds} from "date-fns";
import { MyText } from './my-text';
import {ITheme, makeVariants, useTheme} from "../../theming";
import IconFA5 from "react-native-vector-icons/FontAwesome5";
import {sameUser, sameUserNull, UserIdBase} from "../../helper/user";

interface IGameProps {
    data: IMatch;
    expanded?: boolean;
    user?: UserIdBase;
    highlightedUsers?: UserIdBase[];
}

const formatDuration = (start: Date, finish: Date) => {
    const diffTime = differenceInSeconds(finish, start);
    if (!diffTime) return '00:00'; // divide by 0 protection
    const minutes = Math.abs(Math.floor(diffTime / 60) % 60).toString();
    const hours = Math.abs(Math.floor(diffTime / 60 / 60)).toString();
    return `${hours.length < 2 ? 0 + hours : hours}:${minutes.length < 2 ? 0 + minutes : minutes} min`;
};

export function Game({data, user, highlightedUsers, expanded = false}: IGameProps) {
    const styles = useTheme(variants);
    if (data == null) {
        const playersInTeam1 = Array(3).fill(0);
        const playersInTeam2 = Array(3).fill(0);
        return (
            <View>
                <MyListAccordion
                    style={styles.accordion}
                    expanded={expanded}
                    left={props => (
                        <View style={styles.row}>
                            <ImageLoader style={styles.map}/>
                            <View style={styles.header}>
                                <TextLoader numberOfLines={1}
                                            style={[styles.matchTitle, {marginVertical: 2, height: 10}]}/>
                                <TextLoader numberOfLines={1}
                                            style={[styles.matchContent, {marginVertical: 2, height: 10}]}/>
                                <TextLoader numberOfLines={1}
                                            style={[styles.matchContent, {marginVertical: 2, height: 10}]}/>
                            </View>
                        </View>
                    )}
                >
                    <View style={styles.playerList}>
                        {
                            playersInTeam1.map((player, i) => <PlayerSkeleton key={i}/>)
                        }
                        <ViewLoader style={[styles.versus, {backgroundColor: '#ECE9ED'}]}/>
                        {
                            playersInTeam2.map((player, i) => <PlayerSkeleton key={i}/>)
                        }
                    </View>
                </MyListAccordion>
            </View>
        );
    }

    const teams = Object.entries(groupBy(data.players, p => p.team));

    let duration: string = '';
    if (data.started) {
        const finished = data.finished || new Date();
        duration = formatDuration(data.started, finished);
    }

    return (
        <MyListAccordion
            style={styles.accordion}
            expanded={expanded}
            expandable={true}
            left={props => (
                <View style={styles.row}>
                    <ImageBackground source={getMapImage(data.map_type)}
                                     imageStyle={styles.imageInner}
                                     style={styles.map}>
                        {
                            data.players.some(p => sameUserNull(p, user) && p.won && p.team != -1) &&
                            <IconFA5 name="crown" size={14} style={{marginLeft: -7,marginTop:-4}} color="goldenrod" />
                        }
                        {
                            user == null &&
                            <Image source={require('../../../assets/other/SkullCrown.png')} style={{marginLeft: -6,marginTop:-4, width: 17, height: 17}} />
                        }
                        {
                            data.players.some(p => sameUserNull(p, user) && !p.won && p.team != -1) &&
                            <IconFA5 name="skull" size={14} style={{marginLeft: -6,marginTop:-4}} color="grey" />
                        }
                    </ImageBackground>

                    <View style={styles.header}>
                        <MyText numberOfLines={1} style={styles.matchTitle}>
                            {getMapName(data.map_type)} - {data.match_id}
                            {
                                data.server &&
                                <MyText> - {data.server}</MyText>
                            }
                        </MyText>
                        <MyText numberOfLines={1} style={styles.matchContent}>
                            {getString('leaderboard', data.leaderboard_id)}
                        </MyText>
                        <MyText numberOfLines={1} style={styles.matchContent}>
                            {
                                !data.finished &&
                                <MyText>{duration}</MyText>
                            }
                            {
                                data.finished &&
                                <MyText>{data.started ? formatAgo(data.started) : 'none'}</MyText>
                            }
                        </MyText>
                    </View>
                </View>
            )}
        >
            <View style={styles.playerList}>
                {
                    teams.map(([team, players], i) =>
                        <View key={team}>
                            {
                                players.map((player, j) => <Player key={j} highlight={highlightedUsers?.some(hu => sameUser(hu, player))} player={player}/>)
                            }
                            {
                                i < teams.length-1 &&
                                <View style={styles.row}>
                                    <View style={styles.versus}>
                                        <MyText style={styles.versusText}>VS</MyText>
                                    </View>
                                    <View style={styles.versus2}/>
                                </View>
                            }
                        </View>
                    )
                }
            </View>
        </MyListAccordion>
    );
}

const getStyles = (theme: ITheme) => {
    return StyleSheet.create({
        imageInner: {
            // backgroundColor: 'blue',
            resizeMode: "contain",
        },
        accordion: {
            // backgroundColor: 'yellow',
            paddingBottom: 20,
        },
        header: {
            // backgroundColor: 'red',
            flex: 1,
        },
        map: {
            marginRight: 10,
            width: 50,
            height: 50,
        },
        row: {
            // backgroundColor: 'purple',
            flexDirection: 'row',
        },
        matchTitle: {
            fontWeight: 'bold',
            flex: 1,
        },
        matchContent: {
            flex: 1,
        },
        playerList: {
            flex: 1,
            paddingTop: 20,
            // backgroundColor: 'purple'
        },
        versus: {
            margin: 10,
            marginLeft: 35,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center'
        },
        versus2: {
            flex: 1,
            height: 1,
            margin: 10,
            alignItems: 'center',
            alignSelf: 'center'
        },
        versusText: {
            color: theme.textNoteColor,
            fontSize: 12,
        },
    });
};

const variants = makeVariants(getStyles);
