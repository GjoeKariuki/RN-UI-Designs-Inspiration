import React, { useState } from "react";
import { View, Text, ScrollView,TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from 'expo-linear-gradient'
import { ArrowDownTrayIcon, Bars3CenterLeftIcon, BellIcon } from 'react-native-heroicons/solid'
import { storeColors } from "../theme";
import GradientButton from "../components/gradientButton";
import GameCard from "../components/gameCard";



const categories = ['Action','Family','Puzzle','Adventure','Racing','Education','Sci-Fi','Board-Games','Mind-Games','Finance', 'Work-Out','Others']
const featured = [
    {
        id:1,title:"Zooba",image:require("../../assets/imagos/zooba.png"),
        downloads: '200K', stars: 4
    },
    {
        id:2, title:"Subway Surfer", image: require("../../assets/imagos/subway.png"),
        downloads: '5M', stars: 4
    },
    {
        id:3, title:"Free Fire", image:require("../../assets/imagos/freeFire.png"),
        downloads: '100M', stars:3
    },
    {
        id:4, title:"Alto's Adventure", image:require("../../assets/imagos/altosAdventure.png"),
        downloads: '20K', stars:4
    }
]

const games = [
    {
        id: 1,
        title: 'Shadow Fight',
        image: require('../../assets/imagos/shadowFight.png'),
        downloads: '20M',
        stars: 4.5
    },
    {
        id: 2,
        title: 'Valor Arena',
        image: require('../../assets/imagos/valorArena.png'),
        downloads: '10k',
        stars: 3.4
    },
    {
        id: 3,
        title: 'Frag',
        image: require('../../assets/imagos/frag.png'),
        downloads: '80k',
        stars: 4.6
    },
    {
        id: 4,
        title: "Zooba Wildlife",
        image: require('../../assets/imagos/zoobaGame.png'),
        downloads: '40k',
        stars: 3.5
    },
    {
        id: 5,
        title: "Clash of Clans",
        image: require('../../assets/imagos/clashofclans.png'),
        downloads: '20k',
        stars: 4.2
    },
]
export default function StoreScreen(){

    const [activeCategory, setActiveCategory ] = useState('Action')
    const [selectedGame, setSelectedGame] = useState(null)
    const [scrollHeight,setScrollHeight] = useState(true)

    return(
        <LinearGradient 
            colors={['rgba(58,131,244,0.4)','rgba(9,181,211,0.4)']}
            className="w-full flex-1"
        >
            <SafeAreaView>
                <View className="container">
                    <View className="flex-row justify-between items-center px-4">
                        <Bars3CenterLeftIcon color={storeColors.text} size="30" />
                        <BellIcon color={storeColors.text} size="30" />
                    </View>
                    {/* categories */}
                    <View className="mt-3 space-y-4">
                        <Text style={{color:storeColors.text}} className="ml-4 text-3xl font-bold">Browse Games</Text>
                        <View className="pl-4">
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {
                                    categories.map(cat => {
                                        if(cat==activeCategory){
                                            // show gradient category
                                            return(
                                                <GradientButton key={cat} containerClass="mr-2" value={cat}/>
                                            )
                                        } else {
                                            // show normal category
                                            return (
                                                <TouchableOpacity 
                                                    key={cat} 
                                                    className="bg-blue-200 p-3 px-4 rounded-full mr-2"
                                                    onPress={()=>setActiveCategory(cat)}
                                                >
                                                    <Text>{cat}</Text>
                                                </TouchableOpacity>
                                            )
                                        }
                                        
                                    })
                                }
                            </ScrollView>
                        </View>
                    </View>

                    {/* featured row */}
                    <View className="mt-3 space-y-4">
                        <Text style={{color:storeColors.text}}
                            className="ml-4 text-lg font-bold"
                        >
                            Featured Games
                        </Text>
                        <View className="pl-4">
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {
                                    featured.map((item,index) => {
                                        return(
                                            <GameCard key={index} game={item} />
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                    </View>
                {/* top action games list  */}
                <View className="mt-3">
                    <View className="flex-row justify-between items-center mb-2">
                        <Text style={{ color: storeColors.text }}
                            className="ml-4 text-lg font-bold"
                        >
                            Top Action Games
                        </Text>
                        <TouchableOpacity className="mr-4" onPress={()=>setScrollHeight(!scrollHeight)}>
                            <Text className="text-blue-600 font-bold">{scrollHeight? 'See All':'Collapse'}</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={scrollHeight? {height:320}:{height:'100%'}} showsVerticalScrollIndicator={true}>
                        {
                            games.map((game,index) => {
                                let bg = game.id ==selectedGame?'rgba(255,255,255,0.4)':'transparent'
                                return(
                                    <TouchableOpacity
                                        onPress={()=> setSelectedGame(game.id)}
                                        className="mx-4 p-2 mb-2 flex-row rounded-3xl"
                                        key={index}
                                        style={{backgroundColor:bg}}
                                    >
                                        <Image source={game.image} style={{width:80, height:80}} className="rounded-2xl"/>
                                        <View className="flex-1 flex justify-center pl-3 space-y-3">
                                            <Text className="font-semibold" style={{color:storeColors.text}}>{game.title}</Text>
                                            <View className="flex-row space-x-3">
                                                <View className="flex-row space-x-2">
                                                    <Image className="h-4 w-4 opacity-80" source={require('../../assets/imagos/fullStar.png')}/>
                                                    <Text className="text-xs text-gray-700">{game.stars} stars</Text>
                                                </View>
                                                <View className="flex-row space-x-2">
                                                    <ArrowDownTrayIcon size={15} color="darkblue" />
                                                    <Text className="text-xs text-gray-700">{game.downloads} stars</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View>

                                        </View>
                                        <View className="flex justify-center items-center">
                                            <GradientButton value="play" buttonClass="py-2 px-5" />
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}