import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export default function AddNewCardScreen({ navigation }) {

    const [holderName, setHolderName] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const ClickNextEnterYourPin = () => {
        navigation.navigate('PinAddNewCard')
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40, paddingHorizontal: 20 }}>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack()
                        }}>
                            <Ionicons name='arrow-back-outline' color='black' size={20} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: '27%' }}>Add New Card </Text>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 40 }}>
                        <Text style={{
                            fontSize: 13,
                            fontWeight: 'bold'
                        }}> Carholder Name</Text>
                        <View style={styles.viewTextinput1}>
                            <TextInput />
                        </View>
                    </View>
                    <View style={{
                        width: '100%',
                        paddingHorizontal: 20,
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{ paddingRight: 5, width: '50%' }}>
                            <Text style={{
                                fontSize: 13,
                                fontWeight: 'bold'
                            }}> Expiry Date</Text>
                            <View style={styles.viewTextinput2} >
                                <TextInput style={{ width: '80%', }} />
                                <TouchableOpacity>
                                    <Ionicons style={styles.icon} name='alert-circle-outline' color='grey' size={25} />

                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={{ paddingLeft: 5, width: '50%' }}>
                            <Text style={{
                                fontSize: 13,
                                fontWeight: 'bold'
                            }}> CVV</Text>
                            <View style={styles.viewTextinput3} >
                                <TextInput style={{ width: '80%', }} />
                                <TouchableOpacity>
                                    <Ionicons style={{}} name='alert-circle-outline' color='grey' size={25} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold'
                        }}> Card Number</Text>
                        <View style={styles.viewTextinput4}>
                            <TextInput />
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 10, marginTop: 30 }}>
                        <TouchableOpacity
                            style={styles.button} onPress={ClickNextEnterYourPin}>
                            <Text style={{ color: 'white', fontSize: 16 }}> Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    viewTextinput1: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        backgroundColor: '#DDDDDD',
        marginTop: 10
    },
    viewTextinput2: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        backgroundColor: '#DDDDDD',
        marginTop: 10,
        flexDirection: 'row',
    },
    viewTextinput3: {
        width: "100%",

        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        backgroundColor: '#DDDDDD',
        marginTop: 10,
        flexDirection: 'row',
    },
    viewTextinput4: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        backgroundColor: '#DDDDDD',
        marginTop: 10
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#0540F2',
        borderRadius: 30,
        padding: 10,
        backgroundColor: 'blue'
    },
    icon: {
        position: 'absolute',
        top: 0,
        left: 0
    }
})