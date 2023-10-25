import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import Button from '../../../component/Button'

export default function SendToBankScreen({ navigation, route }) {

    const [ilogo, setLogo] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const handleAmountChange = (text) => {
        // Loại bỏ dấu phẩy và dấu chấm cũ
        const formattedText = text.replace(/[,|.]/g, '');

        // Chèn dấu chấm ngăn cách hàng nghìn
        const formattedAmount = formattedText.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        setAccountNumber(formattedAmount, accountNumber);
    };


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
                    <View style={{
                        alignItems: 'center',
                        width: '100%', paddingRight: 40, justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontSize: 22,
                            color: 'black',
                            fontWeight: 'bold'
                        }}> Send to Bank</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 20 }}> Select Bank</Text>
            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                <View style={{
                    backgroundColor: '#e3f0fa',
                    borderRadius: 20,
                    paddingHorizontal: 20,
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
                    backgroundColor: '#e3f0fa',
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
                        keyboardType='numeric'
                        onChangeText={(value) => { setAccountNumber(value) }}
                    />

                </View>
                <View style={{ borderBottomWidth: 1, paddingVertical: 10 }}></View>
                <View style={{ paddingVertical: 40 }} >
                    <TouchableOpacity style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} onPress={hanldeClicknextSendtoBank}>
                        <Button text="Next" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})