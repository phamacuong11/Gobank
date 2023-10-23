import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, Picker, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import BottomNavigation from '../component/BottomNavigation';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';



const Tab = createBottomTabNavigator();



export default function CardsScreen({ navigation }) {

    const [ngnCards, setNgnCards] = useState(true)

    return (
        <View style={{ flex: 1, }}>
            <StatusBar
                barStyle='dark-content'
            />
            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', zIndex: 1, position: 'absolute', }}>

                    <View style={{
                        zIndex: 1,
                        width: 160,
                        height: 90,
                        backgroundColor: '#0540F21A',
                        borderBottomRightRadius: 80,
                        borderBottomLeftRadius: 80,
                        marignRight: 20

                    }}>
                        <View style={{
                            zIndex: 1,
                            width: 160,
                            height: 90,
                            backgroundColor: '#0540F21A',
                            borderBottomRightRadius: 80,
                            borderBottomLeftRadius: 80,
                            marginLeft: 250

                        }}>

                        </View>

                    </View>


                </View>
                {/* Cards */}
                <View  >
                    <View style={{
                        position: 'relative',
                        flexDirection: 'row',
                        paddingTop: 60,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20
                    }}>

                        <Ionicons name='information-circle-outline' color='black' size={30} />
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#0540F21A',
                            paddingHorizontal: 10,
                            paddingVertical: 1,
                            borderRadius: 10
                            ,
                            width: 230,
                            height: 30,
                            justifyContent: 'space-between'
                        }}>

                            <TouchableOpacity style={{
                                backgroundColor: 'white',
                                borderRadius: 10,
                                width: 100,
                                height: 26,
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                            }}>
                                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 13 }}> NGN Cards</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                borderRadius: 10,
                                width: 100,
                                height: 26,
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                            }}>
                                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 13 }}> USD Cards</Text>
                            </TouchableOpacity>


                        </View>
                        <Ionicons name='ellipsis-horizontal-outline' color='black' size={30} />
                    </View>
                    {/* 2 cards  */}
                    <View style={{ alignItems: 'center', paddingVertical: 20 }}>

                        <View style={{
                            width: 380,
                            height: 250,
                            backgroundColor: '#10142E',
                            borderRadius: 30,
                            paddingHorizontal: 20
                        }}>

                            <View style={{
                                paddingHorizontal: 10,
                                flexDirection: 'row',
                                marginTop: 40,
                                justifyContent: 'space-between'
                            }}>

                                <Ionicons name='logo-react' size={30} color='yellow' />
                                <View
                                    style={{
                                        backgroundColor: '#999999',
                                        width: 100,
                                        borderRadius: 8,
                                        height: 28,
                                        alignItems: 'center',
                                        justifyContent: 'flex-end'
                                    }}>
                                    <Text style={{ color: 'white' }}>02/25</Text>
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingVertical: 10,
                                marginTop: 50,
                                alignItems: 'center',
                            }}>

                                <Text style={{ color: 'white', fontSize: 25, }}> 1092 8738 8372 7685 </Text>
                                <Ionicons name='copy-outline' color='white' size={30} />
                            </View>
                            <Text style={{ color: 'white', fontSize: 18, }}> Adam J. Smith</Text>
                        </View>

                    </View>
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={{
                        paddingHorizontal: 20,
                        fontSize: 25,
                        fontWeight: 'bold',
                        paddingBottom: 0
                    }}> Yours Saved Cards</Text>
                </View>
                {/* --------------------------- 2 Cards---------------------------- */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    {/* *********************************Cards 1****************************** */}
                    <View style={{ alignItems: 'center', paddingVertical: 20, paddingHorizontal: 10 }}>

                        <View style={{
                            width: 190,
                            height: 140,
                            backgroundColor: '#10142E',
                            borderRadius: 30,
                            paddingHorizontal: 10
                        }}>

                            <View style={{
                                paddingHorizontal: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: 20
                            }}>

                                <Ionicons name='logo-react' size={15} color='yellow' />
                                <View
                                    style={{
                                        backgroundColor: '#999999',
                                        width: 60,
                                        borderRadius: 8,
                                        height: 15,
                                        alignItems: 'center',
                                        justifyContent: 'flex-end'
                                    }}>
                                    <Text style={{ color: 'white', fontSize: 12 }}>02/25</Text>
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: 30
                            }}>

                                <Text style={{ color: 'white', fontSize: 14, }}> 1092 8738 8372 7685 </Text>
                            </View>
                            <Text style={{ color: 'white', fontSize: 10, paddingTop: 5 }}> Adam J. Smith</Text>
                        </View>

                    </View>
                    {/* ***********************Cards 2********************************** */}
                    <View style={{ alignItems: 'center', paddingVertical: 20, paddingRight: 10 }}>

                        <View style={{
                            width: 190,
                            height: 140,
                            backgroundColor: '#FF00FF',
                            borderRadius: 30,
                            paddingHorizontal: 10
                        }}>

                            <View style={{
                                paddingHorizontal: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: 20
                            }}>

                                <Ionicons name='logo-react' size={15} color='yellow' />
                                <View
                                    style={{
                                        backgroundColor: '#999999',
                                        width: 60,
                                        borderRadius: 8,
                                        height: 15,
                                        alignItems: 'center',
                                        justifyContent: 'flex-end'
                                    }}>
                                    <Text style={{ color: 'white', fontSize: 12 }}>02/25</Text>
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: 30
                            }}>

                                <Text style={{ color: 'white', fontSize: 14, }}> 1092 8738 8372 7685 </Text>
                            </View>
                            <Text style={{ color: 'white', fontSize: 10, paddingTop: 5 }}> Adam J. Smith</Text>
                        </View>

                    </View>
                </View>
                <View style={{ paddingVertical: 60, paddingHorizontal: 20 }}>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: 'blue',
                        borderRadius: 30,
                        padding: 2
                    }} onPress={() => { navigation.navigate('AddNewCard') }}>
                        <Ionicons name='add-outline' color='blue' size={40} />
                        <Text style={{ fontSize: 20, color: 'blue' }}> Add New Cards</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}