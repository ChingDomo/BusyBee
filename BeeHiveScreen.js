import React from 'react';
// import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Platform, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import BeeHiveList from './BeeHiveList';
// const Home = ({ navigation }) => {
const BeeHiveScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.text}>蜂蜜自由 Lv999 </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Message')} style={styles.button} >
                    <Text style={styles.buttonText}>Message</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textCenter}>
                <Text style={styles.textTile}>Hi, Rosie</Text>
                <Text style={styles.textintro}>There are the things you need to do in this week</Text>
            </View>
            <BeeHiveList />
            <View style={styles.BeeDone}>
                <TouchableOpacity onPress={() => navigation.navigate('Done')}>
                    <Image source={imageSource} style={{
                        width: 90, height: 90, marginLeft: 'auto',
                        marginRight: 'auto',
                    }} />
                    <Text style={{ marginTop: -10 }}>what you have done</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.HomeButton}>
                <TouchableOpacity style={styles.Home}>
                    <Text style={styles.buttonText}>Your Home</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}


const imageSource = require('../../img/bee.png');

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        flex: 1,
        backgroundColor: 'blue'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 10
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10, // 設定左邊間距
    },
    button: {
        padding: 10,
        borderRadius: 5,
        marginLeft: 'auto',
        backgroundColor: 'rgb(95, 38, 38)',
    },
    textCenter: {
        flex: 2.5,
        justifyContent: 'center', // 垂直置中
        alignItems: 'center', // 水平置中
    },
    textintro: {
        fontSize: 15,
        color: 'gray',
        marginTop: 5,
        paddingHorizontal: 100,
        textAlign: 'center'
    },
    textTile: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'rgb(95, 38, 38)',
        textAlign: 'center'
    },
    buttonText: {
        marginLeft: 'auto',
        marginRight: 'auto', marginTop: 'auto',
        marginBottom: 'auto', color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    BeeDone: {
        flex: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: -15
        // backgroundColor: 'yellow'
    },
    HomeButton: {
        // flex: 1,
        height: 60,
    },
    Home: {
        backgroundColor: 'rgb(95, 38, 38)',
        flex: 1,
        padding: 10,
        borderRadius: 50,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        shadowColor: 'rgba(0, 0, 0, 0.25)', // 阴影颜色
        shadowOffset: { width: 1, height: 1 }, // 阴影偏移量
        shadowOpacity: 0.8, // 阴影不透明度
        shadowRadius: 4, // 阴影半径
        elevation: 2, // Android 阴影效果
    }
};

export default BeeHiveScreen;