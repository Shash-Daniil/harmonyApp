import React from "react";
import { store } from "./redux";
import { Provider } from "react-redux";
import { RootPage } from "./RootPage";

export default function App() {
    return (
        <Provider store={store}>
            <RootPage />
        </Provider>
    );
}
