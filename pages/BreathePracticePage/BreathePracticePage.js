import React from "react";
import { View, Pressable, Text, Image, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/slices/userSlice";

export const BreathePracticePage = ({ navigation }) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Pressable>
      <View
        style={{
          backgroundColor: "#F7F7F7",
          width: "100%",
          height: "100%",
          paddingTop: 40,
          paddingHorizontal: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{count}</Text>
        <Pressable onPress={() => dispatch(increment())}><Text>plus 1</Text></Pressable>
        <Pressable onPress={() => dispatch(decrement())}><Text>minus 1</Text></Pressable>
      </View>
    </Pressable>
  );
};
