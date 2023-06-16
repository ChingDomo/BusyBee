import React from 'react';
// import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Platform, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Svg, { Path, Polygon } from 'react-native-svg';
import BeeHiveList from './BeeHiveList';

export default class BeeHiveScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.text}>蜂蜜自由 Lv999 </Text>
                    {/* <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
                        <Text style={styles.buttonText}>切換</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Message</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textCenter}>
                    <Text style={styles.textTile}>Hi, Rosie</Text>
                    <Text style={styles.textintro}>There are the things you need to do in this week</Text>
                </View>
                <BeeHiveList />
                <View style={styles.BeeDone}>
                    <TouchableOpacity >
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
        backgroundColor: 'rgb(95, 38, 38)'
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
        flex: 1,
    },
    Home: {
        backgroundColor: 'rgb(95, 38, 38)',
        flex: 1,
        padding: 10,
        borderRadius: 50,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
    }
};