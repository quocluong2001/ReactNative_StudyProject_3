import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
} from "react-native";

import DefaultText from "./DefaultText";
import { Ionicons } from "@expo/vector-icons";

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
                    <DefaultText>
                        <Ionicons name="time-outline" size={23} color="black" />
                        {props.duration}m
                    </DefaultText>
                    <DefaultText>
                        <Ionicons name="create-outline" size={23} color="black" />
                        {props.complexity.toUpperCase()}
                    </DefaultText>
                    <DefaultText>
                        <Ionicons name="cash-outline" size={23} color="black" />
                        {props.affordability.toUpperCase()}
                    </DefaultText>
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
})

export default MealItem