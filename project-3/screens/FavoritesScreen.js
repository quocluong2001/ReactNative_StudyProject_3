import React from 'react'
import { View, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import MealsList from '../components/MealsList'
import HeaderTitleText from '../components/HeaderTitleText'
import CustomHeaderButton from '../components/CustomHeaderButton'
import DefaultText from '../components/DefaultText'

const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals)

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.noFavScreen}>
                <DefaultText>There are no favorite meals yet.</DefaultText>
            </View>
        )
    }

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

const styles = StyleSheet.create({
    noFavScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default FavoritesScreen