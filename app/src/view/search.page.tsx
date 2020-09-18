import React from 'react';
import { UserInfo } from '../helper/user';
import Search from './components/search';
import { useNavigation } from '@react-navigation/native';
import { RootStackProp } from '../../App';

export default function SearchPage() {
    const navigation = useNavigation<RootStackProp>();

// navigation.navigate('Civ', {civ: })

    const onSelect = async (user: UserInfo) => {
        navigation.push('User', {
            id: user,
            name: user.name,
        });
    };

    return <Search title="Search for user" selectedUser={onSelect} actionText="Show" />;
}
