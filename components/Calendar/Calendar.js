import React from "react";
import { View, Text, TouchableHighlight, Pressable, Image } from "react-native";
import {
    DatesWrapper,
    CalendarRowWrapper,
    CalendarItemWrapper,
    WeekDaysWrapper,
    MonthSwitch,
    MonthSwitchSwitcher,
} from "./CalendarStyles";
import { chunkArray, getMonthArray, normDays } from "../../helpers";
import { ChevronUpNavigation, ChevronDownNavigation } from "../../icons";
import Tooltip from "react-native-walkthrough-tooltip";

const monthes = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
];

export const Calendar = ({ navigation }) => {
    const [month, setMonth] = React.useState(new Date().getMonth());

    const formatedArray = chunkArray(getMonthArray(month), 7);

    return (
        <>
            <MonthSwitch>
                <Text style={{ fontSize: 24, color: "#639D33" }}>
                    {monthes[month]}
                </Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <TouchableHighlight>
                        <MonthSwitchSwitcher
                            onPress={() => setMonth((value) => value + 1)}
                        >
                            <ChevronDownNavigation />
                        </MonthSwitchSwitcher>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <MonthSwitchSwitcher
                            onPress={() => setMonth((value) => value - 1)}
                        >
                            <ChevronUpNavigation />
                        </MonthSwitchSwitcher>
                    </TouchableHighlight>
                </View>
            </MonthSwitch>
            <WeekDaysWrapper>
                {normDays.map((day, i) => (
                    <Text
                        key={i}
                        style={{ flex: 1, height: 24, textAlign: "left" }}
                    >
                        {day}
                    </Text>
                ))}
            </WeekDaysWrapper>
            <DatesWrapper>
                {formatedArray.map((chunk, i) => (
                    <CalendarRowWrapper key={i}>
                        {chunk.map((elem, i) => (
                            <CalendarItem
                                key={i}
                                navigation={navigation}
                                currentMonth={month}
                            >
                                {elem}
                            </CalendarItem>
                        ))}
                    </CalendarRowWrapper>
                ))}
            </DatesWrapper>
        </>
    );
};

const date = new Date();

const CalendarItem = ({ children, style, navigation, currentMonth }) => {
    const [toolTipVisible, setToolTipVisible] = React.useState(false);

    const tooltipContent = (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: -4,
            }}
        >
            <Pressable
                style={{
                    width: 36,
                    height: 36,
                    paddingTop: 1,
                    marginRight: 8,
                }}
                onPress={() => navigation.navigate("AddSituation")}
            >
                <Image
                    style={{ width: "90%", height: "90%" }}
                    source={require("../../assets/edit.jpg")}
                />
            </Pressable>
            <Pressable
                style={{
                    width: 36,
                    height: 36,
                    paddingTop: 1,
                }}
                onPress={() => navigation.navigate("SituationList")}
            >
                <Image
                    style={{ width: "90%", height: "90%" }}
                    source={require("../../assets/archive.jpg")}
                />
            </Pressable>
        </View>
    );
    const isDisabledDay = !(currentMonth === children.month);
    const calendarItemEnabledStyles = {
        style: ({ pressed }) => [
            { backgroundColor: pressed ? "lightblue" : null, ...style },
        ],
        onPress: () => {
            setToolTipVisible(true);
            console.log(children);
        },
    };
    return (
        <CalendarItemWrapper
            {...(isDisabledDay ? {} : calendarItemEnabledStyles)}
        >
            <Tooltip
                isVisible={toolTipVisible}
                content={tooltipContent}
                contentStyle={{
                    width: 84,
                    height: 40,
                    justifyContent: "center",
                }}
                tooltipStyle={{}}
                placement="top"
                backgroundColor="rgba(0,0,0,0)"
                allowChildInteraction={false}
                showChildInTooltip={false}
                onClose={() => setToolTipVisible(false)}
            >
                <Text
                    style={{
                        fontSize: 16,
                        color: !isDisabledDay ? "black" : "lightgrey",
                    }}
                >
                    {children.day}
                </Text>
            </Tooltip>
        </CalendarItemWrapper>
    );
};
