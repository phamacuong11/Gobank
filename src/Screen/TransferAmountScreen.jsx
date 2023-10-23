import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

export default function TransferAmountScreen({ navigation, route }) {

    const [ilogo, setLogo] = useState('')
    const [remark, steRemark] = useState('')
    const [enterAmount, setEnterAmount] = useState('')

    const { balance } = route.params.account
    const hanldeClickConfirm = () => {
        if (enterAmount === '') {
            alert('Vui lòng nhập số tiền')
        } else if (remark === '') {
            alert('Bạn chưa nhập nội dung')

        } else {
            navigation.navigate('ConfirmDetails', { account: { bankName, logo, remark, accountNumber, enterAmount, balance } })
        }
    }

    const { bankName, logo, accountNumber } = route.params.account
    return (
        <SafeAreaView>
            <View>
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
                        }}> Transfer Amount</Text>
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
                            <Text style={{ paddingLeft: 10, fontSize: 12 }}> 9033554931</Text>
                        </View>
                    </View>
                </View>
                <View>

                    <View style={{ marginTop: 50, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#000000', fontSize: 18 }}> Enter Amount</Text>

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
                            <TextInput style={{
                                paddingHorizontal: 10,
                                fontWeight: 'bold',
                                fontSize: 20,

                            }}
                                value={enterAmount}
                                onChangeText={(value) => setEnterAmount(value)}
                                placeholder='10.000'
                                placeholderTextColor='#000000' />
                        </View>
                        <View style={{ borderBottomWidth: 1, paddingVertical: 10 }}></View>
                    </View>
                </View>
                <View>
                    <View style={{ marginTop: 20, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#000000', fontSize: 18 }}> Remark(Optional)</Text>

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
                            <TextInput style={{ paddingHorizontal: 10 }}
                                placeholder='Transaction remark(Optional)'
                                placeholderTextColor='grey'
                                value={remark}
                                onChangeText={(value) => steRemark(value)}
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
                            }} onPress={hanldeClickConfirm} >


                                <Text style={{ color: 'white', fontSize: 20 }}> Next</Text>
                            </TouchableOpacity>
                        </View>



                    </View>
                </View>
            </View >
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({})