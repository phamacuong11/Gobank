import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native';

export default function ConfirmDetailsScreen({ navigation, route }) {

    const handleClickEnterYourCode = () => {
        navigation.navigate('EnterYoursCode', { account: { bankName, logo, balance, enterAmount } });
    }
    const { bankName, logo, enterAmount, remark, accountNumber, balance } = route.params.account

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View style={{ paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack()
                        }}>
                            <Ionicons name='chevron-back' color='black' size={30} />
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 22,
                            color: 'black',
                            marginLeft: 100,
                            fontWeight: 'bold'
                        }}> Comfirm Details</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 20 }}> Select Bank</Text>
                </View>
                <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                    <View style={{
                        backgroundColor: '#e3f0fa',
                        borderRadius: 20,
                        paddingHorizontal: 30,
                        paddingVertical: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>

                        <View style={{

                            flexDirection: 'row',
                        }} >
                            <Image style={{
                                width: 80,
                                height: 30
                            }} source={logo} />

                        </View>
                        <View style={{ paddingHorizontal: 10 }}>

                            <Text style={{ paddingLeft: 10, fontSize: 18, paddingBottom: 10 }}>Mogaji Olatubosun Ojo </Text>
                            <Text style={{ paddingLeft: 10, fontSize: 12 }}> {accountNumber}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 50 }}>
                    <View style={{
                        backgroundColor: '#e3f0fa',
                        height: '80%',
                        borderRadius: 20
                    }}>
                        <TouchableOpacity style={{ padding: 10 }}>
                            <Ionicons name='close' color='grey' size={30} />
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{enterAmount}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 20, paddingTop: 10 }}>
                            <View>
                                <Text style={{ fontSize: 16 }}> Bank</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{
                                    width: 60,
                                    height: 20
                                }}
                                    source={logo} />
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}> {bankName}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 20, paddingTop: 10 }}>
                            <View>
                                <Text style={{ fontSize: 16 }}> Account Number</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}> {accountNumber}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 20, paddingTop: 10 }}>
                            <View>
                                <Text style={{ fontSize: 16 }}> Name</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}> MogaJi Olatubosun Oji</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 20, paddingTop: 10 }}>
                            <View>
                                <Text style={{ fontSize: 16 }}> Amount</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}> {accountNumber}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 20, paddingTop: 10 }}>
                            <View>
                                <Text style={{ fontSize: 16 }}> Transaction Fee</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}> 10.000</Text>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
                            <View style={{ flexDirection: 'row', backgroundColor: 'hsl(188, 78%, 85%)', padding: 10, borderRadius: 10 }}>
                                <Ionicons name='card-outline' size={30} color='blue' />
                                <Text style={{ fontSize: 25 }}> Balance({balance})</Text>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, paddingVertical: 30 }} >
                            <TouchableOpacity style={{
                                backgroundColor: 'blue',
                                padding: 15,
                                borderRadius: 20,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} onPress={handleClickEnterYourCode}>
                                <Text style={{ color: 'white', fontSize: 20 }}> Pay</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})