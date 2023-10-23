import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SelectProviderScreen({ navigation, route }) {



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
                            <Text style={{
                                fontSize: 22,
                                color: 'black',
                                marginLeft: 90,
                                fontWeight: 'bold'
                            }}> Select Provider</Text>
                        </View>
                    </View>
                    {/* ******Search Bar*********** */}
                    <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 40 }} >
                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            backgroundColor: '#CCFFFF',
                            padding: 10,
                            borderRadius: 20
                        }}>

                            <Ionicons name='search' color='blue' size={30} />
                            <TextInput placeholder='Search here for Provider'
                                placeholderTextColor='grey'
                                fontSize={14} />
                        </View>
                    </View>

                    <View>
                        <View style={{ paddingVertical: 0, paddingHorizontal: 20 }} >
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 20
                            }}
                                onPress={() => handleSelect('NH sài gòn Thương tín Sacombank', require('../assets/logosacombank.png'))}
                            >
                                <Image style={{
                                    width: 80,
                                    height: 30
                                }} source={require('../assets/logosacombank.png')} />
                                <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                    NH sài gòn Thương tín Sacombank
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 20
                            }} onPress={() => handleSelect('NH việt Nam thịnh Vượng', require('../assets/logovpbank.png'))}>
                                <Image style={{
                                    width: 80,
                                    height: 15
                                }} source={require('../assets/logovpbank.png')} />
                                <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                    NH Việt Nam thịnh vượng
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 20
                            }} onPress={() => handleSelect('Ngân hàng Quân Đội', require('../assets/logonganhangMB.png'))}>
                                <Image style={{
                                    width: 80,
                                    height: 20
                                }} source={require('../assets/logonganhangMB.png')} />
                                <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                    Ngân hàng Quân Đội
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 20
                            }} onPress={() => handleSelect('Ngân hàng Tiên phong', require('../assets/logonganhangTPbank.png'))}>
                                <Image style={{
                                    width: 80,
                                    height: 30
                                }} source={require('../assets/logonganhangTPbank.png')} />
                                <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                    Ngân hàng Tiên Phong
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 20
                            }}
                                onPress={() => handleSelect('NH sài gòn Thương tín Sacombank', require('../assets/logosacombank.png'))}
                            >
                                <Image style={{
                                    width: 80,
                                    height: 30
                                }} source={require('../assets/logosacombank.png')} />
                                <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                    NH sài gòn Thương tín Sacombank
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 20
                            }} onPress={() => handleSelect('NH việt Nam thịnh Vượng', require('../assets/logovpbank.png'))}>
                                <Image style={{
                                    width: 80,
                                    height: 15
                                }} source={require('../assets/logovpbank.png')} />
                                <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                    NH Việt Nam thịnh vượng
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 20
                            }} onPress={() => handleSelect('Ngân hàng Quân Đội', require('../assets/logonganhangMB.png'))}>
                                <Image style={{
                                    width: 80,
                                    height: 20
                                }} source={require('../assets/logonganhangMB.png')} />
                                <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                    Ngân hàng Quân Đội
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 20
                            }} onPress={() => handleSelect('Ngân hàng Tiên phong', require('../assets/logonganhangTPbank.png'))}>
                                <Image style={{
                                    width: 80,
                                    height: 30
                                }} source={require('../assets/logonganhangTPbank.png')} />
                                <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                    Ngân hàng Tiên Phong
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 20
                            }}
                                onPress={() => handleSelect('NH sài gòn Thương tín Sacombank', require('../assets/logosacombank.png'))}
                            >
                                <Image style={{
                                    width: 80,
                                    height: 30
                                }} source={require('../assets/logosacombank.png')} />
                                <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                    NH sài gòn Thương tín Sacombank
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 20
                            }} onPress={() => handleSelect('NH việt Nam thịnh Vượng', require('../assets/logovpbank.png'))}>
                                <Image style={{
                                    width: 80,
                                    height: 15
                                }} source={require('../assets/logovpbank.png')} />
                                <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                    NH Việt Nam thịnh vượng
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 20
                            }} onPress={() => handleSelect('Ngân hàng Quân Đội', require('../assets/logonganhangMB.png'))}>
                                <Image style={{
                                    width: 80,
                                    height: 20
                                }} source={require('../assets/logonganhangMB.png')} />
                                <Text style={{ fontSize: 16, paddingLeft: 30 }}>
                                    Ngân hàng Quân Đội
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 20
                            }} onPress={() => handleSelect('Ngân hàng Tiên phong', require('../assets/logonganhangTPbank.png'))}>
                                <Image style={{
                                    width: 80,
                                    height: 30
                                }} source={require('../assets/logonganhangTPbank.png')} />
                                <Text style={{ fontSize: 16, paddingLeft: 30 }}>
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