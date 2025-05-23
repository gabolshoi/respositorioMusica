import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaLogin from './src/views/LoginScreen';
import TelaHome from './src/views/TelaHome';
import TelaFav from './src/views/TelaFav';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tela de Login'>
        <Stack.Screen name='Tela de Login' component={TelaLogin} />
        <Stack.Screen name='Home' component={TelaHome} />
        <Stack.Screen name='Favorite' component={TelaFav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}