import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logovpbank from '../../../../assets/logovpbank.png'
import { StyleSheet } from 'react-native';

export default function SelectBankScreen({ navigation, route }) {
    const logovpbank = require('../../../../assets/logovpbank.png')
    const logosacombank = require('../../../../assets/logosacombank.png')
    const logomb = require('../../../../assets/logonganhangMB.png')
    const logotpbank = require('../../../../assets/logonganhangTPbank.png')

    const { bankName, logo, balance } = route.params.account


    const handleSelect = (bankName, logo) => {
        navigation.navigate('SendtoBank', { account: { bankName, logo, balance } });
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
                                <Ionicons name='close' color='black' size={20} />
                            </TouchableOpacity>
                            <View style={{
                                alignItems: 'center',
                                width: '100%', paddingRight: 40, justifyContent: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    color: 'black',
                                    fontWeight: 'bold'
                                }}> Select Bank</Text>
                            </View>
                        </View>
                    </View>
                    {/* ******Search Bar*********** */}
                    <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 40 }} >
                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            backgroundColor: '#e3f0fa',
                            padding: 10,
                            borderRadius: 20
                        }}>

                            <Ionicons name='search' color='blue' size={20} />
                            <TextInput placeholder='Search here for Bank' placeholderTextColor='grey' fontSize={15} />
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 15 }}>
                        <View style={{
                            width: '100%',
                            height: 180,
                            backgroundColor: '#e3f0fa',
                            padding: 10,
                            borderRadius: 20
                        }}>
                            <Text style={{ color: '#000000', fontSize: 17, fontWeight: 'bold' }} > Frequently Used Bank</Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingHorizontal: 10, marginTop: 40
                            }}>
                                <TouchableOpacity
                                    onPress={() => handleSelect('NH Việt Nam thịnh vượng', logovpbank)}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Image style={{
                                            width: 80,
                                            height: 15
                                        }} source={logovpbank} />
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', paddingTop: 30 }}> VP Bank</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => handleSelect('NH sài gòn Thương tín Sacombank', logosacombank)}
                                >
                                    <View style={{ alignItems: 'center' }}>
                                        <Image style={{
                                            width: 80,
                                            height: 20

                                        }} source={logosacombank} />
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', paddingTop: 30 }}> SacomBank</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => handleSelect('Ngân hàng Quân Đội', logomb)}
                                >
                                    <View style={{ alignItems: 'center' }}>
                                        <Image style={{
                                            width: 60,
                                            height: 15
                                        }} source={logomb} />
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', paddingTop: 30 }}> VP Bank</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 30, paddingHorizontal: 20 }} >
                        <TouchableOpacity style={{
                            width: '90%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10
                        }}
                            onPress={() => handleSelect('NH SG Thương tín Sacombank', logosacombank)}
                        >
                            <Image style={styles.image3} source={logosacombank} />
                            <Text style={styles.textNH}>
                                NH SG Thương tín Sacombank
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => handleSelect('NH việt Nam thịnh Vượng', logovpbank)}>
                            <Image style={styles.iamge1} source={logovpbank} />
                            <Text style={styles.textNH}>
                                NH Việt Nam thịnh vượng
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => handleSelect('Ngân hàng Quân Đội', logomb)}>
                            <Image style={styles.image2} source={logomb} />
                            <Text style={styles.textNH}>
                                Ngân hàng Quân Đội
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => handleSelect('Ngân hàng Tiên phong', logotpbank)}>
                            <Image style={styles.image3} source={logotpbank} />
                            <Text style={styles.textNH}>
                                Ngân hàng Tiên Phong
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => handleSelect('NH SG Thương tín Sacombank', logosacombank)}
                        >
                            <Image style={styles.image3} source={logosacombank} />
                            <Text style={styles.textNH}>
                                NH SG Thương tín Sacombank
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => handleSelect('NH việt Nam thịnh Vượng', logovpbank)}>
                            <Image style={styles.iamge1} source={logovpbank} />
                            <Text style={styles.textNH}>
                                NH Việt Nam thịnh vượng
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => handleSelect('Ngân hàng Quân Đội', logomb)}>
                            <Image style={styles.image2}
                                source={logomb} />
                            <Text style={styles.textNH}>
                                Ngân hàng Quân Đội
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => handleSelect('Ngân hàng Tiên phong', logotpbank)}>
                            <Image style={styles.image3} source={logotpbank} />
                            <Text style={styles.textNH}>
                                Ngân hàng Tiên Phong
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => handleSelect('NH SG Thương tín Sacombank', logosacombank)}
                        >
                            <Image style={styles.image3} source={logosacombank} />
                            <Text style={styles.textNH}>
                                NH SG Thương tín Sacombank
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => handleSelect('NH việt Nam thịnh Vượng', logovpbank)}>
                            <Image style={styles.iamge1} source={logovpbank} />
                            <Text style={styles.textNH}>
                                NH Việt Nam thịnh vượng
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => handleSelect('Ngân hàng Quân Đội', logomb)}>
                            <Image style={styles.image2} source={logomb} />
                            <Text style={styles.textNH}>
                                Ngân hàng Quân Đội
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => handleSelect('Ngân hàng Tiên phong', logotpbank)}>
                            <Image style={styles.image3}
                                source={logotpbank} />
                            <Text style={styles.textNH}>
                                Ngân hàng Tiên Phong
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};
const styles = StyleSheet.create({
    button: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,

    },
    textNH: {
        fontSize: 14,
        paddingLeft: 10
    },
    iamge1: {
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
    }
})