import React from 'react'
import { View, Text } from 'react-native';
import { headerStyle } from './headerStyle';

const Header = () => {
    return (
        <View style={headerStyle.header}>
            <Text style={headerStyle.headerText}>Armenian Sights</Text>
        </View>
    );
}

export default Header;