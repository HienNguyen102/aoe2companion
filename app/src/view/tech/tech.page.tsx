import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {RouteProp, useRoute} from "@react-navigation/native";
import {RootStackParamList} from "../../../App";
import {getTechIcon, getTechName, Tech, techs} from "../../helper/techs";
import IconHeader from "../components/navigation-header/icon-header";
import TextHeader from "../components/navigation-header/text-header";
import TechDetails from "./tech-details";
import TechList from "./tech-list";
import {getCivIcon} from "../../helper/civs";


export function TechTitle(props: any) {
    const tech = props.route?.params?.tech;
    if (tech) {
        const techInfo = techs[tech];
        if (techInfo.civ) {
            return <IconHeader
                badgeIcon={techInfo.civ ? getCivIcon(techInfo.civ) : null}
                icon={getTechIcon(tech)}
                text={getTechName(props.route.params?.tech)}
                subtitle={techInfo.civ + ' unique tech (' + techInfo.age +  ' age)'}
                // subtitle={'only ' + techInfo.civ}
                // subtitle={techInfo.civ + ' unique ' + techInfo.age?.toLowerCase() +  ' age tech'}
                onLayout={props.titleProps.onLayout}
            />;
        }
        return <IconHeader
            icon={getTechIcon(tech)}
            text={getTechName(props.route.params?.tech)}
            onLayout={props.titleProps.onLayout}
        />;
    }
    return <TextHeader text={'Techs'} onLayout={props.titleProps.onLayout}/>;
}

export function techTitle(props: any) {
    const tech = props.route?.params?.tech;
    return tech ? getTechName(tech) : 'Techs';
}

export default function TechPage() {
    const route = useRoute<RouteProp<RootStackParamList, 'Tech'>>();
    const tech = route.params?.tech as Tech;

    if (tech) {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <TechDetails tech={tech}/>
            </ScrollView>
        );
    }

    return <TechList/>;
}

const styles = StyleSheet.create({
    container: {
    },
});
