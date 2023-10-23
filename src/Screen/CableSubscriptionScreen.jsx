import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { StatusBar } from 'react-native'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'

export default function CableSubscriptionScreen({ navigation, route }) {
    const [showBalance, setShowBalance] = useState(true)
    const [balance] = useState('N155,600.24')

    const { bankName, logo } = route.params.account
    return (
        <SafeAreaView>
            <View style={{ flex: 1, }}>
                <StatusBar
                    barStyle='light-content'
                />
                <View style={{ flexDirection: "row", justifyContent: 'space-between', position: 'absolute', }}>
                    <View style={{
                        width: '100%',
                        height: 250,
                        backgroundColor: '#10142E',
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30
                    }}>
                        <View style={{
                            width: 160,
                            height: 90,
                            backgroundColor: '#000055',
                            borderBottomRightRadius: 80,
                            borderBottomLeftRadius: 80,
                            marignRight: 20

                        }}>
                            <View style={{
                                width: 160,
                                height: 90,
                                backgroundColor: '#000099',
                                borderBottomRightRadius: 80,
                                borderBottomLeftRadius: 80,
                                marginLeft: 250

                            }}>

                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', marginTop: -40 }}>
                            <TouchableOpacity onPress={() => {
                                navigation.push('Bils')
                            }}>
                                <Ionicons name='chevron-back' color='white' size={30} />
                            </TouchableOpacity>
                            <Text style={{
                                fontSize: 20,
                                color: 'white',
                                marginLeft: 80
                            }}> Cable Subscription</Text>
                        </View>


                        <View style={{ paddingHorizontal: 20 }}>

                            <View style={{ paddingHorizontal: 5, flexDirection: 'row', marginTop: 40 }}>
                                <Image
                                    style={{
                                        width: 30,
                                        height: 30,
                                    }}
                                    source={require('../assets/VN.png')} />
                                <Ionicons name='chevron-down-outline' size={30} color='white' />
                            </View>
                            <Text style={{ color: 'white' }}> Current Balance</Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingVertical: 10
                            }}>
                                {showBalance ? <Text
                                    style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }} >{balance}</Text> : <Text
                                        style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }} >***********</Text>}

                                <TouchableOpacity onPress={() => {
                                    setShowBalance(!showBalance)
                                }}>
                                    {showBalance ? <Ionicons name='eye-outline' color='white' size={30} /> : <Ionicons name='eye-off-outline' color='white' size={30} />}
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginTop: 50 }}>
                                <Text style={{ color: 'black', fontSize: 17 }}> Service Provider</Text>
                            </View>
                            <View>
                                <View style={{
                                    paddingHorizontal: 5, paddingVertical: 5, marginTop: 30
                                }}>
                                    <TouchableOpacity style={{
                                        backgroundColor: '#0540F21A',
                                        height: 50,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        borderRadius: 30,
                                        paddingHorizontal: 10
                                    }} onPress={() => { navigation.navigate('SelectProvider') }} >
                                        <Image style={{
                                            width: 70,
                                            height: 30
                                        }} source={logo} />
                                        <Text style={{ color: 'grey', paddingLeft: 10 }}> {bankName}</Text>
                                        <Ionicons style={{ position: 'absolute', right: 10 }} name='chevron-forward' size={30} color='grey' />
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingHorizontal: 20,
                                    marginTop: 20,
                                    alignItems: 'center',
                                    paddingBottom: 10
                                }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}> Smartcard Number</Text>
                                    <Text> Beneficiaries</Text>
                                </View>
                                <View style={{
                                    paddingHorizontal: 5, paddingVertical: 10,
                                }}>
                                    <View style={{
                                        backgroundColor: '#0540F21A',
                                        height: 50,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        borderRadius: 30,
                                        paddingHorizontal: 20
                                    }} >

                                        <TextInput placeholder='Enter DSTV smartcard Number' />

                                    </View>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingHorizontal: 20,
                                    marginTop: 20,
                                    alignItems: 'center',
                                    paddingBottom: 10
                                }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}> Smartcard Number</Text>
                                </View>
                                <View style={{
                                    paddingHorizontal: 5, paddingVertical: 10,
                                }}>
                                    <TouchableOpacity style={{
                                        backgroundColor: '#0540F21A',
                                        width: 100,
                                        height: 50,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 30,
                                        paddingHorizontal: 20,
                                    }} >

                                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'blue' }}>30 Days</Text>

                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingHorizontal: 20,
                                    marginTop: 10,
                                    alignItems: 'center',
                                    paddingBottom: 10
                                }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}> Smartcard Number</Text>
                                </View>
                                <View style={{
                                    paddingHorizontal: 5, paddingVertical: 10,
                                }}>
                                    <TouchableOpacity style={{
                                        backgroundColor: '#0540F21A',
                                        height: 50,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        borderRadius: 30,
                                        paddingHorizontal: 20
                                    }} onPress={() => { navigation.navigate('SelectPackage') }} >

                                        <Text style={{ color: 'grey' }}> Please select your package</Text>
                                        <Ionicons style={{ position: 'absolute', right: 10 }} name='chevron-forward' size={30} color='grey' />

                                    </TouchableOpacity>
                                </View>
                                <View style={{ paddingVertical: 20 }}>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: 'blue',
                                            height: 50,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 30,
                                        }}>
                                        <Text style={{ color: 'white', fontSize: 20 }}>
                                            Confirm
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View >
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({})