import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import StoreScreen from "../screens/StoreScreen";
import FruitShop from "../screens/FruitShop";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
//import StoreScreen from "../screens/StoreScreen";

const Stack = createNativeStackNavigator()

export default function AppNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="FruitShop">
                <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
                <Stack.Screen name="Welcome" options={{headerShown:false}} component={WelcomeScreen} />
                <Stack.Screen name="SignUp" options={{headerShown:false}} component={SignUpScreen} />
                <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
                <Stack.Screen name="Store" options={{headerShown:false}} component={StoreScreen} />
                <Stack.Screen name="FruitShop" options={{headerShown:false}} component={FruitShop} />
                <Stack.Screen name="Product" options={{headerShown:false}} component={ProductScreen} />
                <Stack.Screen name="Cart" options={{headerShown:false}} component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}