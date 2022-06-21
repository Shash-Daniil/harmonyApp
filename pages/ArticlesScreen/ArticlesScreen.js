import React from "react";
import { View, Text, Pressable } from "react-native";
import { ArticlesScreenWrapper } from "./ArticlesScreenStyles";
import { Article } from "../../components";
import { getArticles } from "../../redux/slices/articleSlice";
import { useSelector, useDispatch } from "react-redux";

export const ArticlesScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.article.articles);

    React.useEffect(() => {
        dispatch(getArticles());
    }, []);

    let currentArticles = {};
    if (articles) {
        articles.forEach((doc) => {
            currentArticles[doc.id] = doc.data();
        });
    }
    const articlesKeys = Object.keys(currentArticles);

    return (
        <ArticlesScreenWrapper>
            {articlesKeys.map((article) => (
                    <Article
                    handler={() => navigation.navigate("OpenedArticleScreen")}
                        title={article}
                        text={currentArticles[article].text}
                        imageUri={currentArticles[article].image}
                    />
            ))}
        </ArticlesScreenWrapper>
    );
};
