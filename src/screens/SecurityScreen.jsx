import { StyleSheet, Text, View, Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function SecurityScreen({ navigation }) {
    return (
        <>
            <View style={styles.container}>
                <View style={{ flex: 0.3, backgroundColor: '#23E9E9' }} />
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.1, backgroundColor: '#5564F4' }}>
                        <Pressable
                            onPress={() => {
                                navigation.navigate('LoginScreen');
                                // console.log('keluar');
                            }}>
                            <Text style={styles.logout}>
                                Logout
                            </Text>
                        </Pressable>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#EBE9E9' }}>
                        <Pressable
                            onPress={() => {
                                navigation.navigate('SalesOrderList');
                                // console.log('keluar');
                            }}>
                            <View style={styles.box}>
                                <Text style={{
                                    fontWeight: "bold",
                                    fontSize: 12,
                                    color: "black",
                                    marginTop: 7,
                                    marginLeft: 2
                                }}>
                                    Security
                                </Text>
                                <Svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ marginTop: 7, marginLeft: 50 }}
                                >
                                    <Path
                                        d="M10.7325 6.9825C10.2638 7.45132 10.0005 8.08709 10.0005 8.75C10.0005 9.41291 10.2638 10.0487 10.7325 10.5175L15.2137 15L10.7325 19.4825C10.4937 19.7131 10.3032 19.989 10.1722 20.294C10.0412 20.599 9.97222 20.927 9.96933 21.259C9.96645 21.5909 10.0297 21.9201 10.1554 22.2274C10.2811 22.5346 10.4667 22.8138 10.7015 23.0485C10.9362 23.2832 11.2153 23.4689 11.5226 23.5946C11.8298 23.7203 12.159 23.7835 12.491 23.7806C12.8229 23.7777 13.151 23.7088 13.456 23.5778C13.761 23.4467 14.0368 23.2563 14.2675 23.0175L22.2862 15L14.2675 6.9825C13.7986 6.51382 13.1629 6.25053 12.5 6.25053C11.837 6.25053 11.2013 6.51382 10.7325 6.9825Z"
                                        fill="#1D2652"
                                    />
                                </Svg>
                            </View>
                        </Pressable>
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
    box: {
        backgroundColor: '#116FC4',
        width: '40%',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        height: 30,
        marginTop: 80,
        marginLeft: 50
    }
});