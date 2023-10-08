import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function AfterLogin({ navigation }) {
    return (
        <>
            <View style={styles.container}>
                <View style={{ flex: 0.3, backgroundColor: '#23E9E9' }} />
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.1, backgroundColor: '#5564F4' }}>
                        <Text style={styles.logout}>
                            Logout
                        </Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                        <View style={{ flex: 0.1 }}>
                            <Text style={styles.approval}>
                                status Approval
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <View style={styles.boxOne}>
                                    <Pressable
                                        onPress={() => {
                                            navigation.navigate('SecurityScreen');
                                            // console.log('jalan');
                                        }}>
                                        <Image
                                            source={require('../asset/Vectary.png')}
                                            style={{ width: 40, height: 40 }}

                                        />
                                    </Pressable>
                                    <Text style={{ fontSize: 7, fontWeight: 'bold', marginTop: 13, color: 'white', marginLeft: 8 }}>
                                        Welcome - Admin1
                                    </Text>
                                </View>
                                <View style={styles.boxTwo}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', marginLeft: 10, marginTop: 18 }}>
                                        Cuti
                                    </Text>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', marginLeft: 10, marginTop: 2 }}>
                                        12
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.6 }}>
                                <View style={styles.boxThree}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', marginLeft: 10, marginTop: 18 }}>
                                        Izin
                                    </Text>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', marginLeft: 10, marginTop: 2 }}>
                                        10
                                    </Text>
                                </View>
                                <View style={styles.boxFour}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', marginLeft: 10, marginTop: 18 }}>
                                        Sakit
                                    </Text>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', marginLeft: 10, marginTop: 2 }}>
                                        30
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    logout: {
        fontWeight: "bold",
        fontSize: 15,
        color: "white",
        marginLeft: 220,
        marginTop: 30
    },
    approval: {
        fontWeight: "bold",
        fontSize: 12,
        color: "black",
        marginLeft: 190,
        marginTop: 30
    },
    boxOne: {
        backgroundColor: '#ABB2F5',
        borderRadius: 10,
        width: '70%',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        height: 70,
        marginTop: 10,
        marginLeft: 50
    },
    boxTwo: {
        backgroundColor: '#FABCFF',
        borderRadius: 10,
        width: '52%',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        height: 50,
        marginLeft: 75,
        marginTop: 9
    },
    boxThree: {
        backgroundColor: '#FABCFF',
        borderRadius: 10,
        width: '80%',
        height: 50,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginLeft: 5,
        marginTop: 10
    },
    boxFour: {
        backgroundColor: '#FABCFF',
        borderRadius: 10,
        width: '80%',
        height: 50,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginLeft: 11,
        marginTop: 28
    }
});