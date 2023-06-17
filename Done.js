import { Button } from 'native-base';
import React from 'react';
// import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Platform, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Done = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.DoneContainer}>
            <View style={styles.DoneTitle}>
                <Text style={styles.DoneTitleText}>What You Have Done</Text>
            </View>
            <View style={styles.DoneIntro}>
                <Text style={styles.DoneIntroText}>Followings are the tasks </Text>
                <Text style={styles.DoneIntroText}>you have done in this week. </Text>
            </View>
            <View style={styles.DoneProgressBar}>
                <Image source={progressBarSource} style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: -5,
                    marginBottom: 'auto',
                }} />
            </View>
            <View style={styles.DoneList}>
                <View style={styles.DoneItem}><Text style={styles.DoneItemTitle}>There is nothing now</Text>
                    <Image source={beePathSource} style={{
                        marginLeft: 50,
                        marginRight: 'auto',
                        marginButton: 'auto'
                    }} />
                </View>
            </View>
            <View style={styles.DoneHoney}>
                <TouchableOpacity >
                    <Image source={honeyGetSource} style={{
                        marginLeft: 180,
                        marginRight: 'auto',
                        marginTop: 10,
                    }} />
                </TouchableOpacity>
            </View>
            <View style={styles.BeehiveButton}><TouchableOpacity onPress={() => navigation.navigate('BeeHive')} style={styles.Beehive} >
                <Text style={styles.buttonText}>BeeHive</Text>
            </TouchableOpacity></View>
        </View>
    );
};

const progressBarSource = require('../../img/progressBar.png');
const beePathSource = require('../../img/beePath.png');
const honeyGetSource = require('../../img/HoneyGet.png');

const styles = {
    DoneContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    DoneTitle: {
        flex: 3,
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'rgba(255, 225, 119, 1)',
        shadowColor: 'rgba(0, 0, 0, 0.25)', // 阴影颜色
        shadowOffset: { width: 0, height: 2 }, // 阴影偏移量
        shadowOpacity: 0.8, // 阴影不透明度
        shadowRadius: 4, // 阴影半径
        elevation: 4, // Android 阴影效果
    },
    DoneTitleText: {
        fontSize: 40,
        color: 'rgb(95, 38, 38)',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontWeight: 'bold',
        paddingHorizontal: 50,
        textAlign: 'center'
    },
    DoneIntro: {
        flex: 1.5,
        marginLeft: 50,
        marginRight: 50,
        justifyContent: 'center',
    },
    DoneIntroText: {
        fontSize: 17,
        color: 'rgba(106, 106, 106, 1)',
        paddingHorizontal: 50,
        textAlign: 'center'
    },
    DoneProgressBar: {
        flex: 1.5,
    },
    DoneList: {
        flex: 5,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'rgb(255, 255, 178)'
    },
    DoneItem: {
        padding: 40
    },
    DoneItemTitle: {
        color: 'black',
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    DoneHoney: {
        flex: 2,
        // backgroundColor: 'orange'
    },
    BeehiveButton: {
        height: 60,
        // backgroundColor: 'brown'
    },
    Beehive: {
        backgroundColor: 'rgb(95, 38, 38)',
        flex: 1,
        padding: 10,
        borderRadius: 50,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
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
    }, buttonText: {
        marginLeft: 'auto',
        marginRight: 'auto', marginTop: 'auto',
        marginBottom: 'auto', color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

}

export default Done;