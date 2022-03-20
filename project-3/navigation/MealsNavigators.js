import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'
import { Platform, Text } from 'react-native'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'

const defaultStackNavOptions = options => {
    return ({
        ...options,
        headerTintColor: 'white',
        headerTitleAlign: 'center',
    })
}

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
        },
        CategoryMeals: {
            screen: CategoryMealsScreen,
        },
        MealDetail: {
            screen: MealDetailScreen,
        },
    },
    {
        defaultNavigationOptions: defaultStackNavOptions({
            headerStyle: {
                backgroundColor: 'blue',
            },
        })
    }
)

const FavMealsNavigator = createStackNavigator(
    {
        FavScreen: {
            screen: FavoritesScreen
        },
        MealDetail: {
            screen: MealDetailScreen
        }
    },
    {
        defaultNavigationOptions: defaultStackNavOptions({
            headerStyle: {
                backgroundColor: 'orange',
            }
        })
    }
)

const FiltersStackNavigator = createStackNavigator(
    {
        Filters: {
            screen: FiltersScreen
        }
    },
    {
        defaultNavigationOptions: defaultStackNavOptions({
            headerStyle: {
                backgroundColor: 'blue'
            }
        })
    }
)

const tabScreen = {
    Meals: {
        screen: MealsNavigator,
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
        screen: FavMealsNavigator,
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

const MealsTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(
        tabScreen,
        {
            activeColor: 'white',
            shifting: true,
        }
    )
    : createBottomTabNavigator(
        tabScreen,
        {
            tabBarOptions: {
                activeTintColor: 'blue',
                labelStyle: {
                    fontFamily: 'open-sans-bold'
                }
            }
        })

const MainNavigator = createDrawerNavigator(
    {
        MealsFav: {
            screen: MealsTabNavigator,
            navigationOptions: {
                drawerIcon: drawerInfo => {
                    return (
                        <Ionicons
                            name="restaurant"
                            size={25}
                            color={drawerInfo.tintColor}
                        />
                    )
                },
                drawerLabel: 'Meals'
            }
        },
        Filters: {
            screen: FiltersStackNavigator,
            navigationOptions: {
                drawerIcon: drawerInfo => {
                    return (
                        <Ionicons
                            name="filter"
                            size={25}
                            color={drawerInfo.tintColor}
                        />
                    )
                },
            }
        }
    },
    {
        contentOptions: {
            activeTintColor: 'blue',
            itemsContainerStyle: {
                marginTop: 45,
            },
            labelStyle: {
                fontFamily: 'open-sans-bold',
                fontSize: 16,
            },
        }
    }
)

export default createAppContainer(MainNavigator)