import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function SelectPackageScreen({ navigation }) {
    return (
        <SafeAreaView>
            <View>
                <View style={{ paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
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
                    }}> Select Package</Text>
                </View>
                <View style={{ padding: 20 }}>
                    <View style={{ padding: 5, backgroundColor: '#e3f0fa', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='search' color='#0540F2' size={20} />
                        <TextInput
                            placeholder='Search here for package'
                            style={{ color: 'grey', paddingLeft: 5 }} />
                    </View>
                </View>
                <View>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16 }}> DSTV Premium</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ paddingRight: 5, fontSize: 16 }}>N24,500</Text>
                                <Ionicons name='ellipse-outline' color='#000000' size={15} />
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Text style={{
                                fontSize: 16, color: '#0540F2'
                            }}> DSTV Compact Plus</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ paddingRight: 5, fontSize: 16, color: 'blue' }}>N24,500</Text>
                                <Ionicons name='ellipse-outline' color='blue' size={15} />
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16 }}> DSTV Compact</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ paddingRight: 5, fontSize: 16 }}>N24,500</Text>
                                <Ionicons name='ellipse-outline' color='#000000' size={15} />
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16 }}> DSTV Comfram</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ paddingRight: 5, fontSize: 16 }}>N24,500</Text>
                                <Ionicons name='ellipse-outline' color='#000000' size={15} />
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16 }}> DSTV Yanga</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ paddingRight: 5, fontSize: 16 }}>N24,500</Text>
                                <Ionicons name='ellipse-outline' color='#000000' size={15} />
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16 }}> DSTV Padi</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ paddingRight: 5, fontSize: 16 }}>N24,500</Text>
                                <Ionicons name='ellipse-outline' color='#000000' size={15} />
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16 }}> DSTV Premium Asia</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ paddingRight: 5, fontSize: 16 }}>N24,500</Text>
                                <Ionicons name='ellipse-outline' color='#000000' size={15} />
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16 }}> DSTV Premium + French</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ paddingRight: 5, fontSize: 16 }}>N24,500</Text>
                                <Ionicons name='ellipse-outline' color='#000000' size={15} />
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16 }}> DSTV CompactPlus + Xtra</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ paddingRight: 5, fontSize: 16 }}>N24,500</Text>
                                <Ionicons name='ellipse-outline' color='#000000' size={15} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})