import React from 'react';
import { View, TextInput, Text } from 'react-native';

const InputWithLabel = (props) => {
    const {label} = props;
    return (
        <View style={{ flex: 1, paddingLeft: 30, alignSelf: 'stretch', alignItems: 'flex-start', }} >
            <Text style={{ marginLeft: 10 }}>{label}</Text>
            <TextInput style={{
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                width: '85%',
                marginLeft: 10,
                fontSize: 20
            }} />
        </View>
    )
}

export default InputWithLabel;