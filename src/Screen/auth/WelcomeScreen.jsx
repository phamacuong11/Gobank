import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'



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
                    flex: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white'
                }}>
                    {/* iMAGE */}
                    <Image style={{
                        width: 200, height: 200, marginTop: 100,
                    }} source={inconWelcome} ></Image>
                    <Text style={{
                        fontSize: 30, color: 'black', fontWeight: 'bold', paddingVertical: 30
                    }}> WELCOME</Text>
                    <Text style={{ paddingHorizontal: 30, color: '#000000' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, ullam accusantium.</Text>
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 60,
                    paddingHorizontal: 20

                }}>
                    <View style={{ width: '50%', paddingLeft: 5 }}>
                        <TouchableOpacity style={styles.buttonLogin}
                            onPress={handleClickLogin}>
                            <Text style={{ color: '#0540F2', fontWeight: 'bold' }}> LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '50%', paddingLeft: 5 }}>
                        <TouchableOpacity style={styles.buttonSignup}
                            onPress={handleClickSingup}>
                            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}> SIGNUP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
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