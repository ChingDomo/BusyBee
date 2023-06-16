import React from 'react';
// import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Platform, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class BeeHiveList extends React.Component {
    render() {
        return (
            <View style={styles.BeeHiveForm}>
                <View style={styles.row1}>
                    <View style={styles.hive}>
                        <TouchableOpacity style={styles.hiveButton}>
                            <Text style={styles.hivebuttonText}>Hive1</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.hive}>
                        <TouchableOpacity style={styles.hiveButton}>
                            <Text style={styles.hivebuttonText}>Hive2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.hive}>
                        <TouchableOpacity style={styles.hiveButton}>
                            <Text style={styles.hivebuttonText}>Hive3</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row2}>
                    <View style={styles.hive}>
                        <TouchableOpacity style={styles.hiveButton}>
                            <Text style={styles.hivebuttonText}>Hive4</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.hive}>
                        <TouchableOpacity style={styles.hiveButton}>
                            <Text style={styles.hivebuttonText}>Hive5</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row3}>
                    <View style={styles.hive}>
                        <TouchableOpacity style={styles.hiveButton}>
                            <Text style={styles.hivebuttonText}>Hive6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.hive}>
                        <TouchableOpacity style={styles.hiveButton}>
                            <Text style={styles.hivebuttonText}>Hive7</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.hive}>
                        <TouchableOpacity style={styles.hiveButton}>
                            <Text style={styles.hivebuttonText}>Hive8</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

}

const styles = {
    BeeHiveForm: {
        flex: 6,
        paddingHorizontal: 40,
        flexDirection: 'row'
    },
    hive: {
        height: 90,
        width: 90,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    hivebuttonText: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        color: 'rgb(95, 38, 38)',
        fontSize: 16,
        fontWeight: 'bold',
    },
    hiveButton: {
        flex: 1,
        borderRadius: 50,
        backgroundColor: 'rgb(255, 255, 178)'
    },
    row1: {
        flex: 1,
        // backgroundColor: 'orange',
        justifyContent: 'center',
        marginRight: -40,
    },
    row2: {
        flex: 1,
        // backgroundColor: 'green',
        justifyContent: 'center', // 垂直置中
    },
    row3: {
        flex: 1,
        // backgroundColor: 'orange',
        justifyContent: 'center', // 垂直置中
        marginLeft: -40,
    },
}