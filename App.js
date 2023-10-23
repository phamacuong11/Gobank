import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigation from './src/navigation/AppNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer  >
      <AppNavigation />
    </NavigationContainer>
  );
}


