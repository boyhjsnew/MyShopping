//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Menu from './Menu';
import Shop from './Shop/Shop';

// create a component
const Main = ({navigation}) => {
    const goToAuthencation =()=>{
        return navigation.navigate("Authencation");
    }
    const goToChangeInfo =()=>{
        return navigation.navigate("Changeinfo");
    }
    const goToOrderHistory =()=>{
        return navigation.navigate("OrderHistory");
    }

    return (
        <View style={styles.container}>
            <Text>Main</Text>
            <TouchableOpacity
            onPress={goToAuthencation} ><Text>Go to authencation</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={goToChangeInfo} ><Text>Go to ChangeInfo</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={goToOrderHistory} ><Text>Go to OrderHistory</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Main;
