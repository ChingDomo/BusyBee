import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class HiveIcon extends React.Component {
    static propTypes = {
        imageName: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        mode: PropTypes.bool
    };

    constructor(props) {
        super(props);
    }

    render() {
        const ImageMapping = {
            'baby': require('../image/baby.jpg'),
            'domo': require('../image/domo.jpg')
        };
        const IamgeSource = ImageMapping[this.props.imageName]

        return (
            <View style={[styles.itemContainer, { backgroundColor: this.props.mode ? '#FDE14D' : 'lightyellow' }]}>
                <Image
                    source={IamgeSource}
                    style={{
                        margin: 5,
                        resizeMode: 'contain',
                        width: 90,
                        height: 90,
                        borderRadius: 10,
                    }}
                />
                <View style={{ margin: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>
                        {this.props.name}
                    </Text>
                    <Text style={{ fontSize: 12, color: 'black' }}>
                        {this.props.description}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        position: 'relative',
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'lightyellow',
        borderRadius: 10,
        flexDirection: 'row',
        height: 100,
        width: 350
    }
})

export default HiveIcon;