import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Image } from 'react-native'
import { Touchable } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'


export default function ProfileScreen({ navigation, route }) {

    const sizehead = RFPercentage(2.5)

    const sizeIcon = 15


    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{
                            width: 150,
                            height: 150
                        }} source={require('../../../assets/UserAvatar.png')} />
                        <Text style={{ fontSize: RFPercentage(3), fontWeight: 'bold' }}>Mogaji Olatubosun</Text>
                    </View>
                    <View style={{ marginTop: 30, borderRadius: 20, paddingHorizontal: 10 }}>
                        <TouchableOpacity style={styles.touchableOpacity}
                            onPress={() => { navigation.navigate('MyProfile') }}>
                            <View style={styles.viewIcon}>
                                <Ionicons name='person-outline' color='#0540F2' size={sizeIcon} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={{ fontSize: RFPercentage(2.5), color: '#0540F2' }}>My Profile</Text>
                                <Text style={styles.textTitle}>See and edit your profile details</Text>
                            </View>
                            <Ionicons style={styles.icon} name='chevron-forward-outline' size={20} color='#000000' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 15 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Setting & Preferences</Text>
                    </View>
                    <View>
                        <View style={styles.viewMain}>
                            <TouchableOpacity style={styles.touchableOpacity}>
                                <View style={styles.viewIcon}>
                                    <Ionicons name='print-outline' color='#0540F2' size={sizeIcon} />
                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ fontSize: 16, color: '#0540F2' }}>Account Statement</Text>
                                    <Text style={styles.textTitle}>Check account statements</Text>
                                </View>
                                <Ionicons style={styles.icon} name='chevron-forward-outline' size={20} color='#000000' />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewMain}>
                            <TouchableOpacity style={styles.touchableOpacity}>
                                <View style={styles.viewIcon}>
                                    <Ionicons name='paper-plane-outline' color='#0540F2' size={sizeIcon} />
                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ fontSize: RFPercentage(2.5), color: '#0540F2' }}>Transfer Limits</Text>
                                    <Text style={styles.textTitle}>Check money transfer limits</Text>
                                </View>
                                <Ionicons style={styles.icon} name='chevron-forward-outline' size={20} color='#000000' />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewMain}>
                            <TouchableOpacity style={styles.touchableOpacity}>
                                <View style={styles.viewIcon}>
                                    <Ionicons name='person-outline' color='#0540F2' size={sizeIcon} />
                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ fontSize: RFPercentage(2.5), color: '#0540F2' }}>Bank Card/Account</Text>
                                    <Text style={styles.textTitle}>See and link bank card/account</Text>
                                </View>
                                <Ionicons style={styles.icon} name='chevron-forward-outline' size={20} color='#000000' />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewMain}>
                            <TouchableOpacity style={styles.touchableOpacity}>
                                <View style={styles.viewIcon}>
                                    <Ionicons name='settings-outline' color='#0540F2' size={sizeIcon} />
                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ fontSize: RFPercentage(2.5), color: '#0540F2' }}>Sittings</Text>
                                    <Text style={styles.textTitle}>Control your notification and security settings</Text>
                                </View>
                                <Ionicons style={styles.icon} name='chevron-forward-outline' size={20} color='#000000' />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewMain}>
                            <TouchableOpacity style={styles.touchableOpacity}>
                                <View style={styles.viewIcon}>
                                    <Ionicons name='help-outline' color='#0540F2' size={sizeIcon} />
                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ fontSize: RFPercentage(2.5), color: '#0540F2' }}>Spport</Text>
                                    <Text style={styles.textTitle}>Control your notification and security settings</Text>
                                </View>
                                <Ionicons style={styles.icon} name='chevron-forward-outline' size={20} color='#000000' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                        <TouchableOpacity style={{ paddingBottom: 30 }}>
                            <Text style={{ color: 'red', fontSize: RFPercentage(3) }}> Sign out</Text>
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
        paddingHorizontal: 10
    },
    icon: {
        position: 'absolute',
        top: 15,
        right: 0
    },
    textTitle: {
        fontSize: 12
    }
})