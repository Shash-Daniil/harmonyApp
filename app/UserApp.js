import React from "react";
import {
    HomePage,
    BreathePracticePage,
    RegisterPage,
    LoginPage,
    ArticlesScreen,
    OpenedArticleScreen
} from "../pages";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

export const UserApp = () => {
    const Stack = createNativeStackNavigator();
    const status = useSelector((state) => state.auth.status);
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                {status === "signed in succes!" ? (
                    <>
                        <Stack.Screen name="HomePage" component={HomePage} />
                        <Stack.Screen
                            name="Breathe"
                            component={BreathePracticePage}
                        />
                        <Stack.Screen
                            name="OpenedArticleScreen"
                            component={OpenedArticleScreen}
                        />
                        <Stack.Screen
                            name="ArticlesScreen"
                            component={ArticlesScreen}
                        />
                        
                    </>
                ) : (
                    <>
                        <Stack.Screen name="LoginPage" component={LoginPage} />
                        <Stack.Screen
                            name="RegisterPage"
                            component={RegisterPage}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
