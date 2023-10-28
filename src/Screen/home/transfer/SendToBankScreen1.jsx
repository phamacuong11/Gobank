import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'

export default function SendToBankScreen1({ navigation, route }) {

    const { bankName, logo, enterAmount, remark, accountNumber, balance } = route.params.account
    const handleSelect = () => {
        navigation.navigate('SelectBanks', { account: { bankName, logo, balance } });
    }

    return (
        <SafeAreaView>
            <View>
                <View style={{ paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Transfer')
                    }}>
                        <Ionicons name='chevron-back' color='black' size={RFPercentage(4)} />
                    </TouchableOpacity>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontSize: RFPercentage(3),
                            color: 'black',
                            fontWeight: 'bold',
                            marginLeft: '30%'
                        }}> Send to Bank</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                <Text style={{
                    fontSize: RFPercentage(2.5)
                }}> Select Bank</Text>
            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                <TouchableOpacity style={styles.buttonSelectbank} onPress={handleSelect}>
                    <Ionicons name='podium' size={RFPercentage(4)} color='black' />

                    <Text style={{ paddingLeft: 10, fontSize: RFPercentage(2.5) }}>Select Bank </Text>
                    <Ionicons style={{ position: 'absolute', right: 20 }} name='chevron-forward-outline' size={RFPercentage(4)} color='black' />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 50, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#000000', fontSize: RFPercentage(2.5) }}> Saved Beneficiary</Text>
                <TouchableOpacity>
                    <Text style={{ color: '#0540F2' }}>See all</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 25, paddingTop: 40, paddingBottom: 10, alignItems: 'center' }}>
                <View>
                    <Image style={{
                        width: 80,
                        height: 30
                    }} source={require('../../../../assets/logosacombank.png')} />
                </View>
                <View style={{ marginLeft: 30 }}>
                    <Text style={{ fontSize: RFPercentage(2.5), color: '#0540F2' }}>Mogaji Olatubosun ojo</Text>
                    <Text>9033554931</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 25, paddingVertical: 10, alignItems: 'center' }}>
                <View>
                    <Image style={{
                        width: 80,
                        height: 30
                    }} source={require('../../../../assets/logosacombank.png')} />
                </View>
                <View style={{ marginLeft: 30 }}>
                    <Text style={{ fontSize: RFPercentage(2.5), color: '#0540F2' }}>Mogaji Olatubosun ojo</Text>
                    <Text>9033554931</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 25, paddingVertical: 10, alignItems: 'center' }}>
                <View>
                    <Image style={{
                        width: 80,
                        height: 30
                    }} source={require('../../../../assets/logosacombank.png')} />
                </View>
                <View style={{ marginLeft: 30 }}>
                    <Text style={{ fontSize: RFPercentage(2.5), color: '#0540F2' }}>Mogaji Olatubosun ojo</Text>
                    <Text>9033554931</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buttonSelectbank: {
        backgroundColor: '#e3f0fa',
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    }
})