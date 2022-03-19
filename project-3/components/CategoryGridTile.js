import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TouchableNativeFeedback,
    Platform
} from 'react-native'

const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        <View style={styles.gridItem}>
            <TouchableCmp onPress={props.onSelect}>
                <View style={{ ...styles.container, backgroundColor: props.color }}>
                    <Text style={styles.title} numberOfLines={2}>
                        {props.title}
                    </Text>
                </View>
            </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        overflow: 'hidden',
        borderRadius: 15,
        elevation: 5,
    },

    container: {
        flex: 1,
        borderRadius: 15,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        elevation: 5,
    }
})

export default CategoryGridTile