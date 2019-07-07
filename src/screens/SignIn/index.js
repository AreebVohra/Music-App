import React, { Component } from 'react';
import { View, Image, StatusBar, Dimensions, TextInput, Text } from 'react-native';
import HeaderText from '../../components/HeaderText';
import InputWithLabel from '../../components/InputWithLabel';


export default class SigninScreen extends Component {
    render() {
        StatusBar.setHidden(true);
        return (
            <View style={styles.mainView}>
                <Image style={styles.topImage} source={require('../../assets/images/top.png')} />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flex: 3, alignSelf: 'stretch', flexDirection: 'row' }}>
                        <View style={{ flex: 3, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center' }} >
                            <HeaderText title="Sign In" />
                        </View>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column' }}>
                        <InputWithLabel label="NAME"/>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column' }}>
                        <InputWithLabel label="PASSWORD"/>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column' }}>
                        <InputWithLabel label="CITY"/>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column' }}>
                        <InputWithLabel label="BIRTHDAY"/>
                    </View>
                </View>
            </View >
        );
    }
}

const styles = {
    mainView: {
        flex: 1,
    },
    topImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute',
        zIndex: -1
    }
}