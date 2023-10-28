import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, Picker, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize'



const Tab = createBottomTabNavigator();



export default function CardsScreen({ navigation }) {

    const [ngnCards, setNgnCards] = useState(true)

    return (
        <View style={{ flex: 1, }}>
            <StatusBar
                barStyle='dark-content'
            />
            <ScrollView>
                <View style={styles.viewHeader}>

                    <View style={styles.viewHeader1}>
                        <View style={styles.viewHeader2}>

                        </View>

                    </View>


                </View>
                {/* Cards */}
                <View  >
                    <View style={styles.cardView}>

                        <Ionicons name='information-circle-outline' color='black' size={RFPercentage(4)} />
                        <View style={styles.cardView1}>

                            <TouchableOpacity style={styles.cardButton1}>
                                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: RFPercentage(2.5) }}> NGN Cards</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardButton2}>
                                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: RFPercentage(2.5) }}> USD Cards</Text>
                            </TouchableOpacity>


                        </View>
                        <Ionicons name='ellipsis-horizontal-outline' color='black' size={RFPercentage(5)} />
                    </View>
                    {/* cards  */}
                    <View style={{ alignItems: 'center', paddingVertical: 20 }}>

                        <View style={styles.viewMain}>

                            <View style={styles.viewMain1}>

                                <Ionicons name='logo-react' size={30} color='yellow' />
                                <View
                                    style={styles.viewMain2}>
                                    <Text style={{ color: 'white' }}>02/25</Text>
                                </View>
                            </View>
                            <View style={styles.viewName}>

                                <Text style={{ color: 'white', fontSize: RFPercentage(4.5), }}> 1092 8738 8372 7685 </Text>
                                <Ionicons name='copy-outline' color='white' size={30} />
                            </View>
                            <Text style={{ color: 'white', fontSize: RFPercentage(3), }}> Adam J. Smith</Text>
                        </View>

                    </View>
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={styles.textCard}> Yours Saved Cards</Text>
                </View>
                {/* --------------------------- 2 Cards---------------------------- */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    {/* *********************************Cards 1****************************** */}
                    <View style={{ alignItems: 'center', paddingVertical: 20, paddingHorizontal: 10, flex: 1 }}>

                        <View style={styles.viewCard1}>

                            <View style={styles.viewCard2}>

                                <Ionicons name='logo-react' size={15} color='yellow' />
                                <View style={styles.viewCard3}>
                                    <Text style={{ color: 'white', fontSize: 12 }}>02/25</Text>
                                </View>
                            </View>
                            <View style={styles.viewCard4}>

                                <Text style={{ color: 'white', fontSize: 12, paddingLeft: 5 }}> 1092 8738 8372 7685 </Text>
                            </View>
                            <Text style={{ color: 'white', fontSize: 10, paddingTop: 5, paddingLeft: 5 }}> Adam J. Smith</Text>
                        </View>

                    </View>
                    {/* ***********************Cards 2********************************** */}
                    <View style={{ alignItems: 'center', paddingVertical: 20, paddingRight: 10, flex: 1 }}>

                        <View style={styles.viewCard5}>

                            <View style={styles.viewCard6}>

                                <Ionicons name='logo-react' size={15} color='yellow' />
                                <View
                                    style={styles.viewCard7}>
                                    <Text style={{ color: 'white', fontSize: 12 }}>02/25</Text>
                                </View>
                            </View>
                            <View style={styles.viewCard8}>

                                <Text style={{ color: 'white', fontSize: 12, paddingLeft: 5 }}> 1092 8738 8372 7685 </Text>
                            </View>
                            <Text style={{ color: 'white', fontSize: 10, paddingTop: 5, paddingLeft: 5 }}> Adam J. Smith</Text>
                        </View>

                    </View>
                </View>
                <View style={{ paddingVertical: 60, paddingHorizontal: 20 }}>
                    <TouchableOpacity style={styles.buttonAddNewcard}
                        onPress={() => { navigation.navigate('AddNewCard') }}>
                        <Ionicons name='add-outline' color='#0540F2' size={RFPercentage(6)} />
                        <Text style={{ fontSize: RFPercentage(4), color: '#0540F2' }}> Add New Cards</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    // Header
    viewHeader: {
        zIndex: 1,
        position: 'absolute',
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    viewHeader1: {
        zIndex: 1,
        width: 160,
        height: 90,
        backgroundColor: '#0540F21A',
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,
        marignRight: 20
    },
    viewHeader2: {
        zIndex: 1,
        width: 160,
        height: 90,
        backgroundColor: '#0540F21A',
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,
        marginLeft: 250

    },
    // Card
    cardView: {
        position: 'relative',
        flexDirection: 'row',
        paddingTop: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    cardView1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0540F21A',
        paddingHorizontal: 10,
        paddingVertical: 1,
        borderRadius: 10,
        width: 230,
        height: 30,
        justifyContent: 'space-between'
    },
    cardButton1: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: 100,
        height: 26,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    cardButton2: {
        borderRadius: 10,
        width: 100,
        height: 26,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    viewMain: {
        width: "100%",
        height: 200,
        backgroundColor: '#10142E',
        borderRadius: 30,
        paddingHorizontal: 20
    },
    viewMain1: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    viewMain2: {
        backgroundColor: '#999999',
        width: 100,
        borderRadius: 8,
        height: 28,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    // View Name
    viewName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginTop: 50,
        alignItems: 'center',
    },
    textCard: {
        paddingHorizontal: 20,
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        paddingBottom: 0
    },
    // Card 1
    viewCard1: {
        width: "100%",
        height: 120,
        backgroundColor: '#10142E',
        borderRadius: 30,
    },
    viewCard2: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    viewCard3: {
        backgroundColor: '#999999',
        width: 60,
        borderRadius: 8,
        height: 15,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    viewCard4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    },
    // Card 2
    viewCard5: {
        width: '100%',
        height: 120,
        backgroundColor: '#dd75f0',
        borderRadius: 30,
    },
    viewCard6: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    viewCard7: {
        backgroundColor: '#999999',
        width: 60,
        borderRadius: 8,
        height: 15,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    viewCard8: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    },
    // Button Add Newcard
    buttonAddNewcard: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#0540F2',
        borderRadius: 30,
        padding: 2,
        paddingVertical: 5
    }
})