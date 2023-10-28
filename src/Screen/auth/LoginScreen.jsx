import { StyleSheet, Text, View, Image, Alert, ToastAndroid, TouchableOpacity, StatusBar, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView } from 'react-native';
import InputText from '../../component/InputText';
import Button from '../../component/Button';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'



export default function LoginScreen({ navigation, route }) {


    const textInputEmail = useRef(null)
    const textInputPass = useRef(null)
    const handleForcusPass = () => {
        if (textInputPass.current) {
            textInputPass.current.focus();
        } else {
            console.error(Error);

        }
    }

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')



    const handleCreateAccount = () => {
        navigation.navigate('Signup')

        // navigation.navigate('Bottom')
    }
    const handleClickHome = async () => {

        const fullname = await AsyncStorage.getItem('fullname')
        const emailLogin = await AsyncStorage.getItem('email')
        const passWordLogin = await AsyncStorage.getItem('password')
        if (email === '' || pass === '') {
            ToastAndroid.showWithGravityAndOffset(
                'Vui lòng điền đầy đủ thông tin',
                ToastAndroid.LONG,
                ToastAndroid.TOP,
                25,
                50
            );
        } else if (email === emailLogin && pass === passWordLogin) {
            ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
            navigation.navigate('Bottom', { fullname })
        } else {
            ToastAndroid.show('Vui lòng nhập đúng thông tin', ToastAndroid.SHORT);
        }

    }

    const [passWord, setPassWord] = useState(true)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} >
            <ScrollView>
                <StatusBar barStyle='dark-content' backgroundColor="white" style='dark-content' />
                <View style={{
                    alignItems: 'center',
                    backgroundColor: 'white',
                }}>
                    {/* iMAGE */}
                    <View style={{ height: 300, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{
                            width: 200, height: 200,
                        }} source={require("../../../assets/iconLogin.png")} ></Image>
                    </View>

                    <View style={{ flex: 1, width: '100%' }}>
                        <View style={styles.view}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                                <Ionicons name='mail-outline' size={32} color='#0540F2' />
                                <Text style={{ fontSize: RFPercentage(2.5) }}> Email</Text>
                            </View>
                            <View style={{ alignItems: 'center', paddingHorizontal: 10 }}>
                                <TextInput style={styles.textinput}
                                    value={email}
                                    ref={textInputEmail}
                                    onSubmitEditing={handleForcusPass}
                                    onChangeText={(value) => setEmail(value)} />
                            </View>
                        </View>
                        <View style={styles.view}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                                <Ionicons name='lock-closed-outline' size={32} color='#0540F2' />
                                <Text style={{ fontSize: RFPercentage(2.5) }}> Password</Text>
                            </View>
                            <View style={{ alignItems: 'center', paddingHorizontal: 10, }}>
                                <TextInput style={styles.textinput}
                                    ref={textInputPass}
                                    value={pass}
                                    onChangeText={(value) => setPass(value)}
                                    onSubmitEditing={handleClickHome}
                                    secureTextEntry={passWord ? true : false} />
                            </View>
                            <TouchableOpacity style={{
                                position: 'absolute', top: 45, right: 20
                            }}
                                onPress={() => {
                                    setPassWord(!passWord)
                                }}>
                                {passWord ? <Ionicons name='eye-outline' size={32} color='black' /> : <Ionicons name='eye-off-outline' size={32} color='black' />}

                            </TouchableOpacity>
                            <TouchableOpacity>

                                <Text style={{ marginTop: 10, marginLeft: 5, color: '#000000', fontSize: RFPercentage(2.5) }}> Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                        {/* Button Login */}
                        <View style={{
                            flex: 1, paddingVertical: 50, alignItems: 'center', paddingHorizontal: 20
                        }}>
                            <TouchableOpacity style={{
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} onPress={handleClickHome}>
                                <Button text='Login' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleCreateAccount}>
                                <Text style={{ marginTop: 15, fontSize: RFPercentage(2.5) }}> Create Account</Text>
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
    }
})