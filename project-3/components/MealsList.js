import React from 'react';
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native'

import MealItem from './MealItem';

const MealsList = props => {
    const renderMealItem = itemData => {
        return (
            <MealItem
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id
                        }
                    })
                }}
            />
        )
    }

    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={item => item.id}
                renderItem={itemData => renderMealItem(itemData)}
                contentContainerStyle={{ width: '100%' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    }
})

export default MealsList