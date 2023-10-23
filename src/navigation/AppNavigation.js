import React from 'react'
import {
    HomeScreen,
    BillsScreen,
    CableSubscriptionScreen,
    SelectPackageScreen,
    SelectProviderScreen,
    ConfirmDetailsScreen,
    EnterYoursCode,
    PaymentSuccessScreen,
    SelectBankScreen,
    SendToBankScreen,
    SendToBankScreen1,
    TransactionScreen,
    TransferAmountScreen,
    TransferScreen,

} from '../Screen/home/Index'
import { AddNewCardScreen, PinAddNewCardScreen } from '../Screen/card/Index'
import { WelcomeScreen, LoginScreen, SignUpScreen } from '../Screen/auth/Index'
import { MyProfile, ProfileScreen } from '../Screen/profile/Index'
import { MoreScreen } from '../Screen/more/Index'
import { DataScreen } from '../Screen/data/Index'
import { NotificationsScreen } from '../Screen/notifycation/Index'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import BottomNavigation from '../component/BottomNavigation'




const Stack = createNativeStackNavigator()


export default function AppNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Signup" component={SignUpScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="MyProfile" component={MyProfile} />
            <Stack.Screen name="Bottom" component={BottomNavigation} />
            <Stack.Screen name="Transaction" component={TransactionScreen} />
            <Stack.Screen name="More" component={MoreScreen} />
            <Stack.Screen name="Notifi" component={NotificationsScreen} />
            <Stack.Screen name="Transfer" component={TransferScreen} />
            <Stack.Screen name="SendtoBank" component={SendToBankScreen} />
            <Stack.Screen name="SendtoBank1" component={SendToBankScreen1} />
            <Stack.Screen name="SelectBanks" component={SelectBankScreen} />
            <Stack.Screen name="TransferAmount" component={TransferAmountScreen} />
            <Stack.Screen name="ConfirmDetails" component={ConfirmDetailsScreen} />
            <Stack.Screen name="EnterYoursCode" component={EnterYoursCode} />
            <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
            <Stack.Screen name="Bils" component={BillsScreen} />
            <Stack.Screen name="CableSub" component={CableSubscriptionScreen} />
            <Stack.Screen name="SelectPackage" component={SelectPackageScreen} />
            <Stack.Screen name="SelectProvider" component={SelectProviderScreen} />
            <Stack.Screen name="Data" component={DataScreen} />
            <Stack.Screen name="AddNewCard" component={AddNewCardScreen} />
            <Stack.Screen name="PinAddNewCard" component={PinAddNewCardScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})