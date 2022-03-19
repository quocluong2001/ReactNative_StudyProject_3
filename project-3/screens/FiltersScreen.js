import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import CustomHeaderButton from '../components/CustomHeaderButton'
import HeaderTitleText from '../components/HeaderTitleText'

const FiltersScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                Hello from FiltersScreen!
            </Text>
        </View>
    )
}

FiltersScreen.navigationOptions = navigationData => {
    return {
        headerTitle: () => {
            return (
                <HeaderTitleText>
                    Meals Filters
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FiltersScreen