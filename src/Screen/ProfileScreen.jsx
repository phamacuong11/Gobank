import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Image } from 'react-native'
import { Touchable } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native'

export default function ProfileScreen({ navigation, route }) {


    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{
                            width: 150,
                            height: 150
                        }} source={require('../assets/UserAvatar.png')} />
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mogaji Olatubosun</Text>
                    </View>
                    <View style={{ marginTop: 30, borderRadius: 20, paddingHorizontal: 20 }}>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            backgroundColor: '#e1fafa',
                            padding: 5,
                            borderRadius: 10,
                            alignItems: 'center',
                        }} onPress={() => { navigation.navigate('MyProfile') }}>
                            <View style={{ backgroundColor: '#8ebffa', justifyContent: 'center', padding: 7, borderRadius: 5, }}>
                                <Ionicons name='person-outline' color='blue' size={20} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={{ fontSize: 20, color: 'blue' }}>My Profile</Text>
                                <Text>See and edit your profile details</Text>
                            </View>
                            <Ionicons style={{
                                position: 'absolute',
                                top: 15,
                                right: 0
                            }} name='chevron-forward-outline' size={30} color='#000000' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 15 }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}> Setting & Preferences</Text>
                    </View>
                    <View style={{ padding: 5, borderRadius: 20, paddingHorizontal: 20 }}>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            backgroundColor: '#e1fafa',
                            padding: 5,
                            borderRadius: 10,
                            alignItems: 'center',
                        }}>
                            <View style={{ backgroundColor: '#8ebffa', justifyContent: 'center', padding: 7, borderRadius: 5, }}>
                                <Ionicons name='print-outline' color='blue' size={20} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={{ fontSize: 20, color: 'blue' }}>Account Statement</Text>
                                <Text>Check account statements</Text>
                            </View>
                            <Ionicons style={{
                                position: 'absolute',
                                top: 15,
                                right: 0
                            }} name='chevron-forward-outline' size={30} color='#000000' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 5, borderRadius: 20, paddingHorizontal: 20 }}>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            backgroundColor: '#e1fafa',
                            padding: 5,
                            borderRadius: 10,
                            alignItems: 'center',
                        }}>
                            <View style={{ backgroundColor: '#8ebffa', justifyContent: 'center', padding: 7, borderRadius: 5, }}>
                                <Ionicons name='paper-plane-outline' color='blue' size={20} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={{ fontSize: 20, color: 'blue' }}>Transfer Limits</Text>
                                <Text>Check money transfer limits</Text>
                            </View>
                            <Ionicons style={{
                                position: 'absolute',
                                top: 15,
                                right: 0
                            }} name='chevron-forward-outline' size={30} color='#000000' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 5, borderRadius: 20, paddingHorizontal: 20 }}>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            backgroundColor: '#e1fafa',
                            padding: 5,
                            borderRadius: 10,
                            alignItems: 'center',
                        }}>
                            <View style={{ backgroundColor: '#8ebffa', justifyContent: 'center', padding: 7, borderRadius: 5, }}>
                                <Ionicons name='person-outline' color='blue' size={20} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={{ fontSize: 20, color: 'blue' }}>Bank Card/Account</Text>
                                <Text>See and link bank card/account</Text>
                            </View>
                            <Ionicons style={{
                                position: 'absolute',
                                top: 15,
                                right: 0
                            }} name='chevron-forward-outline' size={30} color='#000000' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 5, borderRadius: 20, paddingHorizontal: 20 }}>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            backgroundColor: '#e1fafa',
                            padding: 5,
                            borderRadius: 10,
                            alignItems: 'center',
                        }}>
                            <View style={{ backgroundColor: '#8ebffa', justifyContent: 'center', padding: 7, borderRadius: 5, }}>
                                <Ionicons name='settings-outline' color='blue' size={20} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={{ fontSize: 20, color: 'blue' }}>Sittings</Text>
                                <Text>Control your notification and security settings</Text>
                            </View>
                            <Ionicons style={{
                                position: 'absolute',
                                top: 15,
                                right: 0
                            }} name='chevron-forward-outline' size={30} color='#000000' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 5, borderRadius: 20, paddingHorizontal: 20 }}>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            backgroundColor: '#e1fafa',
                            padding: 5,
                            borderRadius: 10,
                            alignItems: 'center',
                        }}>
                            <View style={{ backgroundColor: '#8ebffa', justifyContent: 'center', padding: 7, borderRadius: 5, }}>
                                <Ionicons name='help-outline' color='blue' size={20} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={{ fontSize: 20, color: 'blue' }}>Spport</Text>
                                <Text>Control your notification and security settings</Text>
                            </View>
                            <Ionicons style={{
                                position: 'absolute',
                                top: 15,
                                right: 0
                            }} name='chevron-forward-outline' size={30} color='#000000' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                        <TouchableOpacity style={{ paddingBottom: 30 }}>
                            <Text style={{ color: 'red', fontSize: 20 }}> Sign out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({})