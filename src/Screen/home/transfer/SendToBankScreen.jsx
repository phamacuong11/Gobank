import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import Button from '../../../component/Button'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { ToastAndroid } from 'react-native'

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
            ToastAndroid.show('Không được bỏ trống thông tin', ToastAndroid.SHORT);
        } else {

            navigation.navigate('TransferAmount', { account: { bankName, logo, accountNumber, balance } })
        }
    }


    return (
        <SafeAreaView>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <Ionicons name='chevron-back' color='black' size={RFPercentage(4)} />
                    </TouchableOpacity>
                    <View style={styles.viewtext}>
                        <Text style={styles.textheader}> Send to Bank</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: RFPercentage(2.5) }}> Select Bank</Text>
            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                <View style={styles.viewmain}>
                    <Image style={{ width: 80, height: 30 }}
                        source={logo} />

                    <Text style={{ paddingLeft: 10, fontSize: RFPercentage(2.5) }}>{bankName} </Text>
                </View>
            </View>
            <View style={styles.view}>
                <Text style={{ color: '#000000', fontSize: RFPercentage(2.5) }}> Enter Account Number</Text>

            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                <View style={styles.view1}>
                    <Ionicons name='person-outline' size={RFPercentage(4)} color='blue' />
                    <TextInput style={{ paddingHorizontal: 10, fontSize: RFPercentage(2.5) }}
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

const styles = StyleSheet.create({
    // header
    header: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    viewtext: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textheader: {
        fontSize: RFPercentage(3),
        color: 'black',
        fontWeight: 'bold',
        marginLeft: '35%'
    },
    // select bank
    viewmain: {
        backgroundColor: '#e3f0fa',
        borderRadius: 20,
        paddingHorizontal: 8,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    // Enter account number
    view: {
        marginTop: 50,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    view1: {
        backgroundColor: '#e3f0fa',
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    }
})