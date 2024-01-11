import { StatusBar } from "expo-status-bar";
import { View,Text,StyleSheet,SafeAreaView } from "react-native";
import AppNavigator from "./src/navigations/appNavigation";


export default function App(){
  return (
    <AppNavigator />
  )
}