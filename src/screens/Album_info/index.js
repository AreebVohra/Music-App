import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import HeaderText2 from '../../components/HeaderText2';
import { Entypo, AntDesign } from "@expo/vector-icons";
import SongList from '../../components/SongsList';

export default class AlbuminfoScreen extends Component {
    constructor() {
        super()
        this.state = {
            focused: true,
        }
    }
    render() {
        const { focused } = this.state
        const icon = focused ? "hearto" : "heart";
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column' }}>
                    <View style={{ alignSelf: 'stretch' }} >
                        <TouchableOpacity>
                            <Entypo name="chevron-left" size={35} color='#000000' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', paddingLeft: 20 }} >
                        <HeaderText2 title="Troye Sivan" />
                    </View>
                </View>
                <View style={{ flex: 2, alignSelf: 'stretch', flexDirection: 'row', paddingLeft: 20, paddingRight: 20 }}>
                    <View style={{ flex: 1, alignSelf: 'stretch' }} >
                        <Image style={{ height: 170, width: "90%" }} source={require('../../assets/images/album-image.png')} />
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch' }} >
                        <Text style={{ fontSize: 20, color: '#95989A' }}>Blue Neighbourhood</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            <Text style={{ fontSize: 14, color: '#95989A' }}>2007-04-16</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    const newState = !this.state.focused
                                    this.setState({ focused: newState })
                                }}>
                                <AntDesign name={icon} size={35} color='#000000' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 4, alignSelf: 'stretch',flexDirection:'column', paddingLeft: 20, paddingRight: 20, }}>
                    <SongList />
                </View>
            </View>
        );
    }
}


const styles = {

}