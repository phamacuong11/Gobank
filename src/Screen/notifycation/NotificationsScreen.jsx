import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'


export default function NotificationsScreen({ navigation }) {
    const sizes = 15
    return (
        <SafeAreaView>
            <StatusBar barStyle='dark-content' />
            <ScrollView>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, width: '100%' }}>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack()
                        }} >
                            <Ionicons style={{ paddingLeft: 10 }} name='arrow-back-outline' color='black' size={RFPercentage(4)} />
                        </TouchableOpacity>
                        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: RFPercentage(3), fontWeight: 'bold', marginRight: '20%' }}>Notifycation</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ paddingHorizontal: 10, }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                                <Text style={{ paddingVertical: 20, fontSize: 15 }}>2023-09-16 22:03</Text>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: '#C6E2FF', borderRadius: 10, padding: 10 }}>
                                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                    <Ionicons name='stop' size={sizes} color='#CFCFCF' />
                                    <Text style={styles.text}> Account Credited Successfully</Text>
                                </View>
                                <View style={styles.viewnotify}>
                                    <Text style={styles.text1}> Your GBG Account has been credited wid
                                        {'\n'}
                                        N25,000.00 from MOGAJI, OLATUNBONSUN
                                    </Text>
                                    <Text style={styles.viewposition}> View</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingHorizontal: 10, }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                                <Text style={{ paddingVertical: 20, fontSize: 15 }}>2023-09-16 22:03</Text>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: '#C6E2FF', borderRadius: 10, padding: 10 }}>
                                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                    <Ionicons name='stop' size={sizes} color='#CFCFCF' />
                                    <Text style={styles.text}> Account Credited Successfully</Text>
                                </View>
                                <View style={styles.viewnotify}>
                                    <Text style={styles.text1}> Your GBG Account has been credited wid
                                        {'\n'}
                                        N25,000.00 from MOGAJI, OLATUNBONSUN
                                    </Text>
                                    <Text style={styles.viewposition}> View</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingHorizontal: 10, }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                                <Text style={{ paddingVertical: 20, fontSize: 15 }}>2023-09-16 22:03</Text>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: '#C6E2FF', borderRadius: 10, padding: 10 }}>
                                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                    <Ionicons name='stop' size={sizes} color='#CFCFCF' />
                                    <Text style={styles.text}> Account Credited Successfully</Text>
                                </View>
                                <View style={styles.viewnotify}>
                                    <Text style={styles.text1}> Your GBG Account has been credited wid
                                        {'\n'}
                                        N25,000.00 from MOGAJI, OLATUNBONSUN
                                    </Text>
                                    <Text style={styles.viewposition}> View</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingHorizontal: 10, }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                                <Text style={{ paddingVertical: 20, fontSize: 15 }}>2023-09-16 22:03</Text>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: '#C6E2FF', borderRadius: 10, padding: 10 }}>
                                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                    <Ionicons name='stop' size={sizes} color='#CFCFCF' />
                                    <Text style={styles.text}> Account Credited Successfully</Text>
                                </View>
                                <View style={styles.viewnotify}>
                                    <Text style={styles.text1}> Your GBG Account has been credited wid
                                        {'\n'}
                                        N25,000.00 from MOGAJI, OLATUNBONSUN
                                    </Text>
                                    <Text style={styles.viewposition}> View</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingHorizontal: 10, }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                                <Text style={{ paddingVertical: 20, fontSize: 15 }}>2023-09-16 22:03</Text>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: '#C6E2FF', borderRadius: 10, padding: 10 }}>
                                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                    <Ionicons name='stop' size={sizes} color='#CFCFCF' />
                                    <Text style={styles.text}> Account Credited Successfully</Text>
                                </View>
                                <View style={styles.viewnotify}>
                                    <Text style={styles.text1}> Your GBG Account has been credited wid
                                        {'\n'}
                                        N25,000.00 from MOGAJI, OLATUNBONSUN
                                    </Text>
                                    <Text style={styles.viewposition}> View</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            paddingHorizontal: 10, paddingBottom: 30
                        }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                                <Text style={{ paddingVertical: 20, fontSize: 15 }}>2023-09-16 22:03</Text>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: '#C6E2FF', borderRadius: 10, padding: 10 }}>
                                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                    <Ionicons name='stop' size={sizes} color='#CFCFCF' />
                                    <Text style={styles.text}> Account Credited Successfully</Text>
                                </View>
                                <View style={styles.viewnotify}>
                                    <Text style={styles.text1}> Your GBG Account has been credited wid
                                        {'\n'}
                                        N25,000.00 from MOGAJI, OLATUNBONSUN
                                    </Text>
                                    <Text style={styles.viewposition}> View</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    viewposition: {
        backgroundColor: '#9966FF',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 20,
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
        position: 'absolute',
        top: 0,
        right: 5
    },
    viewnotify: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    text: {
        fontSize: RFPercentage(2.5)
    },
    text1: {
        fontSize: RFPercentage(1.5)

    }
})