import { background } from 'native-base/lib/typescript/theme/styled-system';
import React, { useState } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, TextInput, Modal, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import TeamItem from './TeamItem.js'
import HiveIcon from './HiveIcon.js'
// import PopupModal from './PopModal';

const HomeScreen = ({ navigation }) => {
    // const navigation = useNavigation();
    const [darkMode, setDarkMode] = useState(false);
    const [teamOrlife, setTeamorLife] = useState(false);    // false->team true->life

    const [newModalVisible, setNewModalVisible] = useState(false);
    const [newInputText, setNewInputText] = useState('');

    const [joinModalVisible, setJoinModalVisible] = useState(false);
    const [joinInputText, setJoinInputText] = useState('');

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleTeamorLife = () => {
        setTeamorLife(!teamOrlife);
    };

    const navigateToNewTeam = () => {
        setNewModalVisible(false);
        navigation.navigate('NewTeam', { name: newInputText });
    };

    const navigateToJoinTeam = () => {
        setJoinModalVisible(false);
        navigation.navigate('Team', { name: joinInputText });
    };

    return (
        <View style={[styles.container, { backgroundColor: darkMode ? '#08132E' : '#ffffff' }]}>
            <ImageBackground source={require('../image/sky.jpg')} style={styles.background}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: 16, zIndex: 2 }}>
                    <TouchableOpacity onPress={toggleDarkMode}>
                        <Text style={{ color: darkMode ? '#ffffff' : '#000000' }}>
                            {darkMode ? 'Light Mode' : 'Dark Mode'}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../image/baby.jpg')} style={styles.avatar} />
                </View>
            </ImageBackground>

            <View style={{ flex: 0.4, marginTop: 50, marginLeft: 'auto', marginRight: 'auto', flexDirection: 'row', maxHeight: 75 }}>
                <TouchableOpacity style={{
                    margin: 10,
                    padding: 10,
                    width: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    backgroundColor: teamOrlife ? 'lightyellow' : '#F6E056'
                }} onPress={toggleTeamorLife}>
                    <Text>domo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    margin: 10,
                    padding: 10,
                    width: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5, backgroundColor: teamOrlife ? '#F6E056' : 'lightyellow'
                }} onPress={toggleTeamorLife}>
                    <Text>domo</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 2 }}>
                {teamOrlife ? (
                    <>
                        <TouchableOpacity>
                            <HiveIcon imageName={'baby'} name={'BeeHive'} description={'domo mountain domo sea'} mode={darkMode} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <HiveIcon imageName={'domo'} name={'Calendar'} description={'domo mountain domo sea'} mode={darkMode} />
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <TouchableOpacity>
                            <TeamItem imageName={'baby'} name={'SoftWare Team 14'} description={'domo mountain domo sea'} mode={darkMode} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <TeamItem imageName={'domo'} name={'Republic of Domo'} description={'domo mountain domo sea'} mode={darkMode} />
                        </TouchableOpacity>
                    </>
                )}
            </View>



            <View style={{
                flex: 1, position: 'absolute',
                bottom: 5, marginLeft: 35, marginRight: 35, flexDirection: 'row'
            }}>
                <TouchableOpacity onPress={() => setNewModalVisible(true)} style={[styles.navigationButton, { backgroundColor: darkMode ? '#FFFFB2' : '#5F2626' }]}>
                    <Text style={{ color: darkMode ? 'black' : 'white', fontSize: 12 }}>newATeam</Text>
                </TouchableOpacity>
                <Modal visible={newModalVisible} transparent={true}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                        <View style={{ height: 200, width: 300, backgroundColor: '#ffffff' }}>
                            <View style={{ borderWidth: 3, borderColor: '#5F2626', borderRadius: 5, height: 150, width: 250, marginLeft: 'auto', marginRight: 'auto', marginTop: 20, marginBottom: 20 }}>
                                <Image source={require('../image/baby.jpg')} style={{ borderRadius: 200, height: 50, width: 50, marginTop: -15, marginLeft: 'auto', marginRight: 'auto' }}></Image>
                                <Text style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>Give Your Team A Name!</Text>
                                <TextInput style={{ height: 40, width: 200, marginLeft: 'auto', marginRight: 'auto', borderColor: 'gray', borderWidth: 1 }} onChangeText={(newInputText) => setNewInputText(newInputText)} value={newInputText}></TextInput>
                                <TouchableOpacity onPress={() => navigateToNewTeam()} style={styles.newteamButton}>
                                    <Text style={{ color: 'white' }}>Create A New Team</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity onPress={() => setJoinModalVisible(true)} style={[styles.navigationButton, { backgroundColor: darkMode ? '#FFFFB2' : '#5F2626' }]}>
                    <Text style={{ color: darkMode ? 'black' : 'white', fontSize: 12 }}>JoinATeam</Text>
                </TouchableOpacity>
                <Modal visible={joinModalVisible} transparent={true}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                        <View style={{ height: 200, width: 300, backgroundColor: '#ffffff' }}>
                            <View style={{ borderWidth: 3, borderColor: '#5F2626', borderRadius: 5, height: 150, width: 250, marginLeft: 'auto', marginRight: 'auto', marginTop: 20, marginBottom: 20 }}>
                                <Image source={require('../image/baby.jpg')} style={{ borderRadius: 200, height: 50, width: 50, marginTop: -15, marginLeft: 'auto', marginRight: 'auto' }}></Image>
                                <Text style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>輸入團隊代碼!</Text>
                                <TextInput style={{ height: 40, width: 200, marginLeft: 'auto', marginRight: 'auto', borderColor: 'gray', borderWidth: 1 }} onChangeText={(joinInputText) => setJoinInputText(joinInputText)} value={joinInputText}></TextInput>
                                <TouchableOpacity onPress={() => navigateToJoinTeam()} style={styles.newteamButton}>
                                    <Text style={{ color: 'white' }}>Join the Team</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View >

        </View >

    )
}

const styles = {
    container: {
        backgroundColor: '#ffffff',
        flex: 1
    },
    background: {
        flex: 2,
        resizeMode: 'cover',
        zIndex: 1,
        backgroundColor: 'yellow'
    },
    avatar: {
        zIndex: 2,
        width: 150,
        height: 150,
        borderRadius: 100,
        marginTop: 200,
        marginBottom: -50,
        borderWidth: 5,
        borderColor: '#ffffff'
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
    },
    newteamButton: {
        margin: 15,
        alignItems: 'center',
        height: 42,
        width: 150,
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        borderRadius: 30,
        backgroundColor: '#5F2626',
        justifyContent: 'center'
    }
}

export default HomeScreen;
