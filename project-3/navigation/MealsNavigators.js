import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitleStyle: {
                textAlign: 'center'
            },
        },
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: {
        screen: MealDetailScreen,
    },
},
    {   
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'blue'
            },
            headerTintColor: 'white',
            headerLayoutAlign: 'left'
        }
    }
)

export default createAppContainer(MealsNavigator)