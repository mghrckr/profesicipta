import { StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import DetailCard from '../components/DetailCard';



export default function SalesOrderInput() {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.2, backgroundColor: '#677800' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image
                        source={require('../asset/Profile.png')}
                        style={{ width: 40, height: 40, marginLeft: 15, marginTop: 15 }}
                    />
                    <Image
                        source={require('../asset/Strips.png')}
                        style={{ width: 20, height: 20, marginLeft: 280, marginTop: 25, borderColor: 'black' }}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.sales}>
                        Sales Order Input
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#677800' }}>
                <View style={{
                    flex: 0.52, backgroundColor: '#EEEEEE', borderTopLeftRadius: 30,
                    borderTopRightRadius: 30, alignItems: 'center'
                }}>
                    <View style={styles.box}>
                        <Text style={styles.salesInformation}>Sales Information</Text>
                        <View style={{ flex: 0.1, flexDirection: 'row' }}>
                            <View style={styles.inputView} >
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Keyword"
                                    placeholderTextColor="#A69F9F"
                                    onChangeText={text => this.setState({ keyword: text })} />
                            </View>
                        </View>
                        <View style={styles.inputViewTwo} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="Order Date"
                                placeholderTextColor="#A69F9F"
                                onChangeText={text => this.setState({ orderDate: text })} />
                            <Svg width={19} height={21} viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                                style={{ marginLeft: 220 }}
                            >
                                <Path
                                    d="M2.78842 20.2122C2.23565 20.2122 1.76227 20.0152 1.36829 19.6212C0.974307 19.2273 0.777652 18.7542 0.778322 18.2021V4.13141C0.778322 3.57863 0.975312 3.10525 1.36929 2.71127C1.76327 2.31729 2.23632 2.12064 2.78842 2.12131H3.79347V0.111206H5.80358V2.12131H13.844V0.111206H15.8541V2.12131H16.8591C17.4119 2.12131 17.8853 2.3183 18.2793 2.71228C18.6732 3.10626 18.8699 3.5793 18.8692 4.13141V18.2021C18.8692 18.7549 18.6722 19.2283 18.2783 19.6222C17.8843 20.0162 17.4112 20.2129 16.8591 20.2122H2.78842ZM2.78842 18.2021H16.8591V8.15161H2.78842V18.2021ZM2.78842 6.14151H16.8591V4.13141H2.78842V6.14151ZM9.82378 12.1718C9.53901 12.1718 9.30015 12.0753 9.10718 11.8824C8.91421 11.6894 8.81806 11.4509 8.81873 11.1668C8.81873 10.882 8.91521 10.6431 9.10818 10.4502C9.30115 10.2572 9.53968 10.161 9.82378 10.1617C10.1085 10.1617 10.3474 10.2582 10.5404 10.4512C10.7333 10.6441 10.8295 10.8827 10.8288 11.1668C10.8288 11.4515 10.7323 11.6904 10.5394 11.8834C10.3464 12.0763 10.1079 12.1725 9.82378 12.1718ZM5.80358 12.1718C5.51881 12.1718 5.27994 12.0753 5.08697 11.8824C4.894 11.6894 4.79785 11.4711 4.79852 11.1668C4.79852 10.882 4.89501 10.6431 5.08798 10.4502C5.28095 10.2572 5.51948 10.161 5.80358 10.1617C6.08834 10.1617 6.32721 10.2582 6.52018 10.4512C6.71315 10.6441 6.8093 10.8827 6.80863 11.1668C6.80863 11.4515 6.71214 11.6904 6.51917 11.8834C6.3262 12.0763 6.08767 12.1725 5.80358 12.1718ZM13.844 12.1718C13.5592 12.1718 13.3203 12.0753 13.1274 11.8824C12.9344 11.6894 12.8383 11.4509 12.8389 11.1668C12.8389 10.882 12.9354 10.6431 13.1284 10.4502C13.3214 10.2572 13.5599 10.161 13.844 10.1617C14.1287 10.1617 14.3676 10.2582 14.5606 10.4512C14.7535 10.6441 14.8497 10.8827 14.849 11.1668C14.849 11.4515 14.7525 11.6904 14.5596 11.8834C14.3666 12.0763 14.1281 12.1725 13.844 12.1718ZM9.82378 16.192C9.53901 16.192 9.30015 16.0955 9.10718 15.9026C8.91421 15.7096 8.81806 15.4711 8.81873 15.187C8.81873 14.9022 8.91521 14.6633 9.10818 14.4704C9.30115 14.2774 9.53968 14.1812 9.82378 14.1819C10.1085 14.1819 10.3474 14.2784 10.5404 14.4714C10.7333 14.6643 10.8295 14.9029 10.8288 15.187C10.8288 15.4717 10.7323 15.7106 10.5394 15.9036C10.3464 16.0965 10.1079 16.1927 9.82378 16.192ZM5.80358 16.192C5.51881 16.192 5.27994 16.0955 5.08697 15.9026C4.894 15.7096 4.79785 15.4711 4.79852 15.187C4.79852 14.9022 4.89501 14.6633 5.08798 14.4704C5.28095 14.2774 5.51948 14.1812 5.80358 14.1819C6.08834 14.1819 6.32721 14.2784 6.52018 14.4714C6.71315 14.6643 6.8093 14.9029 6.80863 15.187C6.80863 15.4717 6.71214 15.7106 6.51917 15.9036C6.3262 16.0965 6.08767 16.1927 5.80358 16.192ZM13.844 16.192C13.5592 16.192 13.3203 16.0955 13.1274 15.9026C12.9344 15.7096 12.8383 15.4711 12.8389 15.187C12.8389 14.9022 12.9354 14.6633 13.1284 14.4704C13.3214 14.2774 13.5599 14.1812 13.844 14.1819C14.1287 14.1819 14.3676 14.2784 14.5606 14.4714C14.7535 14.6643 14.8497 14.9029 14.849 15.187C14.849 15.4717 14.7525 15.7106 14.5596 15.9036C14.3666 16.0965 14.1281 16.1927 13.844 16.192Z"
                                    fill="#515151"
                                />
                            </Svg>
                        </View>
                        <View style={styles.inputViewThree} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="Customer"
                                placeholderTextColor="#A69F9F"
                                onChangeText={text => this.setState({ customer: text })} />
                            <Svg style={{ marginLeft: 230 }}
                                width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M7.5 11.0312C7.25 11.0312 7 10.9062 6.875 10.7812L2.75 6.65625C2.375 6.28125 2.375 5.65625 2.75 5.28125C3.125 4.90625 3.75 4.90625 4.125 5.28125L7.5 8.65625L10.875 5.28125C11.25 4.90625 11.875 4.90625 12.25 5.28125C12.625 5.65625 12.625 6.28125 12.25 6.65625L8.25 10.6562C8 10.9062 7.75 11.0312 7.5 11.0312Z" fill="#848484" />
                            </Svg>
                        </View>
                        <View style={styles.inputViewFour} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="Adress"
                                placeholderTextColor="#A69F9F"
                                onChangeText={text => this.setState({ adress: text })} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 0.7, backgroundColor: '#EEEEEE' }}>
                    <View style={{ flex: 0.1, flexDirection: 'row', alignItems: 'center' }} >
                        <Text style={styles.detailSales}>
                            Detail Sales
                        </Text>
                        <Pressable style={styles.addBtn}
                            onPress={() => {
                                console.log('add');
                            }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Add Item</Text>
                        </Pressable>
                    </View>
                    <View style={{ flex: 0.55, justifyContent: 'center', alignItems: 'center' }} >
                        <DetailCard />
                        <DetailCard />
                        <DetailCard />
                    </View>
                    <View style={{ flex: 0.35, backgroundColor: '#FFFFFF', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
                                Order Summary
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
                                Sub Total :
                            </Text>
                            <Text style={{ fontWeight: 'bold', marginLeft: 180 }}>
                                12.000.000
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
                                Total Product :
                            </Text>
                            <Text style={{ fontWeight: 'bold', marginLeft: 150 }}>
                                6 Products
                            </Text>
                        </View>
                        <View style={{ flex: 1.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Pressable style={styles.processBtn}
                                onPress={() => {
                                    console.log('process');
                                }}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Process Order</Text>
                            </Pressable>
                            <Pressable style={styles.cancelBtn}
                                onPress={() => {
                                    console.log('cancel');
                                }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    sales: {
        fontWeight: "bold",
        fontSize: 30,
        color: "white",
        marginLeft: 20,
        marginTop: 10
    },
    detailSales: {
        fontWeight: "bold",
        fontSize: 20,
        color: "black",
        marginLeft: 22
    },
    orderList: {
        fontWeight: "bold",
        fontSize: 20,
        color: "black",
        marginLeft: 25,
        marginTop: 10
    },
    total: {
        fontWeight: "bold",
        fontSize: 10,
        color: "black",
        marginLeft: 168,
        marginTop: 17
    },
    box: {
        borderColor: '#979C9F',
        borderWidth: 2,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
        // flex: 1,
        marginTop: 10
    },
    inputView: {
        width: "97%",
        borderRadius: 10,
        justifyContent: "center",
        padding: 20,
        borderColor: '#979C9F',
        borderWidth: 2,
        height: 3
    },
    inputViewTwo: {
        width: "97%",
        borderRadius: 10,
        marginTop: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        borderColor: '#979C9F',
        borderWidth: 2,
        height: 5,
        marginBottom: 10,
        flexDirection: 'row'
    },
    inputViewThree: {
        width: "97%",
        borderRadius: 10,
        // marginTop: 50,
        justifyContent: "flex-start",
        alignItems: 'center',
        padding: 20,
        borderColor: '#979C9F',
        borderWidth: 2,
        height: 5,
        marginBottom: 10,
        flexDirection: 'row'
    },
    inputViewFour: {
        width: "97%",
        borderRadius: 10,
        // marginTop: 10,
        justifyContent: "flex-start",
        alignItems: 'center',
        padding: 20,
        borderColor: '#979C9F',
        borderWidth: 2,
        height: 80,
        marginBottom: 10,
        flexDirection: 'row'
    },
    inputText: {
        height: 10,
        fontSize: 10,
        fontWeight: 'normal'
    },
    salesInformation: {
        fontWeight: "bold",
        fontSize: 15,
        color: "black",
        marginBottom: 8,
        marginRight: 200,
        marginTop: 10
    },
    addBtn: {
        width: "30%",
        backgroundColor: "#677800",
        borderRadius: 10,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 120
    },
    processBtn: {
        width: "30%",
        backgroundColor: "#677800",
        borderRadius: 10,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20
    },
    cancelBtn: {
        width: "30%",
        borderColor: '#677800',
        borderWidth: 2,
        borderRadius: 10,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
    }
});