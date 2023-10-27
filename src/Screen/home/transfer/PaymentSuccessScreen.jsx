import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'

export default function PaymentSuccessScreen({ navigation, route }) {

    const { enterAmount, balance } = route.params.account
    const Paymentsuccess = () => {
        navigation.navigate('Home', { account: { enterAmount, balance } })

    }

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 3000)
    }, [])
    return (
        <SafeAreaView>
            <View style={{ justifyContent: 'center', alignContent: 'center', marginTop: 100 }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <View style={styles.viewImage}>
                        <Image style={{ width: 100, height: 100 }} source={require('../../../../assets/correct.png')} />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={styles.enterAmount}>N{enterAmount}</Text>
                    <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20 }}>Payment Successful</Text>
                    <Text style={{ paddingVertical: 10 }}> Transaction Number: - #26377628</Text>
                </View>
                <View>
                    <View style={{ marginTop: 50, paddingHorizontal: 20 }}>
                        <TouchableOpacity style={styles.buttonDone} onPress={Paymentsuccess}>
                            <Text style={{ fontSize: 20 }}> Done</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                        <TouchableOpacity style={styles.buttonDownload} >
                            <Text style={{ fontSize: 20, color: 'white' }}> Download Receipt</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        backgroundColor: '#00FF66',
        borderRadius: 100
    },
    enterAmount: {
        color: '#000000',
        fontSize: 35,
        fontWeight: 'bold',
        paddingVertical: 10
    },
    buttonDone: {
        borderColor: 'blue',
        borderWidth: 2,
        padding: 8,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonDownload: {
        backgroundColor: 'blue',
        padding: 8,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'

    }
})