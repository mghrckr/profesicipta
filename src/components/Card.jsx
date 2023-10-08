import { StyleSheet, Text, View } from 'react-native';
import { fetchOrders } from '../store/actionCreators';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';



export default function Card() {
    const orders = useSelector((state) => state.orders.orders);
    const dispatch = useDispatch();
    console.log(orders);
    useEffect(() => {
        dispatch(fetchOrders());
    }, []);


    return (
        <View style={styles.box}>
            <View style={{ alignContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text>
                    A
                </Text>
            </View>
            <View style={{ alignContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text>
                    B
                </Text>
            </View>
            <View style={{ alignContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text>
                    C
                </Text>
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
        height: '17%',
        marginBottom: 20
    }
});
