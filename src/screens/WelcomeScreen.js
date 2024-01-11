import React from "react";
import { View,Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";



export default function WelcomeScreen() {

    const navigation = useNavigation()
    return (
        <SafeAreaView className="flex-1" style={{backgroundColor:themeColors.bg}}>
            <View className="flex-1 flex justify-around my-4">
                <Text className="text-white font-bold text-4xl text-center">
                    Lets Get Started
                </Text>
                <View className="flex-row justify-center">
                    <Image style={{width:350, height:350}}
                    source={require("../../assets/imagos/welcome.png")} />
                </View>
                <View className="space-y-4 ">
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('SignUp')}
                        className="py-3 bg-yellow-400 mx-7 rounded-xl">
                        <Text className="text-xl font-bold text-center text-gray-700">Sign Up</Text>
                    </TouchableOpacity>
                    <View className="flex-row flex justify-center items-center">
                        <Text className="text-white font-semibold">Already have an account?</Text>
                        <TouchableOpacity 
                            onPress={()=> navigation.navigate('Login')}
                            className="ml-2">
                            <Text className="text-yellow-400 font-semibold text-xl">Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}