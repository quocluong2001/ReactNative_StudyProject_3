import React from 'react'
import {
    StyleSheet,
    FlatList,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
import HeaderTitleText from '../components/HeaderTitleText'
import CustomHeaderButton from '../components/CustomHeaderButton'

const CategoriesScreen = props => {
    const renderListItem = itemData => {
        return (
            <CategoryGridTile
                color={itemData.item.color}
                title={itemData.item.title}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            CategoryId: itemData.item.id
                        }
                    })
                }}
            />
        )
    }

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={itemData => renderListItem(itemData)}
        />
    )
}

CategoriesScreen.navigationOptions = navigationData => {
    return {
        headerTitle: () => {
            return (
                <HeaderTitleText>
                    Meal Categories
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
    },
})

export default CategoriesScreen