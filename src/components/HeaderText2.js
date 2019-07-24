import React from 'react';
import { View, Text } from 'react-native';

const HeaderText = (props) => {
    const { title } = props
    return (
        <View>
            <Text style={styles.headingText}>{title}</Text>
        </View >
    );
}

const styles = {
    headingText: {
        color: '#000000',
        fontSize: 40,
        fontFamily: 'sans-serif-light',
        fontWeight:'bold'
    }
}

export default HeaderText;