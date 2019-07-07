import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, StatusBar } from 'react-native';


export default class OnboardingScreen extends Component {

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('SignIn')
        }, 4000);
    }


    render() {
        StatusBar.setHidden(true);
        return (
            <View style={styles.mainView}>
                <Image source={require('../../assets/images/main.png')} />
                <Text style={styles.hiText}>HI!</Text>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    hiText: {
        fontSize: 60,
        color: '#95989A',
        marginTop: '10%',
        fontFamily: 'sans-serif-light'
    }
})