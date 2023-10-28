import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'


export default function SelectPackageScreen({ navigation }) {
    return (
        <SafeAreaView>
            <View>
                <ScrollView>
                    <View style={{ paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack()
                        }}>
                            <Ionicons name='chevron-back' color='black' size={RFPercentage(4)} />
                        </TouchableOpacity>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontSize: RFPercentage(3),
                                color: 'black',
                                fontWeight: 'bold', marginLeft: '30%'
                            }}> Select Package</Text>
                        </View>
                    </View>
                    <View style={{ padding: 20 }}>
                        <View style={{ padding: 5, backgroundColor: '#e3f0fa', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name='search' color='#0540F2' size={RFPercentage(4)} />
                            <TextInput
                                placeholder='Search here for package'
                                style={{ color: 'grey', paddingLeft: 5 }} />
                        </View>
                    </View>
                    <View>
                        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: RFPercentage(2.5) }}> DSTV Premium</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ paddingRight: 5, fontSize: RFPercentage(2.5) }}>N24,500</Text>
                                    <Ionicons name='ellipse-outline' color='#000000' size={15} />
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={{
                                    fontSize: RFPercentage(2.5), color: '#0540F2'
                                }}> DSTV Compact Plus</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ paddingRight: 5, fontSize: RFPercentage(2.5), color: 'blue' }}>N24,500</Text>
                                    <Ionicons name='ellipse-outline' color='blue' size={15} />
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: RFPercentage(2.5) }}> DSTV Compact</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ paddingRight: 5, fontSize: RFPercentage(2.5) }}>N24,500</Text>
                                    <Ionicons name='ellipse-outline' color='#000000' size={15} />
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: RFPercentage(2.5) }}> DSTV Comfram</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ paddingRight: 5, fontSize: RFPercentage(2.5) }}>N24,500</Text>
                                    <Ionicons name='ellipse-outline' color='#000000' size={15} />
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: RFPercentage(2.5) }}> DSTV Yanga</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ paddingRight: 5, fontSize: RFPercentage(2.5) }}>N24,500</Text>
                                    <Ionicons name='ellipse-outline' color='#000000' size={15} />
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: RFPercentage(2.5) }}> DSTV Padi</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ paddingRight: 5, fontSize: RFPercentage(2.5) }}>N24,500</Text>
                                    <Ionicons name='ellipse-outline' color='#000000' size={15} />
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: RFPercentage(2.5) }}> DSTV Premium Asia</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ paddingRight: 5, fontSize: RFPercentage(2.5) }}>N24,500</Text>
                                    <Ionicons name='ellipse-outline' color='#000000' size={15} />
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: RFPercentage(2.5) }}> DSTV Premium + French</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ paddingRight: 5, fontSize: RFPercentage(2.5) }}>N24,500</Text>
                                    <Ionicons name='ellipse-outline' color='#000000' size={15} />
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: RFPercentage(2.5) }}> DSTV CompactPlus + Xtra</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ paddingRight: 5, fontSize: RFPercentage(2.5) }}>N24,500</Text>
                                    <Ionicons name='ellipse-outline' color='#000000' size={15} />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})