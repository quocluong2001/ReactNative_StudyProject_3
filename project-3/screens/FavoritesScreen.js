import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { MEALS } from '../data/dummy-data'
import MealsList from '../components/MealsList'
import HeaderTitleText from '../components/HeaderTitleText'
import CustomHeaderButton from '../components/CustomHeaderButton'

const FavoritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return (
        <MealsList
            listData={favMeals}
            navigation={props.navigation}
        />
    )
}

FavoritesScreen.navigationOptions = navigationData => {
    return {
        headerTitle: () => {
            return (
                <HeaderTitleText>
                    Your Favorites
                </HeaderTitleText>
            )
        },
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title='Menu'
                        iconName='menu'
                        iconSize={25}
                        onPress={() => {
                            navigationData.navigation.toggleDrawer()
                        }}
                    />
                </HeaderButtons>
            )
        }
    }
}

export default FavoritesScreen