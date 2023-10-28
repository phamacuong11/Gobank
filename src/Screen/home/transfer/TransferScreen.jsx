import { Image, SafeAreaView, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'


export default function TransferScreen({ navigation }) {
    const [showBalance, setShowBalance] = useState(true)
    const [balance] = useState('N155,600.24')

    const Selectbank = () => {
        navigation.navigate('SendtoBank1', { account: { balance } })
    }
    return (
        <SafeAreaView>
            <View >
                <StatusBar barStyle='light-content' />
                <View style={{ flexDirection: "row", justifyContent: 'space-between', position: 'absolute', }}>
                    <View style={styles.view1}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <View style={styles.view2}>
                            </View>
                            <View style={styles.view3}>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 40
            }}>
                <View>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <Ionicons name='chevron-back' color='white' size={RFPercentage(3)} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        fontSize: RFPercentage(3),

                        color: 'white',
                        marginRight: '15%'

                    }}> Tranfer</Text>
                </View>
            </View>


            <View style={{ paddingHorizontal: 20, justifyContent: 'center', marginTop: 30 }}>

                <View style={{ paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{
                            width: 30,
                            height: 30,
                        }}
                        source={require('../../../../assets/VN.png')} />
                    <Ionicons name='chevron-down-outline' size={30} color='white' />
                </View>
                <Text style={{ color: 'white' }}> Current Balance</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10
                }}>
                    {showBalance ? <Text
                        style={styles.textbalance} >{balance}</Text> : <Text
                            style={styles.textbalance} >***********</Text>}

                    <TouchableOpacity onPress={() => {
                        setShowBalance(!showBalance)
                    }}>
                        {showBalance ? <Ionicons name='eye-outline' color='white' size={RFPercentage(4)} />
                            :
                            <Ionicons name='eye-off-outline' color='white' size={30} />}
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginTop: 80, paddingHorizontal: 10 }}>
                <View style={{}}>
                    <Text style={{ color: 'black', fontSize: RFPercentage(2.5), }}> Choose a way to send money</Text>
                </View>
                <View>
                    <View style={{ paddingHorizontal: 5, paddingVertical: 20, }}>
                        <TouchableOpacity style={styles.button} onPress={Selectbank}>
                            <View>
                                <Ionicons name='reload-outline' color='blue' size={30} fontWeight='bold' />
                            </View>
                            <View style={{ justifyContent: 'center', }}>
                                <Text style={styles.text}>  Send to Go Bank</Text>
                                <Text style={{
                                    marginLeft: 10, color: 'black',
                                    fontSize: RFPercentage(2),
                                }}> Send money to GBG account </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: 5, paddingVertical: 5, }}>
                        <TouchableOpacity style={styles.button}>
                            <View>
                                <Ionicons name='reload-outline' color='blue' size={30} fontWeight='bold' />
                            </View>
                            <View style={{ justifyContent: 'center', }}>
                                <Text style={styles.text}>  Send to Go Other Bank</Text>
                                <Text style={{
                                    marginLeft: 10, color: 'black',
                                    fontSize: RFPercentage(2),
                                }}> Send money to Other banks </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#e3f0fa',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        paddingHorizontal: 10
    },
    text: {
        fontSize: RFPercentage(3),
        color: 'blue',
        fontWeight: 'bold'
    },
    textbalance: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    view1: {
        width: '100%',
        height: 220,
        backgroundColor: '#10142E',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    view2: {
        width: '40%',
        height: 70,
        backgroundColor: '#000055',
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,
    },
    view3: {
        width: '40%',
        height: 70,
        backgroundColor: '#000099',
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,
    }
})