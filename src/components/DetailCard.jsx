import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { Path } from 'react-native-svg';


export default function DetailCard() {
    const [count, setCount] = useState(0);

    const CircleButton = ({ onPress, symbol }) => (
        <TouchableOpacity onPress={onPress} style={styles.circleButton}>
            <Text style={styles.symbol}>{symbol}</Text>
        </TouchableOpacity>
    );

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    return (
        <View style={styles.box}>
            <View style={{ alignContent: 'center', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>
                    Barang 1
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 10, marginTop: 5 }} >
                    2.000.000
                </Text>
            </View>
            <View style={{ alignContent: 'center', alignItems: 'center', flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: 'bold' }}>
                        QTY
                    </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' ,backgroundColor: '#D9D9D9', borderRadius: 40}}>
                    <CircleButton onPress={decrement} symbol="-" />
                    <Text style={styles.count}>{count}</Text>
                    <CircleButton onPress={increment} symbol="+" />
                </View>
            </View>
            <View style={{ alignContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text style={{ fontWeight: 'bold' }}>
                    Total
                </Text>
                <Text style={{ fontWeight: 'bold', marginTop: 5 }} >
                    4.000.000
                </Text>
            </View>
            <View style={{ alignContent: 'center', alignItems: 'center', flex: 0.8, flexDirection: 'row' }}>
                <Image
                    source={require('../asset/Vector.png')}
                    style={{ width: 20, height: 20, marginRight: 10, marginLeft: 10 }}
                />
                <Image
                    source={require('../asset/Bin.png')}
                    style={{ width: 20, height: 20 }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'white',
        // borderWidth: 2,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        height: '24%',
        marginBottom: 20,
        flex: 1
    },
    circleButton: {
        width: 20,
        height: 20,
        borderRadius: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
      },
      symbol: {
        fontSize: 10,
        color: 'black',
      }
});
