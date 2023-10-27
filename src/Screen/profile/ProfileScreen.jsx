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
                        }} source={require('../../../assets/UserAvatar.png')} />
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mogaji Olatubosun</Text>
                    </View>
                    <View style={{ marginTop: 30, borderRadius: 20, paddingHorizontal: 20 }}>
                        <TouchableOpacity style={styles.touchableOpacity}
                            onPress={() => { navigation.navigate('MyProfile') }}>
                            <View style={styles.viewIcon}>
                                <Ionicons name='person-outline' color='#0540F2' size={20} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={{ fontSize: 20, color: '#0540F2' }}>My Profile</Text>
                                <Text>See and edit your profile details</Text>
                            </View>
                            <Ionicons style={styles.icon} name='chevron-forward-outline' size={30} color='#000000' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 15 }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}> Setting & Preferences</Text>
                    </View>
                    <View style={styles.viewMain}>
                        <TouchableOpacity style={styles.touchableOpacity}>
                            <View style={styles.viewIcon}>
                                <Ionicons name='print-outline' color='#0540F2' size={20} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={{ fontSize: 20, color: '#0540F2' }}>Account Statement</Text>
                                <Text>Check account statements</Text>
                            </View>
                            <Ionicons style={styles.icon} name='chevron-forward-outline' size={30} color='#000000' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewMain}>
                        <TouchableOpacity style={styles.touchableOpacity}>
                            <View style={styles.viewIcon}>
                                <Ionicons name='paper-plane-outline' color='#0540F2' size={20} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={{ fontSize: 20, color: '#0540F2' }}>Transfer Limits</Text>
                                <Text>Check money transfer limits</Text>
                            </View>
                            <Ionicons style={styles.icon} name='chevron-forward-outline' size={30} color='#000000' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewMain}>
                        <TouchableOpacity style={styles.touchableOpacity}>
                            <View style={styles.viewIcon}>
                                <Ionicons name='person-outline' color='#0540F2' size={20} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={{ fontSize: 20, color: '#0540F2' }}>Bank Card/Account</Text>
                                <Text>See and link bank card/account</Text>
                            </View>
                            <Ionicons style={styles.icon} name='chevron-forward-outline' size={30} color='#000000' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewMain}>
                        <TouchableOpacity style={styles.touchableOpacity}>
                            <View style={styles.viewIcon}>
                                <Ionicons name='settings-outline' color='#0540F2' size={20} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={{ fontSize: 20, color: '#0540F2' }}>Sittings</Text>
                                <Text>Control your notification and security settings</Text>
                            </View>
                            <Ionicons style={styles.icon} name='chevron-forward-outline' size={30} color='#000000' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewMain}>
                        <TouchableOpacity style={styles.touchableOpacity}>
                            <View style={styles.viewIcon}>
                                <Ionicons name='help-outline' color='#0540F2' size={20} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={{ fontSize: 20, color: '#0540F2' }}>Spport</Text>
                                <Text>Control your notification and security settings</Text>
                            </View>
                            <Ionicons style={styles.icon} name='chevron-forward-outline' size={30} color='#000000' />
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

const styles = StyleSheet.create({
    touchableOpacity: {
        flexDirection: 'row',
        backgroundColor: '#e3f0fa',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
    },
    viewIcon: {
        backgroundColor: '#8ebffa',
        justifyContent: 'center',
        padding: 7,
        borderRadius: 5,
    },
    viewMain: {
        padding: 5,
        borderRadius: 20,
        paddingHorizontal: 20
    },
    icon: {
        position: 'absolute',
        top: 15,
        right: 0
    }
})