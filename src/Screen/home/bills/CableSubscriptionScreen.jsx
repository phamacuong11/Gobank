import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { StatusBar } from 'react-native'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export default function CableSubscriptionScreen({ navigation, route }) {
    const [showBalance, setShowBalance] = useState(true)
    const [balance] = useState('N155,600.24')

    const { bankName, logo } = route.params.account
    return (
        <SafeAreaView>
            <ScrollView>
                <View >
                    <StatusBar
                        barStyle='light-content'
                    />
                    <View style={styles.view1}>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={styles.view2}>
                        </View>
                        <View style={styles.view3}>
                        </View>
                    </View>

                    <View style={{ paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', marginTop: -40 }}>
                        <TouchableOpacity onPress={() => {
                            navigation.push('Bils')
                        }}>
                            <Ionicons name='chevron-back' color='white' size={RFPercentage(4)} />
                        </TouchableOpacity>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontSize: RFPercentage(3),
                                color: 'white',
                                marginLeft: '25%'
                            }}> Cable Subscription</Text>
                        </View>
                    </View>


                    <View style={{ paddingHorizontal: 20 }}>

                        <View style={{ paddingHorizontal: 5, flexDirection: 'row', marginTop: 40 }}>
                            <Image
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                                source={require('../../../../assets/VN.png')} />
                            <Ionicons name='chevron-down-outline' size={RFPercentage(5)} color='white' />
                        </View>
                        <Text style={{ color: 'white' }}> Current Balance</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 10
                        }}>
                            {showBalance ? <Text
                                style={{ color: 'white', fontSize: RFPercentage(5), fontWeight: 'bold' }} >{balance}</Text> : <Text
                                    style={{ color: 'white', fontSize: RFPercentage(5), fontWeight: 'bold' }} >***********</Text>}

                            <TouchableOpacity onPress={() => {
                                setShowBalance(!showBalance)
                            }}>
                                {showBalance ? <Ionicons name='eye-outline' color='white' size={RFPercentage(6)} /> : <Ionicons name='eye-off-outline' color='white' size={30} />}
                            </TouchableOpacity>

                        </View>
                        <View style={{ marginTop: 50 }}>
                            <Text style={{ color: 'black', fontSize: RFPercentage(3) }}> Service Provider</Text>
                        </View>
                        <View>
                            <View style={{
                                paddingHorizontal: 5, paddingVertical: 5, marginTop: 30
                            }}>
                                <TouchableOpacity style={styles.buttonbank}
                                    onPress={() => { navigation.navigate('SelectProvider') }} >
                                    <Image style={{
                                        width: 70,
                                        height: 30
                                    }} source={logo} />
                                    <Text style={{ color: 'grey', paddingLeft: 5, fontSize: RFPercentage(2.3) }}> {bankName}</Text>
                                    <Ionicons style={{ position: 'absolute', right: 5 }} name='chevron-forward' size={RFPercentage(4)} color='grey' />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.viewtextinput}>
                                <Text style={{ fontWeight: 'bold', fontSize: RFPercentage(3) }}> Smartcard Number</Text>
                                <Text style={{ fontSize: RFPercentage(2.5) }}> Beneficiaries</Text>
                            </View>
                            <View style={{
                                paddingHorizontal: 5, paddingVertical: 10,
                            }}>
                                <View style={styles.viewsmartcardnumber} >

                                    <TextInput placeholder='Enter DSTV smartcard Number' />

                                </View>
                            </View>
                            <View style={styles.viewtextinput}>
                                <Text style={{ fontWeight: 'bold', fontSize: RFPercentage(3) }}> Smartcard Number</Text>
                            </View>
                            <View style={{
                                paddingHorizontal: 5, paddingVertical: 10,
                            }}>
                                <TouchableOpacity style={styles.button30day} >

                                    <Text style={{ fontWeight: 'bold', fontSize: RFPercentage(3), color: '#0540F2' }}>30 Days</Text>

                                </TouchableOpacity>
                            </View>
                            <View style={styles.viewsmartcardnumber1}>
                                <Text style={{ fontWeight: 'bold', fontSize: RFPercentage(3) }}> Smartcard Number</Text>
                            </View>
                            <View style={{
                                paddingHorizontal: 5, paddingVertical: 10,
                            }}>
                                <TouchableOpacity style={styles.buttonplease}
                                    onPress={() => { navigation.navigate('SelectPackage') }} >

                                    <Text style={{ color: 'grey', fontSize: RFPercentage(2.5) }}> Please select your package</Text>
                                    <Ionicons style={{ position: 'absolute', right: 10 }} name='chevron-forward' size={30} color='grey' />

                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingVertical: 20 }}>
                                <TouchableOpacity
                                    style={styles.buttonconfirm}>
                                    <Text style={{ color: 'white', fontSize: RFPercentage(3) }}>
                                        Confirm
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                </View >
            </ScrollView>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    // header
    view1: {
        position: 'absolute',
        width: '100%',
        height: 220,
        backgroundColor: '#10142E',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    view2: {
        width: '40%',
        height: 70,
        backgroundColor: '#000055',
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,
        marignRight: 20

    },
    view3: {
        width: '40%',
        height: 70,
        backgroundColor: '#000099',
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,

    },
    // body
    buttonbank: {
        backgroundColor: '#e3f0fa',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        paddingHorizontal: 5
    },
    viewtextinput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
        paddingBottom: 10
    },
    viewsmartcardnumber: {
        backgroundColor: '#e3f0fa',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        paddingHorizontal: 20
    },
    button30day: {
        backgroundColor: '#e3f0fa',
        width: 100,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingHorizontal: 20,
    },
    viewsmartcardnumber1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 10,
        alignItems: 'center',
        paddingBottom: 10
    },
    buttonplease: {
        backgroundColor: '#e3f0fa',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        paddingHorizontal: 20
    },
    buttonconfirm: {
        backgroundColor: '#0540F2',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    }
})