import React from "react";
import {
    View,
    Pressable,
    TouchableHighlight,
    Text,
    Image,
    ScrollView,
} from "react-native";
import { Calendar, Divider } from "../../components";
import styled from "styled-components/native";

const Pizda = styled.View`
    background: #ffedbb;
    border-radius: 6px;
    height: 100px
    padding: 12px;
    justify-content: space-between;
    flex-direction: row;
`;

export const HomePage = ({ navigation }) => {
    return (
        <ScrollView
            style={{
                backgroundColor: "#F7F7F7",
                width: "100%",
                paddingTop: 40,
                paddingHorizontal: 16,
            }}
        >
            <Calendar navigation={navigation} />
            <Divider />
            <Pressable
                style={({ pressed }) => [
                    { opacity: pressed ? 0.5 : 1.0, marginBottom: 24 },
                ]}
                onPress={() => navigation.navigate("Breathe")}
            >
                <Pizda>
                    <Text style={{ fontSize: 20, width: "40%" }}>
                        Остановиться в моменте
                    </Text>
                    <View style={{ width: "30%", height: "100%" }}>
                        <Image
                            style={{ width: "100%", height: "100%" }}
                            source={require("../../assets/breathe.png")}
                        />
                    </View>
                </Pizda>
            </Pressable>
            <ScrollView horizontal={true} style={{ height: 250, padding: 12 }}>
                <Pressable
                    style={({ pressed }) => [
                        { opacity: pressed ? 0.5 : 1.0, marginBottom: 24 },
                    ]}
                    onPress={() => navigation.navigate("ArticlesScreen")}
                >
                    <View
                        style={{
                            width: 130,
                            height: "100%",
                            backgroundColor: "#f7c8d7",
                            marginRight: 24,
                            borderRadius: 8,
                            padding: 6
                        }}
                    >
                        <Text>Статьи</Text>
                    </View>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        { opacity: pressed ? 0.5 : 1.0, marginBottom: 24 },
                    ]}
                >
                    <View
                        style={{
                            width: 130,
                            height: "100%",
                            backgroundColor: "#ffe9a6",
                            marginRight: 24,
                            borderRadius: 8,
                            padding: 6
                        }}
                    ></View>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        { opacity: pressed ? 0.5 : 1.0, marginBottom: 24 },
                    ]}
                >
                    <View
                        style={{
                            width: 130,
                            height: "100%",
                            backgroundColor: "#c4c4ea",
                            marginRight: 24,
                            borderRadius: 8,
                            padding: 6
                        }}
                    ></View>
                </Pressable>
            </ScrollView>
        </ScrollView>
    );
};
