import React, {useEffect, useState} from 'react';
import {Image, Platform, SectionList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {RootStackProp} from "../../../App";
import {getTechDescription, getTechName, iconHeight, iconWidth, Tech, techs, techSections} from "@nex/data";
import {MyText} from "../components/my-text";
import {ITheme, makeVariants, useTheme} from "../../theming";
import {Searchbar} from "react-native-paper";
import {FinalDarkMode} from "../../redux/reducer";
import {getTechIcon} from "../../helper/techs";
import {getCivIcon} from "../../helper/civs";


export function TechComp({tech: tech}: any) {
    const styles = useTheme(variants);
    const navigation = useNavigation<RootStackProp>();
    return (
        <TouchableOpacity onPress={() => navigation.push('Tech', {tech: tech})}>
            <View style={styles.row}>
                <Image style={styles.unitIcon} source={getTechIcon(tech)}/>
                <View style={styles.unitIconTitle}>
                    <MyText>{getTechName(tech)}</MyText>
                    <MyText numberOfLines={1} style={styles.small}>{getTechDescription(tech)}</MyText>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export function TechIcon({tech: tech} : any) {
    const styles = useTheme(variants);
    const techInfo = techs[tech];

    if (techInfo.civ) {
        return (
            <View>
                {/*<Image style={styles.unitIconBig} source={getCivIcon(techInfo.civ)}/>*/}
                {/*<Image style={styles.unitIconBigBanner} source={getTechIcon(tech)}/>*/}
                <Image style={styles.unitIconBig} source={getTechIcon(tech)}/>
                <Image style={styles.unitIconBigBanner} source={getCivIcon(techInfo.civ)}/>
            </View>
        );
    }

    return <Image style={styles.unitIconBig} source={getTechIcon(tech)}/>;
}

export function TechCompBig({tech: tech, showCivBanner: showCivBanner}: any) {
    const styles = useTheme(variants);
    const navigation = useNavigation<RootStackProp>();

    return (
        <TouchableOpacity onPress={() => navigation.push('Tech', {tech: tech})}>
            <View style={styles.rowBig}>
                <TechIcon style={styles.unitIconBig} tech={tech}/>
                <View style={styles.unitIconBigTitle}>
                    <MyText>{getTechName(tech)}</MyText>
                    <MyText numberOfLines={1} style={styles.small}>{getTechDescription(tech)}</MyText>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default function TechList() {
    const styles = useTheme(variants);
    const [text, setText] = useState('');
    const [list, setList] = useState(techSections);

    const refresh = () => {
        if (text.length == 0) {
            setList(techSections);
            return;
        }
        const newSections = techSections.map(section => ({
            ...section,
            data: section.data.filter(tech => getTechName(tech).toLowerCase().includes(text.toLowerCase())),
        })).filter(section => section.data.length > 0);
        setList(newSections);
    };

    useEffect(() => {
        refresh();
    }, [text]);

    return (
        <View style={styles.container}>
            <Searchbar

                style={styles.searchbar}
                placeholder="tech"
                onChangeText={text => setText(text)}
                value={text}
            />
            <SectionList
                keyboardShouldPersistTaps={'always'}
                contentContainerStyle={styles.list}
                sections={list}
                stickySectionHeadersEnabled={false}
                renderItem={({item}) => {
                    return <TechCompBig key={item} tech={item} showCivBanner={true}/>
                }}
                renderSectionHeader={({ section: { title } }) => (
                    // <View/>
                    <MyText style={styles.heading}>{title}</MyText>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}


const getStyles = (theme: ITheme, mode: FinalDarkMode) => {
    return StyleSheet.create({
        container: {
            flex: 1,
        },
        list: {
            padding: 20,
        },

        searchbar: {
            marginTop: Platform.select({ ios: mode == 'light' ? 5 : 0 }),
            borderRadius: 0,
            paddingHorizontal: 10,
        },

        row: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 2,
            // backgroundColor: 'blue',
        },
        unitIcon: {
            width: 20,
            height: 20,
            marginRight: 5,
        },
        unitIconTitle: {
            flex: 1,
            // backgroundColor: 'red',
        },

        rowBig: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            // backgroundColor: 'blue',
        },
        unitIconBig: {
            width: iconWidth,
            height: iconHeight,
        },
        unitIconBigBanner: {
            position: 'absolute',
            width: iconWidth/2.0,
            height: iconHeight/2.0,
            left: iconWidth/2.0,
            bottom: -1,//iconHeight/2.0,
        },
        unitIconBigTitle: {
            flex: 1,
            paddingLeft: 8,
            // backgroundColor: 'red',
        },
        small: {
            fontSize: 12,
            color: theme.textNoteColor,
        },

        heading: {
            paddingVertical: 12,
            marginBottom: 5,
            fontWeight: 'bold',
            // backgroundColor: theme.backgroundColor,
        },
    });
};

const variants = makeVariants(getStyles);
