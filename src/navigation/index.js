import React, { useContext } from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen, FavouriteScreen } from '../screen';
import { AllCatIcon, CatsILikeIcon } from "../assets";
import { fontPixel, ThemeContext } from "../util";

const Tab = createBottomTabNavigator();

export function RootNavigation() {

    const { colors } = useContext(ThemeContext);

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    unmountOnBlur: true,
                    headerShown: false,
                    lazy: true,
                    tabBarActiveTintColor: colors.black,
                    tabBarInactiveTintColor: colors.grey,
                    tabBarStyle: { height: 67 },
                    tabBarLabelStyle: { fontSize: fontPixel(15) },
                    tabBarLabelPosition: 'below-icon',
                    tabBarIcon: ({ focused }) => {
                        if (route.name === 'All Cats') return <AllCatIcon color={focused ? colors.black : colors.grey} />;
                        else if (route.name === 'Cats I Like') return <CatsILikeIcon color={focused ? colors.black : colors.grey} />;
                        else return;
                    }
                })}
            >
                <Tab.Screen name="All Cats" component={HomeScreen} />
                <Tab.Screen name="Cats I Like" component={FavouriteScreen} />
            </Tab.Navigator>
        </NavigationContainer >
    );
}