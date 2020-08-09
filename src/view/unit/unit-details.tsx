import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {RootStackProp} from "../../../App";
import {
    getInferiorUnitLines, getUnitDescription, getUnitLineIcon, getUnitLineIdForUnit, getUnitLineName,
    getUnitLineNameForUnit, getUnitName, IUnitLine, sortUnitCounter, Unit, UnitLine, unitLines, getNonUniqueUnits
} from "../../helper/units";
import Fandom from "../components/fandom";
import {Checkbox} from "react-native-paper";
import {MyText} from "../components/my-text";
import {iconSmallHeight, iconSmallWidth} from "../../helper/theme";
import {ITheme, makeVariants, useTheme} from "../../theming";
import {appVariants} from "../../styles";
import {UnitStats} from "./unit-stats";
import {UnitUpgrades} from "./unit-upgrades";
import {UnitCosts} from "./unit-costs";
import {UnitCounters} from "./unit-counters";
import { sort } from 'semver';


export default function UnitDetails({unitName}: {unitName: Unit}) {
    const appStyles = useTheme(appVariants);
    const styles = useTheme(variants);
    const navigation = useNavigation<RootStackProp>();
    const unitLineId = getUnitLineIdForUnit(unitName);
    const unitLineName = getUnitLineNameForUnit(unitName);
    const unitLine = unitLines[unitLineId];
    const [checked, setChecked] = useState(false);

    console.log('unitLine', unitLine);
    console.log('unitLineId', unitLineId);
    console.log('unitLineName', unitLineName);

    const gotoUnit = (unit: Unit) => navigation.push('Unit', {unit: unit});

    return (
        <View style={styles.container}>

            <UnitCosts unitId={unitName}/>

            <MyText style={styles.description}>{getUnitDescription(unitName)}</MyText>
            <MyText/>

            <UnitStats unitLineId={unitLineId} unitId={unitName} />

            {
                unitLine.counteredBy && (
                    <>
                    <View style={styles.row}>
                        <MyText style={styles.header1}>
                            Counters
                        </MyText>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.checkboxCell}>
                        <Checkbox.Android
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }
                        }     
                        />
                        </View>
                        <View style={styles.checkboxDesc}>
                            <MyText style={styles.small}>Display Unique Units</MyText>
                        </View>
                     </View>
                <View>
                    <View style={styles.row}>
                            <MyText style={styles.header2}>Weak vs.</MyText>
                    </View>
                    {checked ? sortUnitCounter(unitLine.counteredBy).map(counterUnit =>
                                <TouchableOpacity key={counterUnit} onPress={() => gotoUnit(counterUnit)}>
                                    <View style={styles.row}>
                                        <Image style={styles.unitIcon} source={getUnitLineIcon(counterUnit)}/>
                                        <MyText style={styles.unitDesc}>
                                            {getUnitLineName(counterUnit)}
                                        </MyText>
                                    </View>
                                </TouchableOpacity>
                                ) : getNonUniqueUnits(unitLine.counteredBy).map(counterUnit =>
                                <TouchableOpacity key={counterUnit} onPress={() => gotoUnit(counterUnit)}>
                                    <View style={styles.row}>
                                        <Image style={styles.unitIcon} source={getUnitLineIcon(counterUnit)}/>
                                        <MyText style={styles.unitDesc}>
                                            {getUnitLineName(counterUnit)}
                                        </MyText>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                        <View style={styles.row}>
                            <MyText  style={styles.header2}>Strong vs.</MyText>
                        </View>
                        {checked ? 
                            sortUnitCounter(getInferiorUnitLines(unitLineId)).map(counterUnit =>
                                <TouchableOpacity key={counterUnit} onPress={() => gotoUnit(counterUnit)}>
                                    <View style={styles.row}>
                                        <Image style={styles.unitIcon} source={getUnitLineIcon(counterUnit)}/>
                                        <MyText style={styles.unitDesc}>
                                            {getUnitLineName(counterUnit)}
                                        </MyText>
                                    </View>
                                </TouchableOpacity>
                            ) : getNonUniqueUnits(getInferiorUnitLines(unitLineId)).map(counterUnit => 
                                <TouchableOpacity key={counterUnit} onPress={() => gotoUnit(counterUnit)}>
                                    <View style={styles.row}>
                                        <Image style={styles.unitIcon} source={getUnitLineIcon(counterUnit)}/>
                                        <MyText style={styles.unitDesc}>
                                            {getUnitLineName(counterUnit)}
                                        </MyText>
                                    </View>
                               </TouchableOpacity>
                            )
                        }
                </View>
                    </>
                )
            }

            <MyText/>
            <View style={styles.row}>
                <MyText style={styles.header1}>
                    Upgrades
                </MyText>
            </View>
            <UnitUpgrades unitLineId={unitLineId} unitId={unitName} />

            <View style={appStyles.expanded}/>
            <Fandom articleName={getUnitName(unitName)}/>
        </View>
    );
}

const getStyles = (theme: ITheme) => {
    return StyleSheet.create({
        description: {
            lineHeight: 20,
        },
        container: {
            flex: 1,
            minHeight: '100%',
            padding: 20,
        },
        row: {
            flexDirection: 'row',
            marginBottom: 5,
            alignItems: 'center',
            // backgroundColor: 'blue',
        },

        checkboxCell: {
            flex: 1,
            marginLeft: -6
        },
        checkboxDesc: {
            flex: 11,
            marginLeft: 4
        },
        small: {
            fontSize: 12,
            color: theme.textNoteColor,
        },
        header1: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        header2: {
            fontSize: 16,
            marginVertical: 5,
        },
        unitIcon: {
            width: iconSmallWidth,
            height: iconSmallHeight,
            marginRight: 5,
        },
        unitDesc: {
            lineHeight: 20,
            flex: 1,
        },
    });
};

const variants = makeVariants(getStyles);

