import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function TransactionScreen({ navigation }) {

    return (
        <SafeAreaView>

            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <Ionicons name='arrow-back-outline' color='black' size={40} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', paddingLeft: 40 }}>Transaction History </Text>
                </View>
                {/* *********************111111111111111111********************* */}
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginTop: 30, position: 'relative' }}>
                    <View style={{
                        backgroundColor: '#99CCFF',
                        borderRadius: 10,
                        padding: 5,
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Ionicons name='podium' color='blue' size={30} />
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ color: '#000000', fontSize: 15 }} > Transfer to Mogaji Olatubosun</Text>
                        <Text style={{ color: 'grey', fontSize: 14, marginTop: 10 }}> Mar 12th, 14:11</Text>
                    </View>
                    <View style={{ left: 35, position: 'absolute', top: 0, left: 325 }}>
                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}> -N2,000</Text>
                        <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 13 }}>Successful</Text>
                    </View>
                </View>
                {/* ***************************222222222222222222******************* */}
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginTop: 30, position: 'relative' }}>
                    <View style={{
                        backgroundColor: '#99CCFF',
                        borderRadius: 10,
                        padding: 5,
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Ionicons name='reader' color='blue' size={30} />
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ color: '#000000', fontSize: 15 }} > Sporty-Betting</Text>
                        <Text style={{ color: 'grey', fontSize: 14, marginTop: 10 }}> Mar 12th, 14:11</Text>
                    </View>
                    <View style={{ left: 35, position: 'absolute', top: 0, left: 325 }}>
                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}> -N2,000</Text>
                        <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 13 }}>Successful</Text>
                    </View>
                </View>
                {/* ****************3333333333333333*********************** */}
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginTop: 30, position: 'relative' }}>
                    <View style={{
                        backgroundColor: '#99CCFF',
                        borderRadius: 10,
                        padding: 5,
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Ionicons name='reader' color='blue' size={30} />
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ color: '#000000', fontSize: 15 }} > Sporty-Betting</Text>
                        <Text style={{ color: 'grey', fontSize: 14, marginTop: 10 }}> Mar 12th, 14:11</Text>
                    </View>
                    <View style={{ left: 35, position: 'absolute', top: 0, left: 325 }}>
                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}> -N3,000</Text>
                        <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 13 }}>Successful</Text>
                    </View>
                </View>
                {/* ******************4444444444444444444444************** */}
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginTop: 30, position: 'relative' }}>
                    <View style={{
                        backgroundColor: '#99CCFF',
                        borderRadius: 10,
                        padding: 5,
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Ionicons name='podium' color='blue' size={30} />
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ color: '#000000', fontSize: 15 }} > Transfer to Mogaji Olatubosun</Text>
                        <Text style={{ color: 'grey', fontSize: 14, marginTop: 10 }}> Mar 12th, 14:11</Text>
                    </View>
                    <View style={{ left: 35, position: 'absolute', top: 0, left: 325 }}>
                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}> -N2,000</Text>
                        <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 13 }}>Successful</Text>
                    </View>
                </View>
                {/* **********************55555555555**************** */}
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginTop: 30, position: 'relative' }}>
                    <View style={{
                        backgroundColor: '#99CCFF',
                        borderRadius: 10,
                        padding: 5,
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Ionicons name='podium' color='blue' size={30} />
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ color: '#000000', fontSize: 15 }} > Transfer to Mogaji Olatubosun</Text>
                        <Text style={{ color: 'grey', fontSize: 14, marginTop: 10 }}> Mar 12th, 14:11</Text>
                    </View>
                    <View style={{ left: 35, position: 'absolute', top: 0, left: 325 }}>
                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}> -N2,000</Text>
                        <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 13 }}>Successful</Text>
                    </View>
                </View>
                {/* ****************6666666666666**************** */}
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginTop: 30, position: 'relative' }}>
                    <View style={{
                        backgroundColor: '#99CCFF',
                        borderRadius: 10,
                        padding: 5,
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Ionicons name='radio' color='blue' size={30} />
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ color: '#000000', fontSize: 15 }} > Data to 09033554931</Text>
                        <Text style={{ color: 'grey', fontSize: 14, marginTop: 10 }}> Mar 12th, 14:11</Text>
                    </View>
                    <View style={{ left: 35, position: 'absolute', top: 0, left: 325 }}>
                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}> -N2,000</Text>
                        <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 13 }}>Successful</Text>
                    </View>
                </View>
                {/* ***************77777777777*************** */}
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginTop: 30, position: 'relative' }}>
                    <View style={{
                        backgroundColor: '#99CCFF',
                        borderRadius: 10,
                        padding: 5,
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Ionicons name='reader' color='blue' size={30} />
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ color: '#000000', fontSize: 15 }} > Dstv 7038718834</Text>
                        <Text style={{ color: 'grey', fontSize: 14, marginTop: 10 }}> Mar 12th, 14:11</Text>
                    </View>
                    <View style={{ left: 35, position: 'absolute', top: 0, left: 325 }}>
                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}> -N2,000</Text>
                        <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 13 }}>Successful</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({})