import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                Hello from MealDetailScreen!
            </Text>
            <Button title='Save all and go back to Categories' onPress={() => {
                props.navigation.popToTop()
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

export default MealDetailScreen