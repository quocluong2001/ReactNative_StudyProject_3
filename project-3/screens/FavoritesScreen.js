import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FavoritesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                Hello from FavoritesScreen!
            </Text>
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

export default FavoritesScreen