import { background } from 'native-base/lib/typescript/theme/styled-system';
import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

const NewATeamScreen = ({ route, navigation }) => {

    const { name } = route.params;
    // const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={{ flex: 1 }}>{name}</Text>
            <View style={{
                flex: 1, position: 'absolute',
                bottom: 5, marginLeft: 35, marginRight: 35, flexDirection: 'row'
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navigationButton}>
                    <Text style={{ fontSize: 12 }}>newATeam</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navigationButton}>
                    <Text style={{ fontSize: 12 }}>newATeam</Text>
                </TouchableOpacity>
            </View>

        </View >
    )
}

const styles = {
    container: {
        backgroundColor: '#ffffff',
        flex: 1
    },
    navigationButton: {
        margin: 15,
        alignItems: 'center',
        height: 42,
        width: 150,
        marginRight: 'auto',
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#5F2626',
        justifyContent: 'center'
    }
}

export default NewATeamScreen;
