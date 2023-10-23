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
                        <View style={{ alignItems: 'center', paddingHorizontal: 20 }}>
                            <TouchableOpacity style={{
                                backgroundColor: '#0540F21A',
                                width: 50, height: 50,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} onPress={() => {
                                navigation.navigate('Transfer')
                            }}>
                                <Ionicons name='swap-horizontal-outline' size={25} color='blue' fontWeight='bold' />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 16, color: '#000000' }}> Transfer</Text>
                        </View>
                        {/* Airtime */}
                        <View style={{ alignItems: 'center', paddingHorizontal: 20 }}>
                            <TouchableOpacity style={{
                                backgroundColor: '#0540F21A',
                                width: 50, height: 50,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Ionicons name='call-outline' size={25} color='blue' fontWeight='bold' />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 16, color: '#000000' }}> Airtime</Text>
                        </View>
                        {/* Data */}
                        <View style={{ alignItems: 'center', paddingHorizontal: 20 }}>
                            <TouchableOpacity style={{
                                backgroundColor: '#0540F21A',
                                width: 50, height: 50,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Ionicons name='wifi-outline' size={25} color='blue' fontWeight='bold' />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 16, color: '#000000' }}> Data</Text>
                        </View>
                        {/* Bills */}
                        <View style={{ alignItems: 'center', paddingHorizontal: 20 }}>
                            <TouchableOpacity style={{
                                backgroundColor: '#0540F21A',
                                width: 50, height: 50,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} onPress={() => {
                                navigation.navigate('Bils')
                            }}>
                                <Ionicons name='clipboard-outline' size={25} color='blue' fontWeight='bold' />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 16, color: '#000000' }}> Bills</Text>
                        </View>

                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', paddingVertical: 20 }}>
                        {/* Electricity */}
                        <View style={{ alignItems: 'center', paddingHorizontal: 20 }}>
                            <TouchableOpacity style={{
                                backgroundColor: '#0540F21A',
                                width: 50, height: 50,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Ionicons name='swap-horizontal-outline' size={25} color='blue' fontWeight='bold' />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 16, color: '#000000' }}> Electricity</Text>
                        </View>
                        {/* Assurance */}
                        <View style={{ alignItems: 'center', paddingHorizontal: 20 }}>
                            <TouchableOpacity style={{
                                backgroundColor: '#0540F21A',
                                width: 50, height: 50,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Ionicons name='call-outline' size={25} color='blue' fontWeight='bold' />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 16, color: '#000000' }}> Assurance</Text>
                        </View>
                        {/* Voucher*/}
                        <View style={{ alignItems: 'center', paddingHorizontal: 20 }}>
                            <TouchableOpacity style={{
                                backgroundColor: '#0540F21A',
                                width: 50, height: 50,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Ionicons name='wifi-outline' size={25} color='blue' fontWeight='bold' />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 16, color: '#000000' }}> Voucher</Text>
                        </View>

                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({})