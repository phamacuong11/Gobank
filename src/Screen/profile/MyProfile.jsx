import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export default function MyProfile({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View style={styles.viewHeader}>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack()
                        }}>
                            <Ionicons name='chevron-back' color='black' size={RFPercentage(4)} />
                        </TouchableOpacity>
                        <Text style={styles.textMyProfile}> My Profile</Text>
                        <TouchableOpacity>
                            <Text style={styles.textEdit}> Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{
                            width: 150,
                            height: 150
                        }} source={require('../../../assets/UserAvatar.png')} />
                        <Text style={{ fontSize: RFPercentage(3), fontWeight: 'bold' }}>Mogaji Olatubosun</Text>
                    </View>
                    <View style={{ marginTop: 10, paddingBottom: 30 }}>
                        <View style={styles.viewmain}>
                            <Text style={styles.text1}> Full Name</Text>
                            <Text style={styles.text2}>Mogaji Olatubosun </Text>
                        </View>
                        <View style={styles.viewmain}>
                            <Text style={styles.text1}> Mobile Number</Text>
                            <Text style={styles.text2}>0123456789 </Text>
                        </View>
                        <View style={styles.viewmain}>
                            <Text style={styles.text1}> Gender</Text>
                            <Text style={styles.text2}>Male </Text>
                        </View>
                        <View style={styles.viewmain}>
                            <Text style={styles.text1}>Date of birth</Text>
                            <Text style={styles.text2}>**_**_07 </Text>
                        </View>
                        <View style={styles.viewmain}>
                            <Text style={styles.text1}> Email</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.text2}>s*@gmail.com </Text>
                                <Text style={styles.textVeryfi}> verified</Text>
                            </View>
                        </View>
                        <View style={styles.viewmain}>
                            <Text style={styles.text1}> Address</Text>
                            <Text style={styles.text2}>Gò Vấp, Hồ chí Minh, Việt Nam </Text>
                        </View>
                        <View style={styles.viewmain}>
                            <Text style={styles.text1}> Account Number</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.text2}>0123456789 </Text>
                                <TouchableOpacity>
                                    <Ionicons name='copy-outline' size={15} color='blue' />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.viewmain}>
                            <Text style={styles.text1}> Account Tier</Text>
                            <Text style={styles.text2}>Tier2 </Text>
                        </View>
                        <View style={styles.viewmain}>
                            <Text style={styles.text1}> BVN</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.text2}>*********0585 </Text>
                                <TouchableOpacity>
                                    <Ionicons name='copy-outline' size={15} color='blue' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewHeader: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'space-between'
    },
    textMyProfile: {
        fontSize: RFPercentage(3),
        color: 'black',
        fontWeight: 'bold'
    },
    textEdit: {
        fontSize: 16,
        color: '#4898fa',
    },
    viewmain: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    textVeryfi: {
        borderRadius: 20,
        paddingHorizontal: 5,
        backgroundColor: '#98c4fa',

    },
    text1: {
        color: 'grey',
        fontSize: RFPercentage(2.2)
    },
    text2: {
        color: '#000000',
        fontSize: RFPercentage(2.2)
    }

})