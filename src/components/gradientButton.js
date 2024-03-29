import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity } from "react-native";



export default function GradientButton(props) {
    return (
        <LinearGradient
            colors={['rgba(9,181,211,0.9','rgba(58,131,244,0.9)','rgba(8,11,24,0.9)']}
            end={{x:1,y:1}}
            start={{x:0.1,y:0.2}}
            className={`rounded-full ${props.containerClass}`}
        >
            <TouchableOpacity className={`p-3 px-4 ${props.buttonClass}`}>
                <Text className="text-white font-bold">{props.value}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}   