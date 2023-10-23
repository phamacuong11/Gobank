import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';

export default function App({ navigation, route }) {
    const [passcode, setPasscode] = useState('');
    const [dots, setDots] = useState(['outline', 'outline', 'outline', 'outline']);

    const { bankName, logo, enterAmount, remark, accountNumber, balance } = route.params.account
    const handleNumberPress = (number) => {
        const updatedPasscode = passcode + number;
        const updatedDots = dots.map((dot, index) => index < updatedPasscode.length ? 'shape' : 'outline');

        if (updatedPasscode.length === 4) {
            if (updatedPasscode === '1234') {
                Alert.alert('Thành công', 'Mật khẩu chính xác');
                navigation.navigate('PaymentSuccess', { account: { enterAmount } });
            } else {
                Alert.alert('Lỗi', 'Mật khẩu không chính xác');
                resetPasscode();
            }
        }

        setPasscode(updatedPasscode);
        setDots(updatedDots);
    };

    const resetPasscode = () => {
        setPasscode('');
        setDots(['outline', 'outline', 'outline', 'outline']);
    };

    return (
        <View style={styles.container}>
            <View style={styles.dotsContainer}>
                {dots.map((dot, index) => (
                    <View
                        key={index}
                        style={[styles.dot, dot === 'shape' ? styles.shapeDot : styles.outlineDot]}
                    />
                ))}
            </View>
            <View style={styles.keyboardContainer}>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <TouchableOpacity
                        style={styles.numberButton}
                        onPress={() => handleNumberPress('1')}
                    >
                        <Text style={styles.numberButtonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numberButton}
                        onPress={() => handleNumberPress('2')}
                    >
                        <Text style={styles.numberButtonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numberButton}
                        onPress={() => handleNumberPress('3')}
                    >
                        <Text style={styles.numberButtonText}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <TouchableOpacity
                        style={styles.numberButton}
                        onPress={() => handleNumberPress('4')}
                    >
                        <Text style={styles.numberButtonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numberButton}
                        onPress={() => handleNumberPress('5')}
                    >
                        <Text style={styles.numberButtonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numberButton}
                        onPress={() => handleNumberPress('6')}
                    >
                        <Text style={styles.numberButtonText}>6</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', padding: 10 }}>
                    <TouchableOpacity
                        style={styles.numberButton}
                        onPress={() => handleNumberPress('7')}
                    >
                        <Text style={styles.numberButtonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numberButton}
                        onPress={() => handleNumberPress('8')}
                    >
                        <Text style={styles.numberButtonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numberButton}
                        onPress={() => handleNumberPress('9')}
                    >
                        <Text style={styles.numberButtonText}>9</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', padding: 10 }} >
                    <TouchableOpacity
                        style={styles.numberButton}
                        onPress={resetPasscode}
                    >
                        <Text style={styles.numberButtonText}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numberButton}
                        onPress={() => handleNumberPress('0')}
                    >
                        <Text style={styles.numberButtonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numberButton}
                        onPress={() => {
                            if (passcode.length > 0) {
                                const updatedPasscode = passcode.slice(0, -1);
                                const updatedDots = dots.slice(0, -1);

                                setPasscode(updatedPasscode);
                                setDots(updatedDots);
                            }
                        }}
                    >
                        <Text style={styles.numberButtonText}>X</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotsContainer: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    dot: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginHorizontal: 5,
        borderWidth: 1,
    },
    outlineDot: {
        borderColor: 'black',
    },
    shapeDot: {
        backgroundColor: 'black',
    },
    keyboardContainer: {
        paddingHorizontal: 20,
        flex: 1
    },
    numberButton: {
        flex: 1,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,

    },
    numberButtonText: {
        fontSize: 24,
    },
});