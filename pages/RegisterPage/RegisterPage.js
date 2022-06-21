import React from "react";
import { View, Pressable, Text, Button, ActivityIndicator } from "react-native";
import { TextInput, RegisterPageWrapper } from "./RegisterPageStyles";
import { createUserWithEmail } from "../../redux/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../storage";

export const RegisterPage = ({ navigation }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const status = useSelector((state) => state.auth.status);
    const dispatch = useDispatch();

    return (
        <RegisterPageWrapper>
            {status === "loading" ? (
                <ActivityIndicator size="large" />
            ) : (
                <>
                    <Text style={{ marginBottom: 10 }}>Email</Text>
                    <TextInput
                        keyboardType="email-address"
                        onChangeText={setEmail}
                        value={email}
                        placeholder="email"
                    />
                    <Text style={{ marginBottom: 10 }}>Password</Text>
                    <TextInput
                        onChangeText={setPassword}
                        value={password}
                        placeholder="password"
                    />
                    <Button
                        title="ЗАРЕГАТЬСЯ"
                        onPress={() =>
                            dispatch(createUserWithEmail({ email, password }))
                        }
                    />
                    <Text>{status}</Text>
                    <Button
                        title="у меня есть акк уже, войти"
                        onPress={() => navigation.navigate("LoginPage")}
                    />
                </>
            )}
        </RegisterPageWrapper>
    );
};
