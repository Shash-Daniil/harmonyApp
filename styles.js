import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Kek = styled.Text`
  width: 25px;
  heigth: 25px;
  background: red;
`;

export const MonthSwitch = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export const MonthSwitchSwitcher = styled.Text`
  width: 36px;
  height: 36px;
`;

export const WeekDaysWrapper = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const CalendarWrapper = styled.View`
  width: 100%;
  height: 40%;
  background-color: #ddf7c7;
  border-radius: 16px;
  overflow: hidden;
`;

export const CalendarItemWrapper = styled.TouchableHighlight`
  flex: 1;
  bordercolor: lightgrey;
`;

export const CalendarRowWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  bordercolor: lightgrey;
`;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
    width: "100%",
    height: "100%",
  },
});
