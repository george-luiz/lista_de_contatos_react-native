import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../home/home";
import Contato from "../contato/Contato";
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();


export default function AppRotas() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Contato" component={Contato} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}