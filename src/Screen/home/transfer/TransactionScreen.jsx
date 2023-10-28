import { ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RFPercentage } from 'react-native-responsive-fontsize'

export default function TransactionScreen({ navigation }) {

    const sizeIcon = RFPercentage(4)

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, paddingHorizontal: 20 }}>
                            <TouchableOpacity onPress={() => {
                                navigation.goBack()
                            }}>
                                <Ionicons name='arrow-back-outline' color='black' size={RFPercentage(4)} />
                            </TouchableOpacity>
                            <Text style={styles.textheader}>Transaction History </Text>
                        </View>
                    </View>
                    <View >
                        {/* *********************111111111111111111********************* */}
                        <View style={styles.viewbody}>
                            <View style={styles.view}>
                                <Ionicons name='podium' color='blue' size={sizeIcon} />
                            </View>
                            <View style={{ paddingLeft: 5 }}>
                                <Text style={styles.texttitle} > Transfer to Mogaji Olatubosun</Text>
                                <Text style={styles.textday}> Mar 12th, 14:11</Text>
                            </View>
                            <View style={{ position: 'absolute', top: 0, right: 10 }}>
                                <Text style={styles.texttarget}> -N2,000</Text>
                                <Text style={styles.textsuccess}>Successful</Text>
                            </View>
                        </View>
                        {/* ***************************222222222222222222******************* */}
                        <View style={styles.viewbody}>
                            <View style={styles.view}>
                                <Ionicons name='reader' color='blue' size={sizeIcon} />
                            </View>
                            <View style={{ paddingLeft: 5 }}>
                                <Text style={styles.texttitle} > Sporty-Betting</Text>
                                <Text style={styles.textday}> Mar 12th, 14:11</Text>
                            </View>
                            <View style={{ position: 'absolute', top: 0, right: 10 }}>
                                <Text style={styles.texttarget}> -N2,000</Text>
                                <Text style={styles.textsuccess}>Successful</Text>
                            </View>
                        </View>
                        {/* ****************3333333333333333*********************** */}
                        <View style={styles.viewbody}>
                            <View style={styles.view}>
                                <Ionicons name='reader' color='blue' size={sizeIcon} />
                            </View>
                            <View style={{ paddingLeft: 5 }}>
                                <Text style={styles.texttitle} > Sporty-Betting</Text>
                                <Text style={styles.textday}> Mar 12th, 14:11</Text>
                            </View>
                            <View style={{ position: 'absolute', top: 0, right: 10 }}>
                                <Text style={styles.texttarget}> -N3,000</Text>
                                <Text style={styles.textsuccess}>Successful</Text>
                            </View>
                        </View>
                        {/* ******************4444444444444444444444************** */}
                        <View style={styles.viewbody}>
                            <View style={styles.view}>
                                <Ionicons name='podium' color='blue' size={sizeIcon} />
                            </View>
                            <View style={{ paddingLeft: 5 }}>
                                <Text style={styles.texttitle} > Transfer to Mogaji Olatubosun </Text>
                                <Text style={styles.textday}> Mar 12th, 14:11</Text>
                            </View>
                            <View style={{ position: 'absolute', top: 0, right: 10 }}>
                                <Text style={styles.texttarget}> -N2,000</Text>
                                <Text style={styles.textsuccess}>Successful</Text>
                            </View>
                        </View>
                        {/* **********************55555555555**************** */}
                        <View style={styles.viewbody}>
                            <View style={styles.view}>
                                <Ionicons name='podium' color='blue' size={sizeIcon} />
                            </View>
                            <View style={{ paddingLeft: 5 }}>
                                <Text style={styles.texttitle} > Transfer to Mogaji Olatubosun</Text>
                                <Text style={styles.textday}> Mar 12th, 14:11</Text>
                            </View>
                            <View style={{ position: 'absolute', top: 0, right: 10 }}>
                                <Text style={styles.texttarget}> -N2,000</Text>
                                <Text style={styles.textsuccess}>Successful</Text>
                            </View>
                        </View>
                        {/* ****************6666666666666**************** */}
                        <View style={styles.viewbody}>
                            <View style={styles.view}>
                                <Ionicons name='radio' color='blue' size={sizeIcon} />
                            </View>
                            <View style={{ paddingLeft: 5 }}>
                                <Text style={styles.texttitle} > Data to 09033554931</Text>
                                <Text style={styles.textday}> Mar 12th, 14:11</Text>
                            </View>
                            <View style={{ position: 'absolute', top: 0, right: 10 }}>
                                <Text style={styles.texttarget}> -N2,000</Text>
                                <Text style={styles.textsuccess}>Successful</Text>
                            </View>
                        </View>
                        {/* ***************77777777777*************** */}
                        <View style={styles.viewbody}>
                            <View style={styles.view}>
                                <Ionicons name='reader' color='blue' size={sizeIcon} />
                            </View>
                            <View style={{ paddingLeft: 5 }}>
                                <Text style={styles.texttitle} > Dstv 7038718834</Text>
                                <Text style={styles.textday}> Mar 12th, 14:11</Text>
                            </View>
                            <View style={{ position: 'absolute', top: 0, right: 10 }}>
                                <Text style={styles.texttarget}> -N2,000</Text>
                                <Text style={styles.textsuccess}>Successful</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    textheader: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        paddingLeft: '15%'
    },
    view: {
        backgroundColor: '#99CCFF',
        borderRadius: 10,
        padding: 5,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texttarget: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: RFPercentage(2.2)
    },
    textsuccess: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: RFPercentage(2)
    },
    textday: {
        color: 'grey',
        fontSize: RFPercentage(2),
    },
    viewbody: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginTop: 30,
        alignItems: 'center'
    },
    texttitle: {
        width: '100%',
        color: '#000000',
        fontSize: RFPercentage(2.1)
    }
})