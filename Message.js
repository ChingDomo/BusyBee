import { Button } from 'native-base';
import React from 'react';
// import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Platform, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Message = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.MessageContainer}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.MessageTitle}>
                    <Text style={styles.MessageTitleText}>Message</Text>
                </View>
                <View style={styles.MessageIntro}>
                    <Text style={styles.MessageIntroText}>Followings are the feedback </Text>
                    <Text style={styles.MessageIntroText}>your team manager gave you. </Text>
                </View>
                <View style={styles.MessageList}>
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />

                </View>
            </ScrollView>
            <View style={styles.BeehiveButton}><TouchableOpacity onPress={() => navigation.navigate('BeeHive')} style={styles.Beehive} >
                <Text style={styles.buttonText}>BeeHive</Text>
            </TouchableOpacity></View>
        </View>
    );
};

const MessageItem = () => {
    return (
        <View style={styles.MessageItem}>
            <View style={styles.MessageFace}>
                <Image source={smileSource} style={styles.face} />
            </View>
            <Text style={styles.MessageItemName}>
                Lydia
            </Text>
            <View style={styles.MessageItemContent}>
                <Text>ASFDGHJAFQBFKWEEJKFBSDKCMNXKCHZICH</Text>
            </View>
        </View>
    );
};

const smileSource = require('../../img/smile.png');
const sadSource = require('../../img/sad.png');

const styles = {
    MessageContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollContent: {
        flexGrow: 1, // 允許內容垂直延伸
    },
    MessageTitle: {
        height: 70,
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
    MessageTitleText: {
        fontSize: 40,
        color: 'rgb(95, 38, 38)',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    MessageIntro: {
        height: 70,
        marginLeft: 40,
        marginRight: 40,
        justifyContent: 'center',
    },
    MessageIntroText: {
        fontSize: 17,
        color: 'rgba(106, 106, 106, 1)',
        paddingHorizontal: 50,
        textAlign: 'center'
    },
    DoneProgressBar: {
        flex: 1.5,
    },
    MessageList: {
        flex: 5,
        marginLeft: 30,
        marginRight: 30,
    },
    MessageItem: {
        flexDirection: 'row',
        backgroundColor: 'rgb(255, 255, 178)',
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginBottom: 15,
    },
    MessageFace: {
        flex: 2,
        // backgroundColor: 'red',
        marginRight: 10,
    },
    face: {
        width: 45,
        height: 45,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    MessageItemName: {
        flex: 3,
        color: 'black',
        fontSize: 23,
        fontWeight: 'bold',
        marginRight: 10,
        marginTop: 'auto',
        marginBottom: 'auto',
        // backgroundColor: 'green',
        alignItems: 'center',
        textAlign: 'center',
    },
    MessageItemContent: {
        flex: 5,
        color: 'black',
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
    },
    BeehiveButton: {
        height: 60,
    },
    Beehive: {
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
    }, buttonText: {
        marginLeft: 'auto',
        marginRight: 'auto', marginTop: 'auto',
        marginBottom: 'auto', color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },


}

export default Message;