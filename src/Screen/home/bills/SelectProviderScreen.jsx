import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SelectProviderScreen({ navigation, route }) {

    const logovpbank = require('../../../../assets/logovpbank.png')
    const logosacombank = require('../../../../assets/logosacombank.png')
    const logomb = require('../../../../assets/logonganhangMB.png')
    const logotpbank = require('../../../../assets/logonganhangTPbank.png')

    const handleSelect = (bankName, logo) => {
        navigation.navigate('CableSub', { account: { bankName, logo } });
    }
    return (
        <SafeAreaView>
            <ScrollView>

                <View >
                    <View >
                        <View style={{ paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => {
                                navigation.goBack()
                            }}>
                                <Ionicons name='close' color='black' size={30} />
                            </TouchableOpacity>
                            <View style={{
                                alignItems: 'center',
                                width: '100%', paddingRight: 50, justifyContent: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 22,
                                    color: 'black',
                                    fontWeight: 'bold'
                                }}> Select Provider</Text>
                            </View>
                        </View>
                    </View>
                    {/* ******Search Bar*********** */}
                    <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 40 }} >
                        <View style={styles.viewsearch}>

                            <Ionicons name='search' color='blue' size={30} />
                            <TextInput placeholder='Search here for Provider'
                                placeholderTextColor='grey'
                                fontSize={14} />
                        </View>
                    </View>

                    <View>
                        <View style={{ paddingVertical: 0, paddingHorizontal: 20 }} >
                            <TouchableOpacity style={styles.button}
                                onPress={() => handleSelect('NH SG Thương tín Sacombank', logosacombank)}
                            >
                                <Image style={styles.image3} source={logosacombank} />
                                <Text style={styles.text}>
                                    NH SG Thương tín Sacombank
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => handleSelect('NH việt Nam thịnh Vượng', logovpbank)}>
                                <Image style={styles.image1} source={logovpbank} />
                                <Text style={styles.text}>
                                    NH Việt Nam thịnh vượng
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}
                                onPress={() => handleSelect('Ngân hàng Quân Đội', logomb)}>
                                <Image style={styles.image2} source={logomb} />
                                <Text style={styles.text}>
                                    Ngân hàng Quân Đội
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}
                                onPress={() => handleSelect('Ngân hàng Tiên phong', logotpbank)}>
                                <Image style={styles.image3} source={logotpbank} />
                                <Text style={styles.text}>
                                    Ngân hàng Tiên Phong
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}
                                onPress={() => handleSelect('NH SG Thương tín Sacombank', logosacombank)}
                            >
                                <Image style={styles.image3} source={logosacombank} />
                                <Text style={styles.text}>
                                    NH SG Thương tín Sacombank
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}
                                onPress={() => handleSelect('NH việt Nam thịnh Vượng', logovpbank)}>
                                <Image style={styles.image1} source={logovpbank} />
                                <Text style={styles.text}>
                                    NH Việt Nam thịnh vượng
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}
                                onPress={() => handleSelect('Ngân hàng Quân Đội', logomb)}>
                                <Image style={styles.image2} source={logomb} />
                                <Text style={styles.text}>
                                    Ngân hàng Quân Đội
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}
                                onPress={() => handleSelect('Ngân hàng Tiên phong', logotpbank)}>
                                <Image style={styles.image3} source={logotpbank} />
                                <Text style={styles.text}>
                                    Ngân hàng Tiên Phong
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}
                                onPress={() => handleSelect('NH SG Thương tín Sacombank', logosacombank)}
                            >
                                <Image style={styles.image3} source={logosacombank} />
                                <Text style={styles.text}>
                                    NH SG Thương tín Sacombank
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}
                                onPress={() => handleSelect('NH việt Nam thịnh Vượng', logovpbank)}>
                                <Image style={styles.image1} source={logovpbank} />
                                <Text style={styles.text}>
                                    NH Việt Nam thịnh vượng
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => handleSelect('Ngân hàng Quân Đội', logomb)}>
                                <Image style={styles.image2} source={logomb} />
                                <Text style={styles.text}>
                                    Ngân hàng Quân Đội
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => handleSelect('Ngân hàng Tiên phong', logotpbank)}>
                                <Image style={styles.image3} source={logotpbank} />
                                <Text style={styles.text}>
                                    Ngân hàng Tiên Phong
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};
const styles = StyleSheet.create({
    viewsearch: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#e3f0fa',
        padding: 10,
        borderRadius: 20
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20
    },
    image1: {
        width: 80,
        height: 15
    },
    image2: {
        width: 80,
        height: 20
    },
    image3: {
        width: 80,
        height: 30
    },
    text: {
        fontSize: 16,
        paddingLeft: 30
    }
})