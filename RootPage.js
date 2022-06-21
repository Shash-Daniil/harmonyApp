import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore";
import { store } from "./redux";
import { Provider, useSelector } from "react-redux";
import { app } from "./firebase";
import { AdminApp } from "./app/AdminApp";
import { UserApp } from "./app/UserApp";

const Stack = createNativeStackNavigator();

const db = getFirestore(app);
const usersRef = collection(db, "users");

const renderApp = (email) => {
    if (email === "admin@gmail.com") return <AdminApp />;
    return <UserApp />;
};

export function RootPage() {
    let user = useSelector((state) => state.auth.user);

    if (!user) user = {};
    // React.useEffect(() => {
    //     const getUserFromStorage = async () => {
    //         const user = await getData("user");
    //         setUser(user);
    //     };
    //     getUserFromStorage();
    // });

    return (
        <Provider store={store}>
            <View style={styles.container}>
                {renderApp(user.email)}
                <StatusBar style="auto" />
            </View>
        </Provider>
    );
}
