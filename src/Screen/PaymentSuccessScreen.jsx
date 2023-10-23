import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'

export default function PaymentSuccessScreen({ navigation, route }) {

    const { enterAmount, balance } = route.params.account
    const Paymentsuccess = () => {
        navigation.navigate('Home', { account: { enterAmount, balance } })
    }

    return (
        <SafeAreaView>
            <View style={{ justifyContent: 'center', alignContent: 'center', marginTop: 100 }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 150,
                        height: 150,
                        backgroundColor: '#00FF66',
                        borderRadius: 100
                    }}>
                        <Image style={{ width: 100, height: 100 }} source={require('../assets/correct.png')} />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ color: '#000000', fontSize: 35, fontWeight: 'bold', paddingVertical: 10 }}>N{enterAmount}</Text>
                    <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20 }}>Payment Successful</Text>
                    <Text style={{ paddingVertical: 10 }}> Transaction Number: - #26377628</Text>
                </View>
                <View style={{ marginTop: 250, paddingHorizontal: 20 }}>
                    <TouchableOpacity style={{
                        borderColor: 'blue',
                        borderWidth: 2,
                        padding: 8,
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center'

                    }} onPress={Paymentsuccess}>
                        <Text style={{ fontSize: 20 }}> Done</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                    <TouchableOpacity style={{
                        backgroundColor: 'blue',
                        padding: 8,
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center'

                    }} >
                        <Text style={{ fontSize: 20, color: 'white' }}> Download Receipt</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})