import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import Button from '../../../component/Button'
import { ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { ToastAndroid } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

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
            ToastAndroid.showWithGravityAndOffset(
                'Vui lòng nhập số tiền',
                ToastAndroid.LONG,
                ToastAndroid.TOP,
                25,
                50
            );
        } else if (remark === '') {
            ToastAndroid.showWithGravityAndOffset(
                'Vui lòng điền đầy đủ thông tin',
                ToastAndroid.LONG,
                ToastAndroid.TOP,
                25,
                50
            );

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
                                <Ionicons name='chevron-back' color='black' size={RFPercentage(4)} />
                            </TouchableOpacity>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%'
                            }}>
                                <Text style={{
                                    fontSize: RFPercentage(3),
                                    color: 'black',
                                    fontWeight: 'bold',
                                    marginRight: '15%'
                                }}> Transfer Amount</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: RFPercentage(2.5) }}> Select Bank</Text>
                    </View>
                    <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                        <View style={styles.view}>

                            <View  >
                                <Image style={{
                                    width: 80,
                                    height: 30
                                }} source={logo} />

                            </View>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Text style={{ paddingLeft: 10, fontSize: RFPercentage(3), paddingBottom: 10 }}>Mogaji Olatubosun Ojo </Text>
                                <Text style={{ paddingLeft: 10, fontSize: RFPercentage(2) }}> 9033554931</Text>
                            </View>
                        </View>
                    </View>
                    <View>

                        <View style={{ marginTop: 50, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#000000', fontSize: RFPercentage(3) }}> Enter Amount</Text>

                        </View>
                        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                            <View style={styles.view}>
                                <TextInput style={{
                                    width: '100%',
                                    paddingHorizontal: 10,
                                    fontWeight: 'bold',
                                    fontSize: RFPercentage(3),

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
                            <Text style={{ color: '#000000', fontSize: RFPercentage(3) }}> Remark(Optional)</Text>

                        </View>
                        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                            <View style={styles.view}>
                                <TextInput style={{ paddingHorizontal: 10, fontSize: RFPercentage(3) }}
                                    placeholder='Transaction remark(Optional)'
                                    placeholderTextColor='grey'
                                    value={remark}
                                    onChangeText={(value) => steRemark(value)}
                                />
                            </View>
                            <View style={{ borderBottomWidth: 1, paddingVertical: 10 }}></View>
                            <View style={{ paddingVertical: 40, }} >
                                <TouchableOpacity style={{
                                    width: '100%',
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
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
    }
})