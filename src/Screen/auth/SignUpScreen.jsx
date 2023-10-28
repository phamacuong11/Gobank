import { StyleSheet, Text, TextInput, TouchableOpacity, ToastAndroid, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView } from 'react-native';
import Button from '../../component/Button'
import { useRef } from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'


export default function SignUpScreen({ navigation }) {
    const [passWord, setPassWord] = useState(true)


    const [fullName, setFullName] = useState('')
    const [emailSignup, setEmailSignup] = useState('')
    const [passSignup, setPassSignup] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    const fullNamefocus = useRef(null)
    const emailfocus = useRef(null)
    const passwordfocus = useRef(null)
    const confirmfocus = useRef(null)
    const SubmitEmailClick = () => {
        emailfocus.current.focus();
    }
    const SubmitPassClick = () => {
        passwordfocus.current.focus()

    }
    const SubmitConfirmPassClick = () => {

        confirmfocus.current.focus()

    }





    const handleClickGoBack = () => {
        navigation.goBack()
    }
    const handleClickSingin = async () => {



        const saveFullName = await AsyncStorage.getItem('fullname')
        const saveEmail = await AsyncStorage.getItem('email')

        if (fullName === '' || emailSignup === '' || passSignup === '' || confirmPass === '') {
            ToastAndroid.showWithGravityAndOffset(
                'Vui lòng điền đầy đủ thông tin',
                ToastAndroid.LONG,
                ToastAndroid.TOP,
                25,
                50
            );

        } else if (passSignup != confirmPass) {
            ToastAndroid.show('Mật khẩu không giống nhau', ToastAndroid.SHORT);
        } else if (fullName === saveFullName || emailSignup === saveEmail) {
            ToastAndroid.show(' Ussername hoặc email đã tồn tại', ToastAndroid.SHORT);

        } else {
            await AsyncStorage.setItem('fullname', fullName)
            await AsyncStorage.setItem('email', emailSignup)
            await AsyncStorage.setItem('password', passSignup)
            // navigation.navigate('Login')
            console.log(fullName, emailSignup, passSignup)
            ToastAndroid.show('Đăng ký thành công', ToastAndroid.SHORT);

            navigation.navigate('Login')
        }
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <StatusBar barStyle='dark-content' backgroundColor="#ffffff" style='dark-content' />
            <ScrollView>
                <View style={{
                    flex: 1, backgroundColor: 'white'
                }}>

                    <View style={{ flex: 1, }}>

                        <TouchableOpacity style={{
                            paddingVertical: 20, marginLeft: 10
                        }}
                            onPress={handleClickGoBack}>
                            <Ionicons name='arrow-back-outline' size={32} color='#000000' />
                        </TouchableOpacity>
                        <View style={{
                            paddingVertical: 10, marginLeft: 15, paddingBottom: 20
                        }}>
                            <Text style={{ fontSize: 30 }}>Sign Up</Text>
                        </View>
                    </View>
                    <View >
                        <View style={styles.view}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                                <Ionicons name='person-outline' size={32} color='#0540F2' />
                                <Text style={{ fontSize: RFPercentage(2.5) }}> Full name</Text>
                            </View>
                            <View style={{ alignItems: 'center', paddingHorizontal: 10 }}>
                                <TextInput style={styles.textinput}
                                    value={fullName}
                                    ref={fullNamefocus}
                                    onSubmitEditing={SubmitEmailClick}
                                    onChangeText={(value) => setFullName(value)} />
                            </View>
                        </View>
                        <View style={styles.view}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                                <Ionicons name='mail-outline' size={32} color='#0540F2' />
                                <Text style={{ fontSize: RFPercentage(2.5) }}> Email</Text>
                            </View>
                            <View style={{ alignItems: 'center', paddingHorizontal: 10 }}>
                                <TextInput style={styles.textinput}
                                    ref={emailfocus}
                                    value={emailSignup}
                                    onSubmitEditing={SubmitPassClick}
                                    onChangeText={(value) => setEmailSignup(value)} />
                            </View>
                        </View>
                        <View style={styles.view}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                                <Ionicons name='lock-closed-outline' size={32} color='#0540F2' />
                                <Text style={{ fontSize: RFPercentage(2.5) }}> Password</Text>
                            </View>
                            <View style={{ alignItems: 'center', paddingHorizontal: 10 }}>
                                <TextInput style={styles.textinput}
                                    ref={passwordfocus}
                                    value={passSignup}
                                    onSubmitEditing={SubmitConfirmPassClick}
                                    onChangeText={(value) => setPassSignup(value)}
                                    secureTextEntry={passWord ? true : false} />
                                <TouchableOpacity style={{
                                    position: 'absolute', top: 6, right: 30
                                }}
                                    onPress={() => {
                                        setPassWord(!passWord)
                                    }}>
                                    {passWord ? <Ionicons name='eye-outline' size={32} color='black' /> : <Ionicons name='eye-off-outline' size={32} color='black' />}

                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.view}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                                <Ionicons name='lock-closed-outline' size={32} color='#0540F2' />
                                <Text style={{ fontSize: RFPercentage(2.5) }}> Confirm password</Text>
                            </View>
                            <View style={{ alignItems: 'center', paddingHorizontal: 10 }}>
                                <TextInput style={styles.textinput}
                                    ref={confirmfocus}
                                    value={confirmPass}
                                    onSubmitEditing={handleClickSingin}
                                    onChangeText={(value) => setConfirmPass(value)}
                                    secureTextEntry={passWord ? true : false} />
                                <TouchableOpacity style={{
                                    position: 'absolute', top: 6, right: 30
                                }}
                                    onPress={() => {
                                        setPassWord(!passWord)
                                    }}>
                                    {passWord ? <Ionicons name='eye-outline' size={32} color='black' /> : <Ionicons name='eye-off-outline' size={32} color='black' />}

                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewBottom}>
                        <TouchableOpacity onPress={handleClickSingin}>
                            <Button text='Sign Up' />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ fontSize: RFPercentage(2.5) }}> Have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                                <Text style={{ color: '#0540F2', textDecorationLine: 'underline', fontWeight: 'bold', fontSize: RFPercentage(2.5) }}> Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    textinput: {
        width: '100%',
        borderWidth: 1,
        height: 40,
        borderRadius: 20,
        marginTop: 4,
        paddingLeft: 15
    },
    view: {
        padding: 5,
    },
    viewBottom: {
        flex: 1,
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50
    }
})