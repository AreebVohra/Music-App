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
        color: '#95989A',
        fontSize: 45,
        fontFamily: 'sans-serif-light'
    }
}

export default HeaderText;