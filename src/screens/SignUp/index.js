import React, { Component } from 'react';
import { View } from 'react-native';


export default class SignupScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignSelf: 'stretch' }} />
                    <View style={{ flex: 1, alignSelf: 'stretch' }} />
                    <View style={{ flex: 1, alignSelf: 'stretch' }} />
                    <View style={{ flex: 1, alignSelf: 'stretch' }} />
                    <View style={{ flex: 1, alignSelf: 'stretch' }} />
                </View>
            </View>
        );
    }
}   