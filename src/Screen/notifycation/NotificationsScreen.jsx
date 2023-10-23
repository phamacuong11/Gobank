import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function NotificationsScreen({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>

                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 60, paddingHorizontal: 20 }}>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack()
                        }} >
                            <Ionicons name='arrow-back-outline' color='black' size={40} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', paddingLeft: 80 }}>Notifycation</Text>
                    </View>

                    <View style={{ paddingHorizontal: 20, }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                            <Text style={{ paddingVertical: 20, fontSize: 18 }}>2023-09-16 22:03</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#C6E2FF', borderRadius: 10, padding: 10 }}>
                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                <Ionicons name='stop' size={30} color='#CFCFCF' />
                                <Text> Account Credited Successfully</Text>
                            </View>
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30 }}>
                                <Text style={{ fontSize: 12 }}> Your GBG Account has been credited wid
                                    {'\n'}
                                    N25,000.00 from MOGAJI, OLATUNBONSUN
                                </Text>
                                <Text style={{
                                    backgroundColor: '#9966FF',
                                    paddingHorizontal: 10,
                                    paddingVertical: 4,
                                    borderRadius: 20,
                                    color: '#ffffff',
                                    fontWeight: 'bold',
                                    position: 'absolute',
                                    top: 0,
                                    right: 10
                                }}> View</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: 20, }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                            <Text style={{ paddingVertical: 20, fontSize: 18 }}>2023-09-16 22:03</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#C6E2FF', borderRadius: 10, padding: 10 }}>
                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                <Ionicons name='stop' size={30} color='#CFCFCF' />
                                <Text> Account Credited Successfully</Text>
                            </View>
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30 }}>
                                <Text style={{ fontSize: 12 }}> Your GBG Account has been credited wid
                                    {'\n'}
                                    N25,000.00 from MOGAJI, OLATUNBONSUN
                                </Text>
                                <Text style={{
                                    backgroundColor: '#9966FF',
                                    paddingHorizontal: 10,
                                    paddingVertical: 4,
                                    borderRadius: 20,
                                    color: '#ffffff',
                                    fontWeight: 'bold',
                                    position: 'absolute',
                                    top: 0,
                                    right: 10
                                }}> View</Text>
                            </View>
                        </TouchableOpacity>
                    </View><View style={{ paddingHorizontal: 20, }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                            <Text style={{ paddingVertical: 20, fontSize: 18 }}>2023-09-16 22:03</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#C6E2FF', borderRadius: 10, padding: 10 }}>
                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                <Ionicons name='stop' size={30} color='#CFCFCF' />
                                <Text> Account Credited Successfully</Text>
                            </View>
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30 }}>
                                <Text style={{ fontSize: 12 }}> Your GBG Account has been credited wid
                                    {'\n'}
                                    N25,000.00 from MOGAJI, OLATUNBONSUN
                                </Text>
                                <Text style={{
                                    backgroundColor: '#9966FF',
                                    paddingHorizontal: 10,
                                    paddingVertical: 4,
                                    borderRadius: 20,
                                    color: '#ffffff',
                                    fontWeight: 'bold',
                                    position: 'absolute',
                                    top: 0,
                                    right: 10
                                }}> View</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: 20, }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                            <Text style={{ paddingVertical: 20, fontSize: 18 }}>2023-09-16 22:03</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#C6E2FF', borderRadius: 10, padding: 10 }}>
                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                <Ionicons name='stop' size={30} color='#CFCFCF' />
                                <Text> Account Credited Successfully</Text>
                            </View>
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30 }}>
                                <Text style={{ fontSize: 12 }}> Your GBG Account has been credited wid
                                    {'\n'}
                                    N25,000.00 from MOGAJI, OLATUNBONSUN
                                </Text>
                                <Text style={{
                                    backgroundColor: '#9966FF',
                                    paddingHorizontal: 10,
                                    paddingVertical: 4,
                                    borderRadius: 20,
                                    color: '#ffffff',
                                    fontWeight: 'bold',
                                    position: 'absolute',
                                    top: 0,
                                    right: 10
                                }}> View</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: 20, }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                            <Text style={{ paddingVertical: 20, fontSize: 18 }}>2023-09-16 22:03</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#C6E2FF', borderRadius: 10, padding: 10 }}>
                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                <Ionicons name='stop' size={30} color='#CFCFCF' />
                                <Text> Account Credited Successfully</Text>
                            </View>
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30 }}>
                                <Text style={{ fontSize: 12 }}> Your GBG Account has been credited wid
                                    {'\n'}
                                    N25,000.00 from MOGAJI, OLATUNBONSUN
                                </Text>
                                <Text style={{
                                    backgroundColor: '#9966FF',
                                    paddingHorizontal: 10,
                                    paddingVertical: 4,
                                    borderRadius: 20,
                                    color: '#ffffff',
                                    fontWeight: 'bold',
                                    position: 'absolute',
                                    top: 0,
                                    right: 10
                                }}> View</Text>
                            </View>
                        </TouchableOpacity>
                    </View><View style={{ paddingHorizontal: 20, }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                            <Text style={{ paddingVertical: 20, fontSize: 18 }}>2023-09-16 22:03</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#C6E2FF', borderRadius: 10, padding: 10 }}>
                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                <Ionicons name='stop' size={30} color='#CFCFCF' />
                                <Text> Account Credited Successfully</Text>
                            </View>
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30 }}>
                                <Text style={{ fontSize: 12 }}> Your GBG Account has been credited wid
                                    {'\n'}
                                    N25,000.00 from MOGAJI, OLATUNBONSUN
                                </Text>
                                <Text style={{
                                    backgroundColor: '#9966FF',
                                    paddingHorizontal: 10,
                                    paddingVertical: 4,
                                    borderRadius: 20,
                                    color: '#ffffff',
                                    fontWeight: 'bold',
                                    position: 'absolute',
                                    top: 0,
                                    right: 10
                                }}> View</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({})