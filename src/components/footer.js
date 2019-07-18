import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from "@expo/vector-icons";


const Footer = (props) => {
    const { Nextlink, navigation } = props
    return (
        <View style={styles.mainView}>
            <View style={styles.cells} >
                <Image source={require('../assets/images/facebookIcon.png')} />
            </View>
            <View style={styles.cells} >
                <Image source={require('../assets/images/googleIcon.png')} />
            </View>
            <View style={styles.cells} >
                <Image source={require('../assets/images/twitterIcon.png')} />
            </View>
            <View style={{ flex: 3, alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={() => navigation.navigate(Nextlink)}>
                    <Text style={styles.nextText}>
                        Next <AntDesign name="right" size={18} color='#95989A'/>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = {
    mainView: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        paddingLeft: 40,
        paddingRight: 40
    },
    cells: {
        flex: 1,
        alignSelf: 'stretch'
    },
    nextText: {
        color: '#95989A',
        fontSize: 22,
        fontFamily: 'sans-serif'
    }
}

export default Footer;
