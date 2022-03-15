import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CategoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={{textAlign: 'center'}}>
                Hello from CategoriesScreen!
            </Text>
            <Button title='Button' onPress={() => {
                props.navigation.navigate({routeName: 'CategoryMeals'})
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default CategoriesScreen