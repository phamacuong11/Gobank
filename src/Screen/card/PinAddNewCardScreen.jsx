import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function PinAddNewCardScreen({ navigation }) {

    const sizeIcon = 20



    return (
        <SafeAreaView>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <Ionicons name='arrow-back-outline' color='black' size={20} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: '27%' }}>Add New Card </Text>
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Enter Your Pin</Text>
                    <Text style={{ width: '90%', fontWeight: 'bold', paddingVertical: 5 }}> Please enter your four digit pin that we confirm its you</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 40, marginTop: 50 }}>
                    <View style={styles.viewEllipse}>
                        <Ionicons name='ellipse' color='grey' size={sizeIcon} />
                    </View>
                    <View style={styles.viewEllipse}>
                        <Ionicons name='ellipse' color='grey' size={sizeIcon} />
                    </View>
                    <View style={styles.viewEllipse}>
                        <Ionicons name='ellipse' color='grey' size={sizeIcon} />
                    </View>
                    <View style={styles.viewEllipse}>
                        <Ionicons name='ellipse' color='grey' size={sizeIcon} />
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10, marginTop: 100 }}>
                    <TouchableOpacity
                        style={styles.buttonConfirm}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewEllipse: {
        width: '20%',
        height: '45%',
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    buttonConfirm: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 30,
        padding: 10,
        backgroundColor: 'blue'
    }
})