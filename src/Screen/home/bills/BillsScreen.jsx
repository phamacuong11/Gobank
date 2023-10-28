import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { StatusBar } from 'react-native'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'
import { useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'

export default function BillsScreen({ navigation }) {

    const logovn = require('../../../../assets/VN.png')

    const [showBalance, setShowBalance] = useState(true)
    const [balance] = useState('N155,600.24')

    const NextBills = () => {
        navigation.navigate('SelectProvider')

    }

    return (
        <SafeAreaView  >
            <ScrollView>
                <View>
                    <StatusBar barStyle='light-content' />
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', position: 'absolute', }}>
                        <View style={styles.view1}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={styles.view2}>
                                </View>
                                <View style={styles.view3}>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack()
                        }}>
                            <Ionicons name='chevron-back' color='white' size={RFPercentage(4)} />
                        </TouchableOpacity>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontSize: RFPercentage(3), color: 'white', marginLeft: '45%'
                            }}> Bills</Text>
                        </View>
                    </View>
                    <View style={{}}>
                        <View style={{ paddingHorizontal: 10 }}>
                            <View style={{ paddingHorizontal: 15, flexDirection: 'row', marginTop: 40 }}>
                                <Image style={{
                                    width: 30, height: 30,
                                }}
                                    source={logovn} />
                                <Ionicons name='chevron-down-outline' size={RFPercentage(5)} color='white' />
                            </View>
                            <Text style={{ color: 'white', fontSize: RFPercentage(2.5) }}> Current Balance</Text>
                            <View style={styles.viewCurrentBalance}>
                                {showBalance ? <Text
                                    style={{ color: 'white', fontSize: RFPercentage(4), fontWeight: 'bold' }} >{balance}</Text> : <Text
                                        style={{ color: 'white', fontSize: RFPercentage(4), fontWeight: 'bold' }} >***********</Text>}

                                <TouchableOpacity onPress={() => {
                                    setShowBalance(!showBalance)
                                }}>
                                    {showBalance ? <Ionicons name='eye-outline' color='white' size={RFPercentage(6)} /> : <Ionicons name='eye-off-outline' color='white' size={30} />}
                                </TouchableOpacity>

                            </View>
                        </View>

                        <View style={{ marginTop: 50, paddingHorizontal: 10 }}>
                            <Text style={{ color: 'black', fontSize: RFPercentage(3) }}> Select Bill Type</Text>
                        </View>
                        <View style={{ width: '100%', paddingHorizontal: 10 }}>
                            <View style={{
                                paddingVertical: 5, marginTop: 30
                            }}>
                                <TouchableOpacity style={styles.button} onPress={NextBills} >
                                    <View style={styles.viewbutton}>
                                        <Text style={{ fontWeight: 'bold' }}>MTN</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', }}>
                                        <Text style={styles.text}>  Cable Subscription </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingVertical: 10, }}>
                                <TouchableOpacity style={styles.button} >
                                    <View style={styles.viewbutton}>
                                        <Text style={{ fontWeight: 'bold' }}>MTN</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', }}>
                                        <Text style={styles.text}>  Betting, Lottery and Gaming</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                paddingVertical: 0,
                            }}>
                                <TouchableOpacity style={styles.button} >
                                    <View style={styles.viewbutton}>
                                        <Text style={{ fontWeight: 'bold' }}>MTN</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', }}>
                                        <Text style={styles.text}>  Electricty </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                paddingVertical: 10,
                            }}>
                                <TouchableOpacity style={styles.button} >
                                    <View style={styles.viewbutton}>
                                        <Text style={{ fontWeight: 'bold' }}>MTN</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', }}>
                                        <Text style={styles.text}>  Event Tickets </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                paddingVertical: 10,
                            }}>
                                <TouchableOpacity style={styles.button} >
                                    <View style={styles.viewbutton}>
                                        <Text style={{ fontWeight: 'bold' }}>MTN</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', }}>
                                        <Text style={styles.text}>  Government Payment </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                paddingVertical: 10,
                            }}>
                                <TouchableOpacity style={styles.button} >
                                    <View style={styles.viewbutton}>
                                        <Text style={{ fontWeight: 'bold' }}>MTN</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', }}>
                                        <Text style={styles.text}>  Remita </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                paddingVertical: 10, paddingBottom: 60
                            }}>
                                <TouchableOpacity style={styles.button} >
                                    <View style={styles.viewbutton}>
                                        <Text style={{ fontWeight: 'bold' }}>MTN</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', }}>
                                        <Text style={styles.text}>  Travel and Hotel </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>
                </View >
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    view1: {
        width: '100%',
        height: 270,
        backgroundColor: '#10142E',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    view2: {
        width: '40%',
        height: 70,
        backgroundColor: '#000055',
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,
        marignRight: 20
    },
    view3: {
        width: '40%',
        height: 70,
        backgroundColor: '#000099',
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,
    },
    button: {
        backgroundColor: '#e3f0fa',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        paddingHorizontal: 10
    },
    viewbutton: {
        width: 50,
        height: 25,
        borderWidth: 2,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: RFPercentage(2.5),
        color: '#000000',
        fontWeight: 'bold'
    },
    viewCurrentBalance: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    }

})