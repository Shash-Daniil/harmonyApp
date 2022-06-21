import React from "react";
import { View, Image, Text, Button, ActivityIndicator } from "react-native";
import { TextInput, LoginPageWrapper } from "./LoginPageStyles";
import { signInUserWithEmail } from "../../redux/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";

export const LoginPage = ({ navigation }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const status = useSelector((state) => state.auth.status);
    const dispatch = useDispatch();

    return (
        <LoginPageWrapper>
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
                        title="Войти"
                        onPress={() =>
                            dispatch(signInUserWithEmail({ email, password }))
                        }
                    />
                    <View style={{ marginTop: 12 }}>
                        <Button
                            title="Регистрация"
                            onPress={() => navigation.navigate("RegisterPage")}
                        />
                    </View>
                    <Text>{status}</Text>
                    <Image
                        style={{ width: 200, height: 200 }}
                        source={{
                            uri: "https://firebasestorage.googleapis.com/v0/b/test-df25e.appspot.com/o/Test.jpg?alt=media&token=65491081-2496-4e03-beff-e4ead31becd8",
                        }}
                    />
                </>
            )}
        </LoginPageWrapper>
    );
};
