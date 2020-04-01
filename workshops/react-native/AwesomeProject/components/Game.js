import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import { Accelerometer } from "expo-sensors";
import MyButton from "./MyButton";

export default function Game({ route, navigation }) {
  const [data, setData] = useState({});
  const [pos, setPos] = useState({ x: 150, y: 150 });
  useEffect(() => {
    Accelerometer.setUpdateInterval(100);
    const subscription = Accelerometer.addListener(data => {
      setData(data);
      setPos(({ x, y }) => {
        return {
          x: constrain(x - 30 * data.x, 15, 300 - 15),
          y: constrain(y + 30 * data.y, 15, 250 - 15)
        };
      });
    });
    // cleanup on unmount
    return () => {
      subscription.remove();
    };
  }, []);
  let { x, y, z } = data;
  const { count } = route.params;
  return (
    <View style={{ marginVertical: 60, marginHorizontal: 28 }}>
      <Text style={{ fontWeight: "bold", fontSize: 30 }}>Accelerometer</Text>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
        Times i've been here: {count}
      </Text>
      <Text style={{ fontSize: 16, marginTop: 8 }}>
        (in Gs where 1 G = 9.81 m s^-2)
      </Text>
      <Text style={{ fontSize: 24, marginTop: 24 }}>x: {round(x)}</Text>
      <Text style={{ fontSize: 24, marginTop: 8 }}>y: {round(y)}</Text>
      <Text style={{ fontSize: 24, marginTop: 8 }}>z: {round(z)}</Text>
      <View
        style={{
          marginTop: 24,
          position: "relative",
          width: 300,
          height: 250,
          borderColor: "#eee",
          borderWidth: 2
        }}
      >
        <View
          style={{
            position: "absolute",
            width: 30,
            height: 30,
            top: pos.y - 15,
            left: pos.x - 15,
            backgroundColor: "black",
            borderRadius: 99
          }}
        />
      </View>
      {/* <MyButton text={"Super button"} /> */}
      <Button
        title='Go to Home'
        onPress={() => navigation.navigate("Home", { count: count + 1 })}
      />
    </View>
  );
}
function constrain(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}
