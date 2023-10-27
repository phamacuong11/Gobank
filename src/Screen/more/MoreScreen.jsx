import { SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function MoreScreen({ navigation }) {
    return (
        <SafeAreaView>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 60, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <Ionicons name='arrow-back-outline' color='black' size={40} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', paddingLeft: 80 }}>More Service</Text>
                </View>
                <View style={{ marginTop: 40 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20 }}>
                        {/* Transfer */}
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.viewTransfer}
                                onPress={() => {
                                    navigation.navigate('Transfer')
                                }}>
                                <Ionicons name='swap-horizontal-outline' size={25} color='blue' fontWeight='bold' />
                            </TouchableOpacity>
                            <Text style={styles.text}> Transfer</Text>
                        </View>
                        {/* Airtime */}
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button}>
                                <Ionicons name='call-outline' size={25} color='blue' fontWeight='bold' />
                            </TouchableOpacity>
                            <Text style={styles.text}> Airtime</Text>
                        </View>
                        {/* Data */}
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button}>
                                <Ionicons name='wifi-outline' size={25} color='blue' fontWeight='bold' />
                            </TouchableOpacity>
                            <Text style={styles.text}> Data</Text>
                        </View>
                        {/* Bills */}
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                navigation.navigate('Bils')
                            }}>
                                <Ionicons name='clipboard-outline' size={25} color='blue' fontWeight='bold' />
                            </TouchableOpacity>
                            <Text style={styles.text}> Bills</Text>
                        </View>

                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', paddingVertical: 20 }}>
                        {/* Electricity */}
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button}>
                                <Ionicons name='swap-horizontal-outline' size={25} color='blue' fontWeight='bold' />
                            </TouchableOpacity>
                            <Text style={styles.text}> Electricity</Text>
                        </View>
                        {/* Assurance */}
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button}>
                                <Ionicons name='call-outline' size={25} color='blue' fontWeight='bold' />
                            </TouchableOpacity>
                            <Text style={styles.text}> Assurance</Text>
                        </View>
                        {/* Voucher*/}
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button}>
                                <Ionicons name='wifi-outline' size={25} color='blue' fontWeight='bold' />
                            </TouchableOpacity>
                            <Text style={styles.text}> Voucher</Text>
                        </View>

                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    viewTransfer: {
        backgroundColor: '#0540F21A',
        width: 50, height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#0540F21A',
        width: 50, height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewButton: {
        alignItems: 'center',
        paddingHorizontal: 20
    },
    text: {
        fontSize: 16,
        color: '#000000'
    }
})