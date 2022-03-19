import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { MEALS } from '../data/dummy-data'
import HeaderTitleText from '../components/HeaderTitleText'
import CustomHeaderButton from '../components/CustomHeaderButton'

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return (
        <View style={styles.screen}>
            <Text>
                {selectedMeal.title}
            </Text>
            <Button title='Save all and go back to Categories' onPress={() => {
                props.navigation.popToTop()
            }} />
        </View>
    )
}

MealDetailScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return {
        headerTitle: () => {
            return (
                <HeaderTitleText>
                    {selectedMeal.title}
                </HeaderTitleText>
            )
        },
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title='Favorite'
                        iconName='ios-star'
                        onPress={() => { }}
                    />
                </HeaderButtons>
            )
        }
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
})

export default MealDetailScreen