import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, Picker, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'



const Tab = createBottomTabNavigator();



export default function HomeScreen({ navigation, route }) {

    const [showBalance, setShowBalance] = useState(true)

    const TransactionHistory = () => {
        navigation.push('Transaction')
    }
    const Notifi = () => {
        navigation.push('Notifi')
    }

    return (
        <View style={{ flex: 1, }}>
            <StatusBar
                barStyle='dark-content'
            />
            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', zIndex: 1, position: 'absolute', }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.viewImage1}>
                        </View>
                        <View style={styles.viewImage2}>
                        </View>
                    </View>
                </View>
                {/* Cards */}
                <View  >
                    <View style={styles.cardHeader}>

                        <Text style={{ fontSize: RFPercentage(3.5), color: '#10142E', zIndex: 100 }}>Hi,Fitsbyfunmi</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', zIndex: 1000 }}>

                            <Image
                                style={{
                                    right: 20,
                                    width: 50,
                                    height: 50
                                }} source={require('../../../assets/UserAvatar.png')} />
                            <TouchableOpacity onPress={Notifi}>

                                <Ionicons style={{ right: 0 }} name='notifications-outline' size={21} color="black" />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{ alignItems: 'center', paddingVertical: 20 }}>

                        <View style={styles.viewCardBody}>

                            <View style={{ paddingHorizontal: 10, flexDirection: 'row', paddingVertical: 20 }}>
                                <Image
                                    style={{
                                        width: 30,
                                        height: 30,
                                    }}
                                    source={require('../../../assets/VN.png')} />
                                <Ionicons name='chevron-down-outline' size={30} color='white' />
                            </View>
                            <Text style={{ color: 'white' }}> Current Balance</Text>
                            <View style={styles.viewCurrentBalance}>
                                {showBalance ? <Text
                                    style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }} >N155,600.24</Text> : <Text
                                        style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }} >***********</Text>}

                                <TouchableOpacity onPress={() => {
                                    setShowBalance(!showBalance)
                                }}>
                                    {showBalance ? <Ionicons name='eye-outline' color='white' size={30} /> : <Ionicons name='eye-off-outline' color='white' size={30} />}
                                </TouchableOpacity>

                            </View>
                            <Text style={{ color: 'white', fontSize: RFPercentage(2.5), marginTop: 20 }}> Account Number: 335493112</Text>
                        </View>

                    </View>
                </View>
                {/* Button */}
                <View style={{ flexDirection: 'row', paddingHorizontal: 25, justifyContent: 'space-between', paddingVertical: 20 }}>
                    {/* Transfer */}
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.viewButton} onPress={() => {
                            navigation.navigate('Transfer')
                        }}>
                            <Ionicons name='swap-horizontal-outline' size={25} color='#0540F2' fontWeight='bold' />
                        </TouchableOpacity>
                        <Text style={{ fontSize: RFPercentage(2), color: '#000000' }}> Transfer</Text>
                    </View>
                    {/* Airtime */}
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.viewButton}>
                            <Ionicons name='call-outline' size={25} color='#0540F2' fontWeight='bold' />
                        </TouchableOpacity>
                        <Text style={{ fontSize: RFPercentage(2), color: '#000000' }}> Airtime</Text>
                    </View>
                    {/* Data */}
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.viewButton} onPress={() => {
                            navigation.navigate('Data')
                        }}>
                            <Ionicons name='trending-up-outline' size={25} color='#0540F2' fontWeight='bold' />
                        </TouchableOpacity>
                        <Text style={{ fontSize: RFPercentage(2), color: '#000000' }}> Data</Text>
                    </View>
                    {/* Bills */}
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.viewButton} onPress={() => {
                            navigation.navigate('Bils')
                        }}>
                            <Ionicons name='clipboard-outline' size={25} color='#0540F2' fontWeight='bold' />
                        </TouchableOpacity>
                        <Text style={{ fontSize: RFPercentage(2), color: '#000000' }}> Bills</Text>
                    </View>
                    {/* More */}
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.viewButton} onPress={() => {
                            navigation.navigate('More')
                        }}>
                            <Ionicons name='arrow-forward-outline' size={25} color='#0540F2' fontWeight='bold' />
                        </TouchableOpacity>
                        <Text style={{ fontSize: RFPercentage(2), color: '#000000' }}> More</Text>
                    </View>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ paddingHorizontal: 20, fontSize: RFPercentage(3), fontWeight: 'bold', paddingBottom: 0 }}> Others</Text>
                </View>
                <View>
                    <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
                        <TouchableOpacity style={styles.button} onPress={TransactionHistory}>
                            <View>
                                <Ionicons name='reload-outline' color='#0540F2' size={30} fontWeight='bold' />
                            </View>
                            <View style={{ justifyContent: 'center', }}>
                                <Text style={{ fontSize: RFPercentage(3), color: '#0540F2', fontWeight: 'bold' }}>  Transaction History</Text>
                                <Text style={{ marginLeft: 10, color: 'black', fontSize: RFPercentage(2) }}> See your recent transactions </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
                        <TouchableOpacity style={styles.button}>
                            <View>
                                <Ionicons name='analytics-outline' color='#0540F2' size={30} fontWeight='bold' />
                            </View>
                            <View style={{}}>
                                <Text style={{ fontSize: RFPercentage(3), color: '#0540F2', fontWeight: 'bold' }}>  Savings Investment</Text>
                                <Text style={{ color: 'black', fontSize: RFPercentage(2) }}> See how you've invest and earn </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View >
                <View style={{ paddingBottom: 50, }}>
                    <View style={{ paddingHorizontal: 30, paddingVertical: 10, width: '100%' }}>
                        <TouchableOpacity style={styles.button}>
                            <View>
                                <Ionicons name='nuclear-outline' color='#0540F2' size={30} fontWeight='bold' />
                            </View>
                            <View style={{ justifyContent: 'center', }}>
                                <Text style={{ fontSize: RFPercentage(3), color: '#0540F2', fontWeight: 'bold' }}>  Savings Goals</Text>
                                <Text style={{ color: 'black', fontSize: RFPercentage(2) }}> See the goals you set yourself </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
        </View >
    )
}
const styles = StyleSheet.create({
    viewImage1: {
        zIndex: 1,
        width: '50%',
        height: 70,
        backgroundColor: '#e3f0fa',
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,

    },
    viewImage2: {
        zIndex: 1,
        width: '50%',
        height: 70,
        backgroundColor: '#e3f0fa',
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,

    },
    cardHeader: {
        position: 'relative',
        flexDirection: 'row',
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    viewCardBody: {
        width: '100%',
        height: 210,
        backgroundColor: '#10142E',
        borderRadius: 30,
        paddingHorizontal: 20
    },
    viewCurrentBalance: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    viewButton: {
        backgroundColor: '#e3f0fa',
        width: 40, height: 40,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#e3f0fa',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        paddingHorizontal: 10
    }
})