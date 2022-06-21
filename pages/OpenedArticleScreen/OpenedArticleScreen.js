import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { getArticles } from "../../redux/slices/articleSlice";
import { useSelector, useDispatch } from "react-redux";
import Markdown from 'react-native-simple-markdown'

export const OpenedArticleScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.article.articles);
    const openedArticleId = useSelector((state) => state.article.openedArticleId);

    let currentArticles = {};
    if (articles) {
        articles.forEach((doc) => {
            currentArticles[doc.id] = doc.data();
        });
    }
    const currentArticle = currentArticles[openedArticleId]

    console.log(currentArticle)

    return (
        <ScrollView>
            <Image
                    style={{ width: "100%", height: 300}}
                    source={{
                        uri: currentArticle.image,
                    }}
                />
                <Text style={{fontSize: 20}}>{openedArticleId}</Text>
                <Text></Text>
                <Markdown>
                    {currentArticle.text}
                </Markdown>
        </ScrollView>
    );
};
