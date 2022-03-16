import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('CategoryId')
    const selectedCategory = CATEGORIES.find(category => category.id === catId)

    return (
        <View style={styles.screen}>
            <Text>
                Hello from CategoryMealsScreen!
            </Text>
            <Text>
                {selectedCategory.title}
            </Text>
            <Button title='Go to meal detail screen' onPress={() => {
                props.navigation.navigate({ routeName: 'MealDetail' })
            }} />
            <Button title='Go back and save' onPress={() => {
                props.navigation.pop()
            }} />
        </View>
    )
}

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('CategoryId')
    const selectedCategory = CATEGORIES.find(category => category.id === catId)

    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default CategoryMealsScreen