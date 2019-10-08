import React, { Component } from 'react';
//import { DocumentPicker, FileSystem } from 'expo'
import { View, Text, TouchableOpacity, Image } from 'react-native';

import HeaderText2 from '../../components/HeaderText2';
import { Entypo, AntDesign } from "@expo/vector-icons";
import Layout from '../../constants/Layout';



let songs = [
    {
        id: 1,
        name: "Consideration",
        duration: "2:16"
    },
    {
        id: 2,
        name: "James Joint",
        duration: "2:13"
    },
    {
        id: 3,
        name: "Kiss It Better",
        duration: "2:14"
    },
    {
        id: 3,
        name: "Kiss It Better",
        duration: "2:14"
    },

];


export default class AlbuminfoScreen extends Component {
    constructor() {
        super()
        this.state = {
            focused: true,
        }
    }

    componentDidMount() {
        // let aaa = await DocumentPicker.getDocumentAsync({type:'audio/*',copyToCacheDirectory:true,})
        // console.log(aaa)
        // let abc = await FileSystem.getInfoAsync(FileSystem.cacheDirectory+"/DocumentPicker/e8d95174-72e3-4120-9680-88e63b6a52e8.mp3",{})
        // console.log(abc)

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
                <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', paddingLeft: 20, paddingRight: 20 }}>
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
                <View style={{ flex: 1 }}></View>
                {
                    songs.map((item, index) => (

                        <View style={Layout.tableRow} key={index}>
                            <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
                                <Text>{item.id}</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
                                <Text>{item.name}</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
                                <Text>{item.duration}</Text>
                            </View>
                        </View>
                    ))
                }
                <View style={{ flex: 2 }}></View>
            </View>
        );
    }
}


const styles = {

}