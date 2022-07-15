import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import AppRotas from './src/components/appRotas/AppRotas';
import Contato from './src/components/contato/Contato';
import Home from './src/components/home/home';


export default function App() {
  return <AppRotas/>
}


{/* <SafeAreaView>
  <StatusBar />
    <AppRotas />
     <Home />  
     <Contato /> 
</SafeAreaView> */}