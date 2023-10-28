import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'




export default function WelcomeScreen({ navigation }) {
    const inconWelcome = require('../../../assets/iconWelcom.png')
    const handleClickSingup = () => {
        navigation.push('Signup')
    }
    const handleClickLogin = () => {
        navigation.push('Login')
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar barStyle='dark-content' backgroundColor="white" style='dark-content' />
            {/* Header */}
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    flex: 3,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white'
                }}>
                    {/* iMAGE */}
                    <Image style={{
                        width: 200, height: 200, marginTop: 50,
                    }} source={inconWelcome} ></Image>
                    <Text style={{
                        fontSize: RFPercentage(5), color: 'black', fontWeight: 'bold', paddingVertical: 10
                    }}> WELCOME</Text>
                    <Text style={{
                        paddingHorizontal: 30,
                        color: '#000000',
                        paddingBottom: 10,
                        fontSize: RFPercentage(2)
                    }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, ullam accusantium.</Text>
                </View>

                <View style={styles.viewmain}>
                    <View style={{ width: '50%', paddingLeft: 5 }}>
                        <TouchableOpacity style={styles.buttonLogin}
                            onPress={handleClickLogin}>
                            <Text style={{ color: '#0540F2', fontWeight: 'bold', fontSize: RFPercentage(2.5) }}> LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '50%', paddingLeft: 5 }}>
                        <TouchableOpacity style={styles.buttonSignup}
                            onPress={handleClickSingup}>
                            <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: RFPercentage(2.5) }}> SIGNUP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    viewmain: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: 'white'

    },
    buttonLogin: {
        height: 40,
        borderWidth: 3,
        borderColor: '#0540F2',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSignup: {
        height: 40,
        backgroundColor: '#0540F2',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})