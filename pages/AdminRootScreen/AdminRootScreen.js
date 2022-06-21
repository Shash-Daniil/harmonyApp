import React from "react";
import { View, Text, Pressable, Button } from "react-native";
import { AdminRootScreenWrapper } from "./AdminRootScreenStyles";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const AdminRootScreen = ({ navigation }) => {
    const [image, setImage] = React.useState()

    return (
        <AdminRootScreenWrapper>
            <Pressable
                style={({ pressed }) => [
                    {
                        opacity: pressed ? 0.5 : 1.0,
                        marginBottom: 24,
                        height: 70,
                        backgroundColor: "lightblue",
                        borderRadius: 12,
                        justifyContent: "center",
                        alignItems: "center",
                    },
                ]}
            >
                <Text style={{ fontSize: 22 }}>Побрить пизду</Text>
            </Pressable>
            <Pressable
                style={({ pressed }) => [
                    {
                        opacity: pressed ? 0.5 : 1.0,
                        marginBottom: 24,
                        height: 70,
                        backgroundColor: "lightblue",
                        borderRadius: 12,
                        justifyContent: "center",
                        alignItems: "center",
                    },
                ]}
                onPress={() => navigation.navigate("AddArticleScreen")}
            >
                <Text style={{ fontSize: 22 }}>Добавить статью</Text>
            </Pressable>
        </AdminRootScreenWrapper>
    );
};
