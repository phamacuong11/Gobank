import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/Screen/WelcomeScreen';
import LoginScreen from './src/Screen/LoginScreen';
import SignUpScreen from './src/Screen/SignUpScreen';
import HomeScreen from './src/Screen/HomeScreen';
import BottomNavigation from './src/component/BottomNavigation';
import TransactionScreen from './src/Screen/TransactionScreen';
import MoreScreen from './src/Screen/MoreScreen';
import NotificationsScreen from './src/Screen/NotificationsScreen';
import TransferScreen from './src/Screen/TransferScreen';
import SendToBankScreen from './src/Screen/SendToBankScreen';
import SelectBankScreen from './src/Screen/SelectBankScreen';
import SendToBankScreen1 from './src/Screen/SendToBankScreen1';
import TransferAmountScreen from './src/Screen/TransferAmountScreen';
import ConfirmDetailsScreen from './src/Screen/ConfirmDetailsScreen';
import EnterYoursCode from './src/Screen/EnterYoursCode';
import PaymentSuccessScreen from './src/Screen/PaymentSuccessScreen';
import BillsScreen from './src/Screen/BillsScreen';
import CableSubscriptionScreen from './src/Screen/CableSubscriptionScreen';
import SelectProviderScreen from './src/Screen/SelectProviderScreen';
import DataScreen from './src/Screen/DataScreen';
import AddNewCardScreen from './src/Screen/AddNewCardScreen';
import PinAddNewCardScreen from './src/Screen/PinAddNewCardScreen';
import ProfileScreen from './src/Screen/ProfileScreen';
import MyProfile from './src/Screen/MyProfile';
import SelectPackageScreen from './src/Screen/SelectPackageScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MyProfile" component={MyProfile} options={{ headerShown: false }} />
        <Stack.Screen name="Bottom" component={BottomNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="Transaction" component={TransactionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="More" component={MoreScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Notifi" component={NotificationsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Transfer" component={TransferScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SendtoBank" component={SendToBankScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SendtoBank1" component={SendToBankScreen1} options={{ headerShown: false }} />
        <Stack.Screen name="SelectBanks" component={SelectBankScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TransferAmount" component={TransferAmountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConfirmDetails" component={ConfirmDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EnterYoursCode" component={EnterYoursCode} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Bils" component={BillsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CableSub" component={CableSubscriptionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SelectPackage" component={SelectPackageScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SelectProvider" component={SelectProviderScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Data" component={DataScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddNewCard" component={AddNewCardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PinAddNewCard" component={PinAddNewCardScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


