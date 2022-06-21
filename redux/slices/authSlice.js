import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { app } from "../../firebase";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);
const usersRef = collection(db, "users");

const initialState = {
    status: null,
    user: null,
    addUserStatus: null,
};

export const createUserWithEmail = createAsyncThunk(
    "auth/createUserWithEmail",
    async ({ email, password }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;
            console.log("user credential");
            console.log(user);
            console.log("------------------------------");
            return user;
        } catch (error) {
            console.log("error createUserWithEmail");
            console.log(error);
            throw new Error();
        }
    }
);

export const signInUserWithEmail = createAsyncThunk(
    "auth/signInUserWithEmail",
    async ({ email, password }) => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;
            console.log("user credential");
            console.log(user);
            console.log("------------------------------");
            return user;
        } catch (error) {
            console.log("error signInUserWithEmail");
            console.log(error);
            throw new Error();
        }
    }
);

export const createUser = createAsyncThunk(
    "auth/createUser",
    async ({ email, password, username }) => {
        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            await updateProfile(user, {
                displayName: username,
            });
            await setDoc(doc(usersRef, email), {
                username,
                password,
            });
            return user;
        } catch (error) {
            console.log("error createUser");
            console.log(error);
            throw new Error();
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
    },
    extraReducers: {
        [createUserWithEmail.rejected]: (state, action) => {
            state.status = "error";
        },
        [createUserWithEmail.pending]: (state, action) => {
            state.status = "loading";
        },
        [createUserWithEmail.fulfilled]: (state, action) => {
            state.status = "registered!";
            state.user = action.payload;
            // storeData("user", JSON.stringify(action.payload))
        },
        [signInUserWithEmail.rejected]: (state, action) => {
            state.status = "signed error";
        },
        [signInUserWithEmail.pending]: (state, action) => {
            state.status = "loading";
        },
        [signInUserWithEmail.fulfilled]: (state, action) => {
            state.status = "signed in succes!";
            state.user = action.payload;
            // storeData("user", JSON.stringify(action.payload))
        },
        [createUser.rejected]: (state, action) => {
            state.addUserStatus = "addUserStatus error";
        },
        [createUser.pending]: (state, action) => {
            state.addUserStatus = "loading";
        },
        [createUser.fulfilled]: (state, action) => {
            state.addUserStatus = "user registered!";
            // storeData("user", JSON.stringify(action.payload))
        },
    },
});

export const { increment } = authSlice.actions;

export default authSlice.reducer;
