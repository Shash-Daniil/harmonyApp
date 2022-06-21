import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AddArticleScreenWrapper } from "./AddArticleScreenStyles";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useSelector, useDispatch } from "react-redux";
import {addArticle} from "../../redux/slices/articleSlice"

export const AddArticleScreen = ({ navigation }) => {
    const [image, setImage] = React.useState();
    const [title, setTitle] = React.useState();
    const [text, setText] = React.useState();

    const status = useSelector((state) => state.article.status);
    const dispatch = useDispatch();

    const uploadImageAsync = async (uri) => {
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", uri, true);
            xhr.send(null);
        });

        const fileRef = ref(getStorage(), title);
        const result = await uploadBytes(fileRef, blob);

        blob.close();

        return await getDownloadURL(fileRef);
    };
    const handleImagePicked = async (pickerResult) => {
        try {
            if (!pickerResult.cancelled) {
                const uploadUrl = await uploadImageAsync(pickerResult.uri);
                console.log("uploadUrl!!!")
                setImage(uploadUrl)
            }
        } catch (e) {
            console.log(e);
            alert("Upload failed, sorry :(");
        }
    };
    const pickImage = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        handleImagePicked(pickerResult);
    };

    return (
        <AddArticleScreenWrapper>
            <Text style={{ marginBottom: 10 }}>Заголовок</Text>
            <TextInput
                onChangeText={setTitle}
                value={title}
                placeholder="title"
            />
            <Text style={{ marginBottom: 10 }}>Text</Text>
            <TextInput onChangeText={setText} multiline numberOfLines={10} value={text} placeholder="text" />
            <Button title="Добавить имаге" onPress={pickImage} />
            <Button
                title="Добавить статью"
                onPress={() => dispatch(addArticle({ title, text, image }))}
            />
            <Text>{status}</Text>
        </AddArticleScreenWrapper>
    );
};
