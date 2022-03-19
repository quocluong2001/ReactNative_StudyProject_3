import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
} from "react-native";

const MealItem = props => {
    return (
        <TouchableOpacity onPress={props.onSelectMeal} activeOpacity={0.7}>
            <View style={styles.mealItem}>
                <View style={styles.mealHeader}>
                    <ImageBackground
                        source={{ uri: props.image }}
                        style={styles.image}
                    >
                        <View style={styles.titleContainer}>
                            <Text
                                style={styles.title}
                                numberOfLines={1}
                                adjustsFontSizeToFit={true}
                            >
                                {props.title}
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.mealDetail}>
                    <Text style={styles.mealDetailText}>{props.duration}m</Text>
                    <Text style={styles.mealDetailText}>{props.complexity.toUpperCase()}</Text>
                    <Text style={styles.mealDetailText}>{props.affordability.toUpperCase()}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 10,
    },
    mealHeader: {
        flexDirection: "row",
        height: '85%',
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: "flex-end"
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: "center"
    },
    mealDetail: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
    },
    mealDetailText: {
        fontFamily: 'open-sans-bold'
    },
})

export default MealItem