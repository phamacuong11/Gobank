import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export default function Button({ text }) {
    return (
        <View style={{
            width: '100%',
            height: 60,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 15,
            backgroundColor: '#0540F2',
        }}>
            <Text style={{
                color: 'white', fontWeight: 'bold', fontSize: RFPercentage(3),
                paddingVertical: 10
            }}> {text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})