// import { Button } from 'native-base';
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Platform, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BeeHiveItem = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.ItemContainer}>
            <StateIcon />
            <View style={styles.region}>
                <Text style={styles.regionText}>Hive 1</Text>
            </View>
            <View style={styles.taskList}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />

                </ScrollView>
            </View>
            <View style={styles.BeehiveButton}><TouchableOpacity onPress={() => navigation.navigate('BeeHive')} style={styles.Beehive} >
                <Text style={styles.buttonText}>BeeHive</Text>
            </TouchableOpacity></View>
        </View>
    );
};

const StateIcon = () => {
    return (
        <View style={styles.stateIconRegion}>
            <View style={styles.stateIconView}>
                <Image source={importantSource} style={styles.stateIcon} />
                <Text style={styles.stateText}>important</Text>
            </View>
            <View style={styles.stateIconView}>
                <Image source={urgentSource} style={styles.stateIcon} />
                <Text style={styles.stateText}>urgent</Text>
            </View>
            <View style={styles.stateIconView}>
                <Image source={unhappySource} style={styles.stateIcon} />
                <Text style={styles.stateText}>unhappy</Text>
            </View>
        </View>

    );
};

const TaskItem = () => {
    const [finishToggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!finishToggle);
    }
    return (
        <View style={styles.TaskItem}>
            <Text style={styles.TaskName}>Task 1</Text>
            <Text style={styles.Taskdetail}>dead line 1</Text>
            <View style={styles.ToggleContainer}>
                <ToggleButton
                    isToggled={finishToggle}
                    onToggle={handleToggle}
                />
            </View>
        </View>
    );
};

const ToggleButton = ({ isToggled, onToggle }) => {
    return (
        <TouchableOpacity
            style={[
                styles.ToggleButton,
                { backgroundColor: isToggled ? 'rgba(0, 204, 45, 1)' : 'rgba(208, 10, 10, 1)' },
            ]}
            onPress={onToggle}
        >
            <Text style={styles.ToggleButtonText}>{isToggled ? 'Y' : 'N'}</Text>
        </TouchableOpacity>
    );
};

const unhappySource = require('../../img/BeeHiveItem/unhappy.png');
const importantSource = require('../../img/BeeHiveItem/important.png');
const urgentSource = require('../../img/BeeHiveItem/urgent.png');

const styles = {
    ItemContainer: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1, // 允許內容垂直延伸
    },
    stateIconRegion: {
        flex: 2.5,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingTop: 10,
    },
    stateIconView: {
        flex: 1,
        flexDirection: 'column',
    },
    stateIcon: {
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    stateText: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto',
        color: 'rgb(95, 38, 38)',
        fontWeight: 'bold',
    },
    region: {
        flex: 0.8,
        backgroundColor: 'rgb(95, 38, 38)',
    },
    regionText: {
        marginLeft: 'auto',
        marginRight: 'auto', marginTop: 'auto',
        marginBottom: 'auto', color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
    },
    taskList: {
        flex: 8,
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    TaskItem: {
        flexDirection: 'row',
        backgroundColor: 'rgb(255, 255, 178)',
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginBottom: 15,
        shadowColor: 'rgba(0, 0, 0, 0.25)', // 阴影颜色
        shadowOffset: { width: 2, height: 1 }, // 阴影偏移量
        shadowOpacity: 0.8, // 阴影不透明度
        shadowRadius: 4, // 阴影半径
        elevation: 3, // Android 阴影效果
    },
    TaskName: {
        flex: 3,
        color: 'black',
        fontSize: 23,
        fontWeight: 'bold',
        paddingLeft: 5,
        marginBottom: 'auto',
        marginTop: 'auto',
    },
    Taskdetail: {
        flex: 5,
        fontSize: 18,
        paddingLeft: 25,
        marginBottom: 'auto',
        marginTop: 'auto',
        paddingHorizontal: 10,

    },
    ToggleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ToggleButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ToggleButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
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

export default BeeHiveItem;