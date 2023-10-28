import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize'

export default function ConfirmDetailsScreen({ navigation, route }) {

    const handleClickEnterYourCode = () => {
        navigation.navigate('EnterYoursCode', { account: { bankName, logo, balance, enterAmount } });
    }
    const { bankName, logo, enterAmount, remark, accountNumber, balance } = route.params.account

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
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
                                fontWeight: 'bold', marginLeft: '28%'
                            }}> Comfirm Details</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: RFPercentage(3) }}> Select Bank</Text>
                </View>
                <View style={{ marginTop: 20, paddingHorizontal: 5 }}>
                    <View style={styles.viewSelectBank}>

                        <View style={{

                            flexDirection: 'row',
                        }} >
                            <Image style={{
                                width: 80,
                                height: 30
                            }} source={logo} />

                        </View>
                        <View style={{ paddingHorizontal: 10 }}>

                            <Text style={{ paddingLeft: 10, fontSize: RFPercentage(3), paddingBottom: 10 }}>Mogaji Olatubosun Ojo </Text>
                            <Text style={{ paddingLeft: 10, fontSize: RFPercentage(2.3) }}> {accountNumber}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 50 }}>
                    <View style={{
                        backgroundColor: '#e3f0fa',
                        height: '80%',
                        borderRadius: 20
                    }}>
                        <TouchableOpacity style={{ padding: 10 }}
                            onPress={() => { navigation.push('Home') }}>
                            <Ionicons name='close' color='grey' size={RFPercentage(4)} />
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: RFPercentage(4), fontWeight: 'bold' }}>{enterAmount}</Text>
                        </View>
                        <View style={styles.viewmain}>
                            <View>
                                <Text style={styles.textSize}> Bank</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{
                                    width: 60,
                                    height: 20
                                }}
                                    source={logo} />
                                <Text style={styles.text}> {bankName}</Text>
                            </View>
                        </View>
                        <View style={styles.viewmain}>
                            <View>
                                <Text style={styles.textSize}> Account Number</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.text}> {accountNumber}</Text>
                            </View>
                        </View>
                        <View style={styles.viewmain}>
                            <View>
                                <Text style={styles.textSize}> Name</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.text}> MogaJi Olatubosun Oji</Text>
                            </View>
                        </View>
                        <View style={styles.viewmain}>
                            <View>
                                <Text style={styles.textSize}> Amount</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.text}> {accountNumber}</Text>
                            </View>
                        </View>
                        <View style={styles.viewmain}>
                            <View>
                                <Text style={styles.textSize}> Transaction Fee</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.text}> 10.000</Text>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
                            <View style={styles.viewBalance}>
                                <Ionicons name='card-outline' size={RFPercentage(6)} color='blue' />
                                <Text style={{ fontSize: RFPercentage(4) }}> Balance({balance})</Text>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, paddingVertical: 30 }} >
                            <TouchableOpacity style={styles.buttonPay}
                                onPress={handleClickEnterYourCode}>
                                <Text style={{ color: 'white', fontSize: RFPercentage(4) }}> Pay</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewSelectBank: {
        backgroundColor: '#e3f0fa',
        borderRadius: 90,
        paddingHorizontal: 20,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewmain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
        paddingTop: 10
    },
    text: {
        fontSize: RFPercentage(2.5),
        fontWeight: 'bold'
    },
    buttonPay: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSize: {
        fontSize: RFPercentage(2.5)

    },
    viewBalance: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'hsl(188, 78%, 85%)',
        padding: 10,
        borderRadius: 10
    }
})