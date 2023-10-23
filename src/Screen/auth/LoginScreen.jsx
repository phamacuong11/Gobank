import { StyleSheet, Text, View, Image, Alert, ToastAndroid, TouchableOpacity, StatusBar, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView } from 'react-native';
import InputText from '../../component/InputText';
import Button from '../../component/Button';


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
        <SafeAreaView style={{
            flex: 1, backgroundColor: 'white',
        }}>
            <ScrollView>
                <StatusBar barStyle='dark-content' backgroundColor="white" style='dark-content' />
                <View style={{
                    flex: 2,
                    alignItems: 'center',
                    backgroundColor: 'white',
                }}>
                    {/* iMAGE */}
                    <Image style={{
                        width: 200, height: 200, marginTop: 100,
                    }} source={require("../../assets/iconLogin.png")} ></Image>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                            <Ionicons name='mail-outline' size={32} color='#0540F2' />
                            <Text> Enter email</Text>
                        </View>

                        <TextInput style={styles.textinput}
                            value={email}
                            onChangeText={(value) => setEmail(value)}
                            inlineImageLeft='search_icon'
                            ref={textInputEmail}
                            onSubmitEditing={handleForcusPass}
                        />

                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                            <Ionicons name='lock-closed-outline' size={32} color='#0540F2' />
                            <Text> Enter pass</Text>
                        </View>
                        <TextInput style={styles.textinput}
                            value={pass}
                            onChangeText={(value) => setPass(value)}
                            secureTextEntry={!passWord ? false : true}
                            ref={textInputPass}
                            onSubmitEditing={handleClickHome} />

                        <TouchableOpacity style={{
                            position: 'absolute', top: 40, right: 10
                        }}
                            onPress={() => {
                                setPassWord(!passWord)
                            }}>
                            {passWord ? <Ionicons name='eye-outline' size={32} color='black' /> : <Ionicons name='eye-off-outline' size={32} color='black' />}

                        </TouchableOpacity>
                        <TouchableOpacity>

                            <Text style={{ marginTop: 10, marginLeft: 5, color: '#000000' }}> Forgot Password?</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flex: 1, backgroundColor: 'white', paddingVertical: 50, alignItems: 'center'
                    }}>
                        <TouchableOpacity onPress={handleClickHome}>
                            <Button text='Login' />
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={{
                            width: 300,
                            height: 40,
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 15,
                            backgroundColor: '#1769ff'
                        }}
                            onPress={handleClickHome}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}> LOGIN</Text>
                        </TouchableOpacity> */}

                        <TouchableOpacity onPress={handleCreateAccount}>
                            <Text style={{ marginTop: 15 }}> Create Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textinput: {
        width: 350,
        borderWidth: 1,
        height: 40,
        borderRadius: 15,
        marginTop: 4,
        paddingLeft: 15
    }
})