import React, { useState } from "react";
import {Bars3CenterLeftIcon, ShoppingCartIcon} from 'react-native-heroicons/solid'
import { SafeAreaView } from "react-native-safe-area-context";
import { View,Text, TouchableOpacity,ScrollView } from "react-native";
import { themeColors } from "../theme";
import FruitCard from "../components/fruitCard";
import FruitCardSales from "../components/FruitCardSales";
import { useNavigation } from "@react-navigation/native";

const categories = [
    "Oranges","Bananas","Pineapple","Apple","Cherry"
]

const featuredFruits = [
    {
      name: 'Australian Orange',
      price: "12.30",
      stars: 4,
      desc: 'Sweet and juicy',
      shadow: 'orange',
      image: require('../../assets/imagos/orange.png'),
      color: opacity => `rgba(251, 216, 146, ${opacity})`
    },
    {
      name: 'Flesh Nectari',
      shadow: 'red',
      price: "12",
      stars: 3,
      desc: 'Sweet and juicy',
      image: require('../../assets/imagos/peach.png'),
      color: opacity => `rgba(255, 170, 157, ${opacity})`
    },
    
    {
      name: 'Black Grapes',
      price: "40",
      stars: 4,
      desc: 'Sweet and juicy',
      shadow: 'purple',
      image: require('../../assets/imagos/grapes.png'),
      color: opacity => `rgba(214, 195, 246, ${opacity})`
    },
    
    
    {
      name: 'Red Grapefruit',
      price: "30",
      stars: 4,
      desc: 'Sweet and juicy',
      shadow: 'red',
      image: require('../../assets/imagos/redOrange.png'),
      color: opacity => `rgba(255, 163, 120, ${opacity})`
    },
    {
      name: 'Green Apple',
      price: "10.5",
      stars: 4,
      desc: 'Sweet and juicy',
      shadow: 'green',
      image: require('../../assets/imagos/greenApple.png'),
      color: opacity => `rgba(139, 243, 139, ${opacity})`
    },
    
    
  ]



export default function FruitShop(){

    const [activeCategory,setActiveCategory] = useState('Oranges')
    const navigation = useNavigation()

    return(
        <SafeAreaView className="flex-1 bg-orange-50">
            {/* top bar */}
            <View className="mx-5 flex-row justify-between items-center">

                <Bars3CenterLeftIcon size={30} color="black" />
                <TouchableOpacity
                    onPress={()=>navigation.navigate("Cart")}
                    className="p-2 rounded-xl bg-orange-100">
                    <ShoppingCartIcon size={25} color="orange" />
                </TouchableOpacity>
            </View>
            {/* categories */}
            <View>
                <Text className="text-2xl tracking-widest font-medium ml-5" style={{color:themeColors.text}}>Seasonal</Text>
                <Text className="text-3xl font-semibold ml-5" style={{color:themeColors.text}}>Fruits & Vegetables</Text>
                <ScrollView horizontal className="mt-8 px-5" showsHorizontalScrollIndicator={false}>
                    {
                        categories.map((item,index) => {
                            let isActive = item == activeCategory
                            let textClass = `text-xl ${isActive? ' font-bold':''}`
                            return(
                                <TouchableOpacity className="relative mr-8" key={index} onPress={()=>setActiveCategory(item)}> 
                                    <Text style={{color:themeColors.text}} className={textClass}>{item}</Text>
                                    {
                                        isActive? (
                                            <Text className="font-extrabold text-orange-400 mt-1 ml-2">__ ___</Text>
                                        ):null
                                    }
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
            {/* fruits carousel */}
            <View className="mt-8">
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        featuredFruits.map((fruit,index) => {
                            return(
                            <FruitCard  fruit={fruit} key={index}/>)
                        })
                    }                 
                </ScrollView>              
            </View> 
            {/* hot sales */}
            <View className="mt-8 pl-5 space-y-1">
                <Text className="text-xl font-bold" style={{color:themeColors.text}}>Hot Sales

                </Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{overflow:'visible'}}

                >
                    {
                        [...featuredFruits].reverse().map((item,index) => {
                            return(
                                <FruitCardSales fruit={item} key={index} />
                            )
                            
                        })
                    }

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}