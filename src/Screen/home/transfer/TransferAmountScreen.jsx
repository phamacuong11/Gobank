import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import Button from '../../../component/Button'
import { ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function TransferAmountScreen({ navigation, route }) {

    const [ilogo, setLogo] = useState('')
    const [remark, steRemark] = useState('')
    const [enterAmount, setEnterAmount] = useState('')
    const handleAmountChange = (text) => {
        // Loại bỏ dấu phẩy và dấu chấm cũ
        const formattedText = text.replace(/[,|.]/g, '');

        // Chèn dấu chấm ngăn cách hàng nghìn
        const formattedAmount = formattedText.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        setEnterAmount(formattedAmount, enterAmount);
    };

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
            <ScrollView>
                <StatusBar barStyle='dark-content' />
                <View>
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
                                }}> Transfer Amount</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 20 }}> Select Bank</Text>
                    </View>
                    <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <View style={styles.view}>

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
                            <View style={styles.view}>
                                <TextInput style={{
                                    paddingHorizontal: 10,
                                    fontWeight: 'bold',
                                    fontSize: 20,

                                }}
                                    value={enterAmount}
                                    onChangeText={handleAmountChange}
                                    placeholder='10.000'
                                    keyboardType='numeric'

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
                            <View style={styles.view}>
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
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }} onPress={hanldeClickConfirm} >
                                    <Button text='Next' />

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
    view: {
        backgroundColor: '#e3f0fa',
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    }
})