import React from "react";
import {
    AdminRootScreen,
    AddArticleScreen
} from "../pages";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const AdminApp = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="AdminRootScreen" component={AdminRootScreen} />
                <Stack.Screen name="AddArticleScreen" component={AddArticleScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
