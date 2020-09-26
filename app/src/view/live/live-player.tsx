import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {userIdFromBase} from '../../helper/user';
import {RootStackProp} from '../../../App';
import {getSlotTypeName, ILobbyPlayerRaw} from "../../helper/data";
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from "../../redux/reducer";
import {ITheme, makeVariants, useAppTheme, useTheme} from "../../theming";
import {MyText} from "../components/my-text";
import {getFlagIcon} from "../../helper/flags";

interface IPlayerProps {
    player: ILobbyPlayerRaw | null;
}

export function LivePlayer({player}: IPlayerProps) {
    const theme = useAppTheme();
    const styles = useTheme(variants);
    const auth = useSelector(state => state.auth);

    const navigation = useNavigation<RootStackProp>();

    const gotoPlayer = () => {
        if (player == null) return;
        navigation.push('User', {
            id: userIdFromBase({profile_id: player.profileId, steam_id: player.steamId}),
            name: player.name,
        });
    };

    if (player == null) {
        return (
            <View style={styles.player}>
                <View style={styles.playerCountryCol}/>
                <MyText style={styles.playerRatingCol}/>
                <MyText style={styles.playerNameCol} numberOfLines={1}/>
                <MyText style={styles.playerGamesCol}><IconFA5 name="fist-raised" size={14} style={{}} color={theme.textNoteColor} /></MyText>
                <MyText style={styles.playerWonCol}><IconFA5 name="crown" size={14} style={{}} color={theme.textNoteColor} /></MyText>
                <MyText style={styles.playerWonCol}><IconFA5 name="plug" size={14} style={{}} color={theme.textNoteColor} /></MyText>
            </View>
        );
    }

    return (
            <TouchableOpacity style={styles.player} onPress={gotoPlayer}>
                <View style={styles.playerCountryCol}>
                    {
                        player.countryCode &&
                        <Image style={styles.countryIcon} source={getFlagIcon(player.countryCode)}/>
                    }
                </View>
                <MyText style={styles.playerRatingCol}>{player.rating}</MyText>
                <MyText style={styles.playerNameCol} numberOfLines={1}>
                    {player.slotType != 1 ? getSlotTypeName(player.slotType) : player.name}
                </MyText>
                <MyText style={styles.playerGamesCol}>{player.games && player.games + ''}</MyText>
                <MyText style={styles.playerWonCol}>{player.games && (player?.wins / player?.games * 100).toFixed(0) + ' %'}</MyText>
                <MyText style={styles.playerWonCol}>{player.games && (player?.drops / player?.games * 100).toFixed(0) + ' %'}</MyText>
            </TouchableOpacity>
    );
}

const getStyles = (theme: ITheme) =>
    StyleSheet.create({
        playerGamesCol: {
            marginLeft: 7,
            width: 38,
            textAlign: 'right',
            fontVariant: ['tabular-nums'],
        },
        playerWonCol: {
            marginLeft: 7,
            width: 45,
            textAlign: 'right',
            fontVariant: ['tabular-nums'],
        },
        playerCountryCol: {
            marginLeft: 7,
            width: 21,
            fontVariant: ['tabular-nums'],
        },
        playerRatingCol: {
            marginLeft: 7,
            width: 35,
            letterSpacing: -0.5,
            fontVariant: ['tabular-nums'],
        },
        playerNameCol: {
            marginLeft: 5,
            flex: 1,
        },
        row: {
            marginLeft: 5,
            flexDirection: 'row',
            alignItems: 'center',
            width: 100,
            // backgroundColor: 'blue',
        },
        countryIcon: {
            width: 21,
            height: 15,
        },
        player: {
            flexDirection: 'row',
            padding: 3,
            alignItems: 'center',
            // backgroundColor: 'red',
        },
    });

const variants = makeVariants(getStyles);

