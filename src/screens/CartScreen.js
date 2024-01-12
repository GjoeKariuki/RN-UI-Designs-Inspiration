import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ChevronLeftIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'
import FruitCart from '../components/FruitCart'


const cartItems = [
    {
      name: 'Australian Orange',
      price: "12.30",
      qty: 4,
      desc: 'Sweet and juicy',
      shadow: 'orange',
      image: require('../../assets/imagos/orange.png'),
      color: opacity => `rgba(251, 216, 146, ${opacity})`
    },
    {
      name: 'Flesh Nectari',
      shadow: 'red',
      price: "12",
      qty: 3,
      desc: 'Sweet and juicy',
      image: require('../../assets/imagos/peach.png'),
      color: opacity => `rgba(255, 170, 157, ${opacity})`
    },
    
    {
      name: 'Black Grapes',
      price: "40",
      qty: 2,
      desc: 'Sweet and juicy',
      shadow: 'purple',
      image: require('../../assets/imagos/grapes.png'),
      color: opacity => `rgba(214, 195, 246, ${opacity})`
    },
    {
      name: 'Green Apple',
      price: "10.5",
      qty: 2,
      desc: 'Sweet and juicy',
      shadow: 'green',
      image: require('../../assets/imagos/greenApple.png'),
      color: opacity => `rgba(139, 243, 139, ${opacity})`
    },
    
    
  ]


export default function CartScreen() {

    const navigation = useNavigation()

  return (
    <SafeAreaView className="flex-1 flex justify-between bg-orange-50">
        <View className="flex-row justify-start mx-5">
            <TouchableOpacity 
                style={{backgroundColor:'rgba(255,255,255,0.2)'}} 
                onPress={()=> navigation.goBack()} 
                className="border border-gray-300 rounded-xl">
                <ChevronLeftIcon size={30} color="gray" />
            </TouchableOpacity>
        </View>  
        <View className="mx-5 flex-1">
            <Text style={{color:themeColors.text}} className="text-2xl py-10">Your<Text className="font-bold">Cart</Text></Text>   
            <View>
                {
                    cartItems.map((item,index)=> {
                        return(
                            <FruitCart fruit={item} key={index} />
                        )
                    })
                }
            </View> 
            <View className="flex-row justify-end py-6 pb-10">
                <Text className="text-lg">Total Price:<Text className="font-bold text-yellow-500">420.00</Text></Text>
            </View>
            <View className="flex-row justify-center mx-7">
                <TouchableOpacity
                    style={{backgroundColor:'orange',
                            opacity:0.8,
                            shadowColor:'orange',
                            shadowRadius:25,
                            shadowOffset:{width:0,height:15},
                            shadowOpacity:0.4}}
                    className="p-3 flex-1 rounded-xl"
                >
                    <Text className="text-xl text-center text-white font-bold">Payment</Text>
                </TouchableOpacity>
            </View>
        </View>  
    </SafeAreaView>
  )
}