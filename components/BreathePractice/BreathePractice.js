import React from "react"
import {BreathePracticeWrapper} from "./BreathePracticeStyles"
import { Animated, Text } from "react-native"

export const BreathePractice = ({activeAnimation}) => {
    const progress = React.useRef(new Animated.Value(0)).current

    React.useEffect(() => {
        if (activeAnimation)
            Animated.timing(progress, {toValue: 1, useNativeDriver: false}).start()
        else
            Animated.timing(progress, {toValue: 0, useNativeDriver: false}).start()
    }, [activeAnimation])

    return (
        <BreathePracticeWrapper>
            <Animated.View style={[{backgroundColor: "blue", width: "100%", height: "100%"}, {opacity: progress}]}/>
            <Text>{String(activeAnimation)}</Text>
        </BreathePracticeWrapper>
    )
}