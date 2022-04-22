import { createStackNavigator } from "react-navigation-stack"

import FiltersScreen from "../screens/FiltersScreen"
import defaultStackNavOptions from "./defaultStackNavOptions"

const FiltersStackNavigator = createStackNavigator(
    {
        Filters: {
            screen: FiltersScreen
        }
    },
    {
        defaultNavigationOptions: defaultStackNavOptions({
            headerStyle: {
                backgroundColor: 'blue'
            }
        })
    }
)

export default FiltersStackNavigator