import React, { useState } from "react";
import { Text, TouchableWithoutFeedback, Animated } from "react-native";
export default function MyButton({ text }) {
  const [scaleAnim] = useState(new Animated.Value(1));
  const bgColorAnim = scaleAnim.interpolate({
    inputRange: [0.9, 1],
    outputRange: ["#e4e2f9", "white"]
  });
  const borderColorAnim = scaleAnim.interpolate({
    inputRange: [0.9, 1],
    outputRange: ["#4630eb", "#ddd"]
  });
  return (
    <TouchableWithoutFeedback
      onPressIn={e => {
        Animated.spring(scaleAnim, {
          toValue: 0.9,
          speed: 100,
          bounciness: 0
        }).start();
      }}
      onPressOut={e => {
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 20,
          tension: 1
        }).start();
      }}
    >
      <Animated.View
        style={{
          backgroundColor: bgColorAnim,
          padding: 12,
          borderRadius: 4,
          alignSelf: "stretch",
          borderWidth: 2,
          borderColor: borderColorAnim,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          transform: [{ scale: scaleAnim }]
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 16
          }}
        >
          {text}
        </Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
