import React, {useEffect, useState} from 'react';
import {
    Linking, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View, Modal
} from 'react-native';
import Constants from 'expo-constants';
import {useLinkTo} from '@react-navigation/native';
import {checkForUpdateAsync, fetchUpdateAsync, reloadAsync, UpdateCheckResult} from "expo-updates";
import {Button, Portal} from "react-native-paper";
import {Manifest} from "expo-updates/build/Updates.types";
import {appStyles} from "./styles";
import {MyText} from "./components/my-text";
import {sleep} from "../helper/util";
import Snackbar from "./components/snackbar";

async function doCheckForUpdateAsync() {
    if (__DEV__) {
        return {
            isAvailable: true,
            manifest: {
                version: '20.0.0',
            },
        } as UpdateCheckResult;
    }
    return await checkForUpdateAsync();
}

async function doFetchUpdateAsync() {
    if (__DEV__) {
        return await sleep(2000);
    }
    return await fetchUpdateAsync();
}

export default function AboutPage() {
    const linkTo = useLinkTo();
    const [updateManifest, setUpdateManifest] = useState<Manifest>();
    const [updating, setUpdating] = useState(false);
    const [updateModalVisible, setUpdateModalVisible] = useState(false);

    const init = async () => {
        const update = await doCheckForUpdateAsync();
        if (update.isAvailable) {
            setUpdateManifest(update.manifest);
        }
    };

    useEffect(() => {
        init();
    }, []);

    const fetchUpdate = async () => {
        setUpdating(true);
        await doFetchUpdateAsync();
        setUpdateModalVisible(true);
        setUpdating(false);
    };

    const update = async () => {
        await reloadAsync();
    };

    const closeUpdateModal = () => {
        setUpdateModalVisible(false);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/*<Portal>*/}
            {/*    <Snackbar*/}
            {/*        visible={updateManifest != null}*/}
            {/*        onDismiss={() => alert('dismiss')}*/}
            {/*        action={{*/}
            {/*            label: 'Undo',*/}
            {/*            onPress: () => {*/}
            {/*                // Do something*/}
            {/*            },*/}
            {/*        }}>*/}
            {/*        Update available!*/}
            {/*    </Snackbar>*/}
            {/*</Portal>*/}

            <MyText style={styles.title}>AoE II Companion</MyText>

            <MyText style={styles.heading}>Created by</MyText>
            <MyText style={styles.content}>Dennis Keil</MyText>
            <MyText style={styles.content}>Niklas Ohlrogge</MyText>

            <MyText style={styles.heading}>Contributors</MyText>
            <MyText style={styles.content}>Johannes Berger</MyText>

            <MyText style={styles.heading}>Version</MyText>
            <MyText style={styles.content}>
                {Constants.manifest.releaseChannel || 'dev'}-{Constants.manifest.version}n{Constants.nativeAppVersion}+{Constants.nativeBuildVersion}
            </MyText>

            {
                updateManifest &&
                <View>
                    <MyText/>
                    <Button onPress={fetchUpdate} mode="contained" dark={true}>Update to {updateManifest.version}</Button>
                </View>
            }
            {
                updating &&
                <View>
                    <MyText/>
                    <MyText style={styles.content}>Loading Update...</MyText>
                </View>
            }

            <Modal animationType="none" transparent={true} visible={updateModalVisible}>
                <TouchableWithoutFeedback onPress={closeUpdateModal}>
                    <View style={styles.centeredView}>
                        <TouchableWithoutFeedback onPress={() => {}}>
                            <View style={styles.modalView}>
                                <MyText style={styles.content}>Do you want to restart now to apply the update?</MyText>
                                <MyText/>
                                <View style={styles.buttonRow}>
                                    <Button style={styles.button} onPress={closeUpdateModal} mode="outlined">Restart Later</Button>
                                    <Button style={styles.button} onPress={update} mode="contained" dark={true}>Restart</Button>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>


            <MyText style={styles.heading}>Source</MyText>

            <View style={styles.row}>
                <MyText style={styles.content}>Stats from </MyText>
                <TouchableOpacity onPress={() => Linking.openURL('https://aoe2.net')}>
                    <MyText style={appStyles.link}>aoe2.net</MyText>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <MyText style={styles.content}>Game data from </MyText>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/SiegeEngineers/aoe2techtree')}>
                    <MyText style={appStyles.link}>aoe2techtree</MyText>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <MyText style={styles.content}>Game data from </MyText>
                <TouchableOpacity onPress={() => Linking.openURL('https://ageofempires.fandom.com/wiki/Age_of_Empires_II:Portal')}>
                    <MyText style={appStyles.link}>Age of Empires II Wiki</MyText>
                </TouchableOpacity>
                <MyText style={styles.content}> at </MyText>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.fandom.com/')}>
                    <MyText style={appStyles.link}>Fandom</MyText>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <MyText style={styles.content}>Flag Icons from </MyText>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/madebybowtie/FlagKit')}>
                    <MyText style={appStyles.link}>FlagKit</MyText>
                </TouchableOpacity>
            </View>

            <MyText style={styles.heading}>Legal</MyText>
            <MyText/>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => linkTo('/privacy')}>
                    <MyText style={appStyles.link}>Privacy Policy</MyText>
                </TouchableOpacity>
            </View>

            <View style={styles.expanded}/>

            <MyText/>
            <MyText/>

            <MyText style={styles.textJustify}>
                This app was created under Microsoft's "
                <MyText style={appStyles.link} onPress={() => {Linking.openURL('https://www.xbox.com/en-us/developers/rules')}}>
                Game Content Usage Rules
                </MyText>
                " using assets from Age of Empires II.
                This app is not affiliated with or endorsed by Microsoft Corporation. Age
                of Empires II: HD and Age of Empires II: Definitive Edition are trademarks or
                registered trademarks of Microsoft Corporation in the U.S. and other countries.
            </MyText>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
    heading: {
        marginTop: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    content: {
        marginBottom: 5,
    },
    textJustify: {
        textAlign: 'justify',
        fontSize: 12,
    },
    expanded: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
    },
    buttonRow: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        // backgroundColor: 'red',
        justifyContent: "flex-end",
    },
    button: {
        marginLeft: 10,
    },
    container: {
        // flex: 1,
        minHeight: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        margin: 0,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
});
