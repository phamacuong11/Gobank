import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export default function Button({ text }) {
    return (
        <View >
            <View style={{
                width: 300,
                height: 40,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 15,
                backgroundColor: '#0540F2'
            }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}> {text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})