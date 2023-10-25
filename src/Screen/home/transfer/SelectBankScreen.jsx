import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SelectBankScreen({ navigation, route }) {

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
                                <Ionicons name='close' color='black' size={30} />
                            </TouchableOpacity>
                            <View style={{
                                alignItems: 'center',
                                width: '100%', paddingRight: 40, justifyContent: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 22,
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

                            <Ionicons name='search' color='blue' size={30} />
                            <TextInput placeholder='Search here for Bank' placeholderTextColor='grey' fontSize={16} />
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
                                    onPress={() => handleSelect('NH Việt Nam thịnh vượng', require('../../../assets/logovpbank.png'))}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Image style={{
                                            width: 80,
                                            height: 15
                                        }} source={require('../../../assets/logovpbank.png')} />
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', paddingTop: 30 }}> VP Bank</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => handleSelect('NH sài gòn Thương tín Sacombank', require('../../../assets/logosacombank.png'))}
                                >
                                    <View style={{ alignItems: 'center' }}>
                                        <Image style={{
                                            width: 80,
                                            height: 20

                                        }} source={require('../../../assets/logosacombank.png')} />
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', paddingTop: 30 }}> SacomBank</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => handleSelect('Ngân hàng Quân Đội', require('../../../assets/logonganhangMB.png'))}
                                >
                                    <View style={{ alignItems: 'center' }}>
                                        <Image style={{
                                            width: 60,
                                            height: 15
                                        }} source={require('../../../assets/logonganhangMB.png')} />
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
                            onPress={() => handleSelect('NH SG Thương tín Sacombank', require('../../../assets/logosacombank.png'))}
                        >
                            <Image style={{
                                width: 80,
                                height: 30
                            }} source={require('../../../assets/logosacombank.png')} />
                            <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                NH SG Thương tín Sacombank
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10
                        }} onPress={() => handleSelect('NH việt Nam thịnh Vượng', require('../../../assets/logovpbank.png'))}>
                            <Image style={{
                                width: 80,
                                height: 15
                            }} source={require('../../../assets/logovpbank.png')} />
                            <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                NH Việt Nam thịnh vượng
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10
                        }} onPress={() => handleSelect('Ngân hàng Quân Đội', require('../../../assets/logonganhangMB.png'))}>
                            <Image style={{
                                width: 80,
                                height: 20
                            }} source={require('../../../assets/logonganhangMB.png')} />
                            <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                Ngân hàng Quân Đội
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10
                        }} onPress={() => handleSelect('Ngân hàng Tiên phong', require('../../../assets/logonganhangTPbank.png'))}>
                            <Image style={{
                                width: 80,
                                height: 30
                            }} source={require('../../../assets/logonganhangTPbank.png')} />
                            <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                Ngân hàng Tiên Phong
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10
                        }}
                            onPress={() => handleSelect('NH SG Thương tín Sacombank', require('../../../assets/logosacombank.png'))}
                        >
                            <Image style={{
                                width: 80,
                                height: 30
                            }} source={require('../../../assets/logosacombank.png')} />
                            <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                NH SG Thương tín Sacombank
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10
                        }} onPress={() => handleSelect('NH việt Nam thịnh Vượng', require('../../../assets/logovpbank.png'))}>
                            <Image style={{
                                width: 80,
                                height: 15
                            }} source={require('../../../assets/logovpbank.png')} />
                            <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                NH Việt Nam thịnh vượng
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10
                        }} onPress={() => handleSelect('Ngân hàng Quân Đội', require('../../../assets/logonganhangMB.png'))}>
                            <Image style={{
                                width: 80,
                                height: 20
                            }} source={require('../../../assets/logonganhangMB.png')} />
                            <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                Ngân hàng Quân Đội
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10
                        }} onPress={() => handleSelect('Ngân hàng Tiên phong', require('../../../assets/logonganhangTPbank.png'))}>
                            <Image style={{
                                width: 80,
                                height: 30
                            }} source={require('../../../assets/logonganhangTPbank.png')} />
                            <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                Ngân hàng Tiên Phong
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10
                        }}
                            onPress={() => handleSelect('NH SG Thương tín Sacombank', require('../../../assets/logosacombank.png'))}
                        >
                            <Image style={{
                                width: 80,
                                height: 30
                            }} source={require('../../../assets/logosacombank.png')} />
                            <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                NH SG Thương tín Sacombank
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10
                        }} onPress={() => handleSelect('NH việt Nam thịnh Vượng', require('../../../assets/logovpbank.png'))}>
                            <Image style={{
                                width: 80,
                                height: 15
                            }} source={require('../../../assets/logovpbank.png')} />
                            <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                NH Việt Nam thịnh vượng
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10
                        }} onPress={() => handleSelect('Ngân hàng Quân Đội', require('../../../assets/logonganhangMB.png'))}>
                            <Image style={{
                                width: 80,
                                height: 20
                            }} source={require('../../../assets/logonganhangMB.png')} />
                            <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                Ngân hàng Quân Đội
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10
                        }} onPress={() => handleSelect('Ngân hàng Tiên phong', require('../../../assets/logonganhangTPbank.png'))}>
                            <Image style={{
                                width: 80,
                                height: 30
                            }} source={require('../../../assets/logonganhangTPbank.png')} />
                            <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                Ngân hàng Tiên Phong
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};