import { Image, SafeAreaView, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function DataScreen({ navigation }) {
    const [showBalance, setShowBalance] = useState(true)
    const [balance] = useState('N155,600.24')

    const Selectbank = () => {
        navigation.navigate('SendtoBank1', { account: { balance } })
    }
    return (
        <SafeAreaView>
            <View style={{ flex: 1, }}>
                <StatusBar
                    barStyle='light-content'
                />
                <View style={{ flexDirection: "row", justifyContent: 'space-between', position: 'absolute', }}>
                    <View style={styles.view1}>
                        <View style={styles.view2}>
                            <View style={styles.view3}>

                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', marginTop: -40 }}>
                            <TouchableOpacity onPress={() => {
                                navigation.goBack()
                            }}>
                                <Ionicons name='chevron-back' color='white' size={30} />
                            </TouchableOpacity>
                            <Text style={styles.textData}> Data</Text>
                        </View>


                        <View style={{ paddingHorizontal: 20 }}>

                            <View style={{ paddingHorizontal: 5, flexDirection: 'row', marginTop: 40 }}>
                                <Image
                                    style={{
                                        width: 30,
                                        height: 30,
                                    }}
                                    source={require('../../../assets/VN.png')} />
                                <Ionicons name='chevron-down-outline' size={30} color='white' />
                            </View>
                            <Text style={{ color: 'white' }}> Current Balance</Text>
                            <View style={styles.view4}>
                                {showBalance ? <Text
                                    style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }} >{balance}</Text> : <Text
                                        style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }} >***********</Text>}

                                <TouchableOpacity onPress={() => {
                                    setShowBalance(!showBalance)
                                }}>
                                    {showBalance ? <Ionicons name='eye-outline' color='white' size={30} /> : <Ionicons name='eye-off-outline' color='white' size={30} />}
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginTop: 50 }}>
                                <Text style={{ color: 'black', fontSize: 17 }}> Choose a way to send money</Text>
                            </View>
                            <View>
                                <View style={{ paddingHorizontal: 5, paddingVertical: 20, }}>
                                    <TouchableOpacity style={styles.button} >
                                        <View>
                                            <Ionicons name='reload-outline' color='#0540F2' size={30} fontWeight='bold' />
                                        </View>
                                        <View style={{ justifyContent: 'center', }}>
                                            <Text style={styles.textSendto}>  Send to GBG</Text>
                                            <Text style={{ marginLeft: 10, color: 'black' }}> Send money to GBG account </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ paddingHorizontal: 5, paddingVertical: 5, }}>
                                    <TouchableOpacity style={styles.button}>
                                        <View>
                                            <Ionicons name='reload-outline' color='#0540F2' size={30} fontWeight='bold' />
                                        </View>
                                        <View style={{ justifyContent: 'center', }}>
                                            <Text style={styles.textSendto}>  Send to Go Other Bank</Text>
                                            <Text style={{ marginLeft: 10, color: 'black' }}> Send money to Other banks </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    view1: {
        width: '100%',
        height: 250,
        backgroundColor: '#10142E',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    view2: {
        width: 160,
        height: 90,
        backgroundColor: '#000055',
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,
        marignRight: 20

    },
    view3: {
        width: 160,
        height: 90,
        backgroundColor: '#000099',
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,
        marginLeft: 250

    },
    textData: {
        fontSize: 20,
        color: 'white',
        marginLeft: 130
    },
    view4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    button: {
        backgroundColor: '#e3f0fa',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        paddingHorizontal: 10
    },
    textSendto: {
        fontSize: 20,
        color: '#0540F2',
        fontWeight: 'bold'
    }
})