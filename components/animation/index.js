import icon from "../../assets/cat.png";
import mouse from "../../assets/muuse.jpg";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Image } from "react-native";
import { useWindowDimensions } from "react-native";

export default function FollowMouse() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  console.log("width screnn: ", windowWidth);
  console.log("height screnn: ", windowHeight);
  const RadomMarginLeft = () => {
    const valueRadom = Math.floor(Math.random() * windowWidth) + 10;
    if (valueRadom > 400) {
      const newValue = valueRadom - 40;
      return newValue;
    }

    return valueRadom;
  };
  const RadomMarginTop = () => {
    const valueRadom = Math.floor(Math.random() * windowHeight) + 10;
    if (valueRadom > 700) {
      const newValue = valueRadom - 40;
      return newValue;
    }

    return valueRadom;
  };

  console.log(RadomMarginLeft());
  console.log(RadomMarginTop());
  const [location, setLocation] = useState({
    x: null,
    y: null,
    marginLeft: new Animated.Value(RadomMarginLeft()),
    marginTop: new Animated.Value(RadomMarginTop()),
  });
  const [locationSecond, setLocationSecond] = useState({
    x: null,
    y: null,
    marginLeftSecond: new Animated.Value(RadomMarginLeft()),
    marginTopSecond: new Animated.Value(RadomMarginTop()),
  });

  const [locationThird, setLocationThrid] = useState({
    x: null,
    y: null,
    marginLeftThird: new Animated.Value(RadomMarginLeft()),
    marginTopThird: new Animated.Value(RadomMarginTop()),
  });

  console.log("location", location);
  console.log("locationSecond", locationSecond);
  console.log("marginTopThird", locationThird);

  function onPress() {
    console.log("press mouse");
    // var x = evt.nativeEvent.locationX;
    // console.log("====================================");
    // console.log(x);
    // console.log("====================================");
    // var y = evt.nativeEvent.locationY;
    // console.log("====================================");

    const xFirst = RadomMarginLeft();
    const yFirst = RadomMarginTop();

    setLocation({
      x: xFirst,
      y: yFirst,
      marginLeft: xFirst,
      marginTop: yFirst,
    });
  }
  function onMove(evt) {
    console.log("====================================");
    console.log(location);
    console.log("====================================");
    //setLocation({marginLeft: x, marginTop: y })
  }
  function onRelease() {
    console.log("Realse!");
  }
  const { marginTop, marginLeft } = location;
  const { marginTopSecond, marginLeftSecond } = locationSecond;
  const { marginTopThird, marginLeftThird } = locationThird;
  return (
    <View
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      // onResponderGrant={onPress}
      // onResponderMove={onMove}
      // onResponderRelease={onRelease}
      style={styles.container}
    >
      <View
        // onPress={() => console.log("react")}
        style={{
          backgroundColor: "red",
          width: 60,
          height: 60,
          position: "absolute",
          marginLeft: 300,
          marginTop: marginTop,
        }}
      ></View>
      <Animated.Image
        onPress={onPress}
        source={mouse}
        style={{
          marginLeft: marginLeftThird,
          marginTop: marginTopThird,
          width: 30,
          height: 30,
          position: "absolute",
        }}
      ></Animated.Image>

      <Animated.Image
        onPress={onPress}
        source={mouse}
        style={{
          marginLeft: marginLeftSecond,
          marginTop: marginTopSecond,
          width: 30,
          height: 30,
          position: "absolute",
        }}
      ></Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
