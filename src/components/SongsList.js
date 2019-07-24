import React from 'react';
import { View, Text, FlatList } from 'react-native';


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
];



const SongList = () => {
        
        state = {
            data: songs,
    }
    return (
        <FlatList
            data={state.data}
            renderItem={({ item }) =>
                <View style={{ flex: 1, alignSelf: 'stretch', }}>
                    <Text style={{ flex: 1 }}>{item.id}</Text>
                    <Text style={{ flex: 1 }}>{item.name}</Text>
                    <Text style={{ flex: 1 }}>{item.duration}</Text>
                </View>
            }
            numColumns={3}
            keyExtractor={item => item.id}
        />
    )
}

const styles = {
    
}

export default SongList;