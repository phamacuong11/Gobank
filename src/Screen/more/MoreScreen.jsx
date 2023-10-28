import { SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export default function MoreScreen({ navigation }) {
    return (
        <SafeAreaView>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 60, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <Ionicons name='arrow-back-outline' color='black' size={RFPercentage(4)} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: RFPercentage(3), fontWeight: 'bold', marginLeft: '25%' }}>More Service</Text>
                </View>
                <View style={{ width: '100%', paddingHorizontal: 20 }}>
                    <View style={{ marginTop: 40, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20 }}>

                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={styles.button}
                                    onPress={() => { navigation.navigate('Transfer') }}>
                                    <Ionicons name='swap-horizontal-outline' size={20} color='blue' fontWeight='bold' />
                                </TouchableOpacity>
                                <Text style={styles.text}> Transfer</Text>
                                <TouchableOpacity style={styles.button}>
                                    <Ionicons name='swap-horizontal-outline' size={20} color='blue' fontWeight='bold' />
                                </TouchableOpacity>
                                <Text style={styles.text}> Electricity</Text>

                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={styles.button}>
                                    <Ionicons name='call-outline' size={20} color='blue' fontWeight='bold' />
                                </TouchableOpacity>
                                <Text style={styles.text}> Airtime</Text>
                                <TouchableOpacity style={styles.button}>
                                    <Ionicons name='call-outline' size={20} color='blue' fontWeight='bold' />
                                </TouchableOpacity>
                                <Text style={styles.text}> Assurance</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={styles.button}>
                                    <Ionicons name='wifi-outline' size={20} color='blue' fontWeight='bold' />
                                </TouchableOpacity>
                                <Text style={styles.text}> Data</Text>
                                <TouchableOpacity style={styles.button}>
                                    <Ionicons name='wifi-outline' size={20} color='blue' fontWeight='bold' />
                                </TouchableOpacity>
                                <Text style={styles.text}> Voucher</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Bils') }}>
                                    <Ionicons name='clipboard-outline' size={20} color='blue' fontWeight='bold' />
                                </TouchableOpacity>
                                <Text style={styles.text}> Bills</Text>

                            </View>


                        </View>
                    </View>
                </View>
            </View >
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    viewTransfer: {
        backgroundColor: '#0540F21A',
        width: 40, height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#0540F21A',
        width: 40, height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center', marginVertical: 10
    },
    viewButton: {
        alignItems: 'center',
        paddingHorizontal: 5

    },
    text: {
        fontSize: RFPercentage(2),
        color: '#000000',

    }
})