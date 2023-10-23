import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

export default function SendToBankScreen({ navigation, route }) {

    const [ilogo, setLogo] = useState('')
    const [accountNumber, setAccountNumber] = useState('')


    const { bankName, logo, balance } = route.params.account

    const hanldeClicknextSendtoBank = () => {
        if (accountNumber === '') {
            alert('Không được bỏ trống thông tin')
        } else {

            navigation.navigate('TransferAmount', { account: { bankName, logo, accountNumber, balance } })
        }
    }


    return (
        <SafeAreaView>
            <View>
                <View style={{ paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
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
                    }}> Send to Bank</Text>
                </View>
            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 20 }}> Select Bank</Text>
            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                <View style={{
                    backgroundColor: '#CCFFFF',
                    borderRadius: 20,
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Image style={{
                        width: 80,
                        height: 30
                    }} source={logo} />

                    <Text style={{ paddingLeft: 10, fontSize: 15 }}>{bankName} </Text>
                </View>
            </View>
            <View style={{ marginTop: 50, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#000000', fontSize: 18 }}> Enter Account Number</Text>

            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                <View style={{
                    backgroundColor: '#CCFFFF',
                    borderRadius: 20,
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Ionicons name='person-outline' size={30} color='blue' />
                    <TextInput style={{ paddingHorizontal: 10 }}
                        placeholder='Enter 10 digit numbers'
                        placeholderTextColor='grey'
                        value={accountNumber}
                        onChangeText={(value) => setAccountNumber(value)}
                    />
                </View>
                <View style={{ borderBottomWidth: 1, paddingVertical: 10 }}></View>
                <View style={{ paddingVertical: 40 }} >
                    <TouchableOpacity style={{
                        backgroundColor: '#0000CC',
                        borderRadius: 30,
                        paddingVertical: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} onPress={hanldeClicknextSendtoBank}>
                        <Text style={{ color: 'white', fontSize: 20 }}> Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})