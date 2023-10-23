import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'react-native'

export default function MyProfile({ navigation }) {
    return (
        <SafeAreaView>
            <View>
                <View style={{
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    alignItems: 'center', marginTop: 50, justifyContent: 'space-between'
                }}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <Ionicons name='chevron-back' color='black' size={30} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 22,
                        color: 'black',
                        fontWeight: 'bold'
                    }}> My Profile</Text>
                    <TouchableOpacity>
                        <Text style={{
                            fontSize: 18,
                            color: '#4898fa',
                        }}> Edit</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{
                        width: 150,
                        height: 150
                    }} source={require('../../assets/UserAvatar.png')} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mogaji Olatubosun</Text>
                </View>
                <View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        marginTop: 20
                    }}>
                        <Text style={{ color: 'grey', fontSize: 15 }}> Full Name</Text>
                        <Text style={{ color: '#000000', fontSize: 15 }}>Mogaji Olatubosun </Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                    }}>
                        <Text style={{ color: 'grey', fontSize: 15 }}> Mobile Number</Text>
                        <Text style={{ color: '#000000', fontSize: 15 }}>0123456789 </Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                    }}>
                        <Text style={{ color: 'grey', fontSize: 15 }}> Gender</Text>
                        <Text style={{ color: '#000000', fontSize: 15 }}>Male </Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                    }}>
                        <Text style={{ color: 'grey', fontSize: 15 }}>Date of birth</Text>
                        <Text style={{ color: '#000000', fontSize: 15 }}>**_**_07 </Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                    }}>
                        <Text style={{ color: 'grey', fontSize: 15 }}> Email</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#000000', fontSize: 15 }}>s*@gmail.com </Text>
                            <Text style={{
                                borderRadius: 20,
                                paddingHorizontal: 5,
                                backgroundColor: '#98c4fa',

                            }}> verified</Text>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                    }}>
                        <Text style={{ color: 'grey', fontSize: 15 }}> Address</Text>
                        <Text style={{ color: '#000000', fontSize: 15 }}>Gò Vấp, Hồ chí Minh, Việt Nam </Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                    }}>
                        <Text style={{ color: 'grey', fontSize: 15 }}> Account Number</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#000000', fontSize: 15 }}>0123456789 </Text>
                            <TouchableOpacity>
                                <Ionicons name='copy-outline' size={15} color='blue' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                    }}>
                        <Text style={{ color: 'grey', fontSize: 15 }}> Account Tier</Text>
                        <Text style={{ color: '#000000', fontSize: 15 }}>Tier2 </Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                    }}>
                        <Text style={{ color: 'grey', fontSize: 15 }}> BVN</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#000000', fontSize: 15 }}>*********0585 </Text>
                            <TouchableOpacity>
                                <Ionicons name='copy-outline' size={15} color='blue' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})