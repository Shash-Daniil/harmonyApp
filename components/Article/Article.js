import React from "react";
import { ArticleWrapper } from "./ArticleStyles";
import { Text, Image, View } from "react-native";
import { setOpenedArticleId } from "../../redux/slices/articleSlice";
import {useDispatch } from "react-redux";

export const Article = ({ title, text, imageUri, handler }) => {
    const dispatch = useDispatch();
    return (
        <ArticleWrapper
        onPress={() => {dispatch(setOpenedArticleId(title)); handler()}}
            style={({ pressed }) => [
                {
                    opacity: pressed ? 0.5 : 1.0,
                },
            ]}
        >
            <View style={{ width: 165, height: 165}}>
                <Image
                    style={{ width: "100%", height: "100%", marginBottom: 6, borderRadius: 16, overflow: "hidden" }}
                    source={{
                        uri: imageUri,
                    }}
                />
            </View>
            <Text
                style={{ fontSize: 18, fontWeight: "400" }}
            >
                {title}
            </Text>
        </ArticleWrapper>
    );
};
