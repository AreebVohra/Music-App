import React, { Component } from 'react';
import { View, Image, StatusBar, Dimensions, Text } from 'react-native';
import HeaderText from '../../components/HeaderText';
import InputWithLabel from '../../components/InputWithLabel';
import Footer from '../../components/footer';


export default class SignupScreen extends Component {
    render() {
        StatusBar.setHidden(true);
        return (
            <View style={styles.mainView}>
                <Image style={styles.topImage} source={require('../../assets/images/top.png')} />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column' }} />

                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column' }} />
                    <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center' }} >
                        <HeaderText title="Sign up" />
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column' }} />
                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column' }}>
                        <InputWithLabel label="NAME" />
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column' }}>
                        <InputWithLabel label="PASSWORD" />
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column' }}>
                        <InputWithLabel label="CITY" />
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column' }}>
                        <InputWithLabel label="BIRTHDAY" />
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column' }} />
                    <Footer Nextlink="SignIn" {...this.props}/>
                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column' }} />
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
