import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

export default function InputText({ secureTextEntry, ref, onSubmitEditing, onChangeText, value }) {
    return (
        <View>
            <TextInput style={styles.textinput}
                secureTextEntry={secureTextEntry}
                ref={ref}
                onSubmitEditing={onSubmitEditing}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textinput: {
        width: 350,
        borderWidth: 1,
        height: 40,
        borderRadius: 15,
        marginTop: 4,
        paddingLeft: 15
    }
})