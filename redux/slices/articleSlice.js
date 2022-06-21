import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getAuth,
} from "firebase/auth";
import { app } from "../../firebase";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);
const articlesRef = collection(db, "articles");

const initialState = {
    addUserStatus: null,
};

export const addArticle = createAsyncThunk(
    "article/addArticle",
    async ({ title, text, image }) => {
        try {
            await setDoc(doc(articlesRef, title), {
                text,
                image,
            });
        } catch (error) {
            console.log("error addArticle");
            console.log(error)
            throw new Error();
        }
    }
);

export const getArticles = createAsyncThunk(
    "article/getArticles",
    async () => {
        try {
            const articles = await getDocs(articlesRef)
            
            return articles
        } catch (error) {
            console.log("error addArticle");
            console.log(error)
            throw new Error();
        }
    }
);

export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        setOpenedArticleId: (state, action) => {
            state.openedArticleId = action.payload
        }
    },
    extraReducers: {
        [addArticle.rejected]: (state, action) => {
            state.status = "article add error";
        },
        [addArticle.pending]: (state, action) => {
            state.status = "loading";
        },
        [addArticle.fulfilled]: (state, action) => {
            state.status = "article add success";
            // storeData("user", JSON.stringify(action.payload))
        },
        [getArticles.rejected]: (state, action) => {
            state.status = "article get error";
        },
        [getArticles.pending]: (state, action) => {
            state.status = "loading";
        },
        [getArticles.fulfilled]: (state, action) => {
            state.status = "article get success";
            state.articles = action.payload
            // storeData("user", JSON.stringify(action.payload))
        },
    },
});

export const { setOpenedArticleId } = articleSlice.actions;

export default articleSlice.reducer;
