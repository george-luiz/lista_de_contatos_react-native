import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../home/home";
import Contato from "../contato/Contato";
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();


export default function AppRotas() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTitleAlign: 'center',
                headerTitleStyle: {fontSize: 25, color: "white"},
                headerStyle: {backgroundColor: "#4169E1"},
                statusBarStyle: 'dark',
                headerTintColor: "white"
            }}>

                <Stack.Screen name="Contatos"  component={Home} />
                <Stack.Screen name="Criar contato" component={Contato} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}