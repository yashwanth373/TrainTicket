import React from 'react';
import { ScrollView, View, ImageBackground, Text, TouchableHighlight, StyleSheet, FlatList } from 'react-native';

const trains = [
    {
        train_id: "1",
        name: "Sathapdi Express",
        seats: 42,
        time: "4:30 PM"
    },
    {
        train_id: "2",
        name: "Hindu Express",
        seats: 28,
        time: "8:30 PM"
    },
    {
        train_id: "3",
        name: "Raj Express",
        seats: 26,
        time: "8:30 PM"
    },
    {
        train_id: "4",
        name: "Venkatadri Express",
        seats: 18,
        time: "10:30 PM"
    }
];

function TrainsScreen(props) {
    
    const navigation = props.navigation
    const route = props.route

    const renderItem = ( {item} ) => (
        <View style={styles.trainBlock}>
            <View style={{ backgroundColor: "white", height: "100%", borderRadius: 7 }}>
                <Text style={{ fontSize: 22, marginLeft: 5 }}>
                    {item.name}
                </Text>
                <Text style={{ fontSize: 19, marginLeft: 5, marginTop: 10 }}>
                    Seats Available: {item.seats}
                </Text>
                <Text style={{ fontSize: 19, marginLeft: 5, marginTop: 10 }}>
                    Time: {item.time}
                </Text>
                <TouchableHighlight style={{ position: 'absolute', bottom: 15, right: 15, backgroundColor: '#2196F3' }} onPress={() => navigation.navigate('Tickets', { train_name: item.name, from: route.params.from, to: route.params.to, date: route.params.date, time:item.time })} >
                    <Text style={{ color: 'white', textAlign: 'center', padding: 5, fontWeight: 'bold' }}>
                        BOOK TICKETS
                    </Text>
                </TouchableHighlight>

            </View>

        </View>

    );


    return (
        <View style={styles.container}>
            <ImageBackground source={require("../assets/background.jpg")} imageStyle={{ opacity: 0.5 }} style={{ width: 600, height: 600, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 32, marginBottom: 30 }}>Available trains: </Text>
                    <FlatList
                        data={trains}
                        renderItem={renderItem}
                        keyExtractor={item => item.train_id}
                    />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    trainBlock: {
        width: 370,
        height: 130,
        borderColor: '#0000',
        borderRadius: 10,
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 1,
        elevation: 5,
        padding: 5,
        margin: 10,


    }
});

export default TrainsScreen;