import { Text, Platform } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import MealsMainStackNavigator from "./MealsMainStackNavigator"
import FavMealsStackNavigator from "./FavMealsStackNavigator"

const tabScreen = {
    Meals: {
        screen: MealsMainStackNavigator,
        navigationOptions: {
            tabBarIcon: tabBarInfo => {
                return (
                    <Ionicons
                        name="fast-food"
                        size={25}
                        color={tabBarInfo.tintColor}
                    />
                )
            },
            tabBarLabel: Platform.OS === 'android'
                ? <Text style={{ fontFamily: 'open-sans-bold' }}>All Categories</Text>
                : 'All Categories',
            tabBarColor: 'blue',
        }
    },
    FavMeals: {
        screen: FavMealsStackNavigator,
        navigationOptions: {
            tabBarIcon: tabBarInfo => {
                return (
                    <Ionicons
                        name="star"
                        size={25}
                        color={tabBarInfo.tintColor}
                    />
                )
            },
            tabBarLabel: Platform.OS === 'android'
                ? <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites</Text>
                : 'Favorites',
            tabBarColor: 'orange',
        }
    }
}

export default tabScreen