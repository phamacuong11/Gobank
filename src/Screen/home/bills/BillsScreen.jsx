import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { StatusBar } from 'react-native'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'
import { useState } from 'react'

export default function BillsScreen({ navigation }) {
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
                        <View style={{
                            width: '100%',
                            height: 250,
                            backgroundColor: '#10142E',
                            borderBottomLeftRadius: 30,
                            borderBottomRightRadius: 30
                        }}>
                            <View style={{
                                width: 160,
                                height: 90,
                                backgroundColor: '#000055',
                                borderBottomRightRadius: 80,
                                borderBottomLeftRadius: 80,
                                marignRight: 20

                            }}>
                                <View style={{
                                    width: 160,
                                    height: 90,
                                    backgroundColor: '#000099',
                                    borderBottomRightRadius: 80,
                                    borderBottomLeftRadius: 80,
                                    marginLeft: 250

                                }}>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack()
                        }}>
                            <Ionicons name='chevron-back' color='white' size={30} />
                        </TouchableOpacity>
                        <View style={{
                            alignItems: 'center',
                            width: '100%', paddingRight: 60, justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontSize: 20,
                                color: 'white',
                            }}> Bills</Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>

                        <View style={{ paddingHorizontal: 5, flexDirection: 'row', marginTop: 40 }}>
                            <Image
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                                source={require('../../../assets/VN.png')} />
                            <Ionicons name='chevron-down-outline' size={30} color='white' />
                        </View>
                        <Text style={{ color: 'white' }}> Current Balance</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 10
                        }}>
                            {showBalance ? <Text
                                style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }} >{balance}</Text> : <Text
                                    style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }} >***********</Text>}

                            <TouchableOpacity onPress={() => {
                                setShowBalance(!showBalance)
                            }}>
                                {showBalance ? <Ionicons name='eye-outline' color='white' size={30} /> : <Ionicons name='eye-off-outline' color='white' size={30} />}
                            </TouchableOpacity>

                        </View>
                        <View style={{ marginTop: 50 }}>
                            <Text style={{ color: 'black', fontSize: 17 }}> Select Bill Type</Text>
                        </View>
                        <View>
                            <View style={{
                                paddingHorizontal: 5, paddingVertical: 5, marginTop: 30
                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: '#e3f0fa',
                                    height: 50,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: 30,
                                    paddingHorizontal: 10
                                }} onPress={NextBills} >
                                    <View style={{
                                        width: 50,
                                        height: 25,
                                        borderWidth: 2,
                                        borderRadius: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{ fontWeight: 'bold' }}>MTN</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', }}>
                                        <Text style={{
                                            fontSize: 16,
                                            color: '#000000',
                                            fontWeight: 'bold'
                                        }}>  Cable Subscription </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                paddingHorizontal: 5, paddingVertical: 10,
                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: '#e3f0fa',
                                    height: 50,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: 30,
                                    paddingHorizontal: 10
                                }} >
                                    <View style={{
                                        width: 50,
                                        height: 25,
                                        borderWidth: 2,
                                        borderRadius: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{ fontWeight: 'bold' }}>MTN</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', }}>
                                        <Text style={{
                                            fontSize: 16,
                                            color: '#000000',
                                            fontWeight: 'bold'
                                        }}>  Betting, Lottery and Gaming</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                paddingHorizontal: 5, paddingVertical: 10,
                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: '#e3f0fa',
                                    height: 50,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: 30,
                                    paddingHorizontal: 10
                                }} >
                                    <View style={{
                                        width: 50,
                                        height: 25,
                                        borderWidth: 2,
                                        borderRadius: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{ fontWeight: 'bold' }}>MTN</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', }}>
                                        <Text style={{
                                            fontSize: 16,
                                            color: '#000000',
                                            fontWeight: 'bold'
                                        }}>  Electricty </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                paddingHorizontal: 5, paddingVertical: 10,
                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: '#e3f0fa',
                                    height: 50,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: 30,
                                    paddingHorizontal: 10
                                }} >
                                    <View style={{
                                        width: 50,
                                        height: 25,
                                        borderWidth: 2,
                                        borderRadius: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{ fontWeight: 'bold' }}>MTN</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', }}>
                                        <Text style={{
                                            fontSize: 16,
                                            color: '#000000',
                                            fontWeight: 'bold'
                                        }}>  Event Tickets </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                paddingHorizontal: 5, paddingVertical: 10,
                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: '#e3f0fa',
                                    height: 50,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: 30,
                                    paddingHorizontal: 10
                                }} >
                                    <View style={{
                                        width: 50,
                                        height: 25,
                                        borderWidth: 2,
                                        borderRadius: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{ fontWeight: 'bold' }}>MTN</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', }}>
                                        <Text style={{
                                            fontSize: 16,
                                            color: '#000000',
                                            fontWeight: 'bold'
                                        }}>  Government Payment </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                paddingHorizontal: 5, paddingVertical: 10,
                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: '#e3f0fa',
                                    height: 50,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: 30,
                                    paddingHorizontal: 10
                                }} >
                                    <View style={{
                                        width: 50,
                                        height: 25,
                                        borderWidth: 2,
                                        borderRadius: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{ fontWeight: 'bold' }}>MTN</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', }}>
                                        <Text style={{
                                            fontSize: 16,
                                            color: '#000000',
                                            fontWeight: 'bold'
                                        }}>  Remita </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                paddingHorizontal: 5, paddingVertical: 10, paddingBottom: 60
                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: '#e3f0fa',
                                    height: 50,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: 30,
                                    paddingHorizontal: 10
                                }} >
                                    <View style={{
                                        width: 50,
                                        height: 25,
                                        borderWidth: 2,
                                        borderRadius: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{ fontWeight: 'bold' }}>MTN</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', }}>
                                        <Text style={{
                                            fontSize: 16,
                                            color: '#000000',
                                            fontWeight: 'bold'
                                        }}>  Travel and Hotel </Text>
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

const styles = StyleSheet.create({})