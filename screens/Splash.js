import * as React from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const Splash = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.pressable}
      onPress={() => navigation.navigate("Screen1")}
    >
      <Image
        style={styles.logo3RemovebgPreviewIcon}
        resizeMode="cover"
        source={require("../assets/logo3.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  logo3RemovebgPreviewIcon: {
    width: 265,
    height: 124,
    marginTop: -90,
    marginRight: 60,
  },
  pressable: {
    backgroundColor: Color.colorSilver,
    flex: 1,
    width: "100%",
    paddingLeft: 75,
    paddingTop: 330,
    paddingRight: 74,
  },
});

export default Splash;
