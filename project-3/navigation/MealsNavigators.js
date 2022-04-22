import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'

import MealsTabNavigator from './MealsTabNavigator'
import FiltersStackNavigator from './FiltersStackNavigator'

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