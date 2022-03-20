import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    ScrollView,
    Text
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

import { MEALS } from '../data/dummy-data'
import HeaderTitleText from '../components/HeaderTitleText'
import CustomHeaderButton from '../components/CustomHeaderButton'
import DefaultText from '../components/DefaultText'

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return (
        <ScrollView>
            <Image
                source={{ uri: selectedMeal.imageUrl }}
                style={styles.image}
            />
            <View style={styles.mealDetail}>
                <DefaultText>
                    <Ionicons name="time-outline" size={23} color="black" />
                    {selectedMeal.duration}m
                </DefaultText>
                <DefaultText>
                    <Ionicons name="create-outline" size={23} color="black" />
                    {selectedMeal.complexity.toUpperCase()}
                </DefaultText>
                <DefaultText>
                    <Ionicons name="cash-outline" size={23} color="black" />
                    {selectedMeal.affordability.toUpperCase()}
                </DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {
                selectedMeal.ingredients.map(
                    ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>
                )
            }
            <Text style={styles.title}>Steps</Text>
            {
                selectedMeal.steps.map(
                    step => <ListItem key={step}>{step}</ListItem>
                )
            }
        </ScrollView>
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
    image: {
        flex: 1,
        width: '100%',
        height: 200,
    },
    mealDetail: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 5,
        marginHorizontal: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})

export default MealDetailScreen