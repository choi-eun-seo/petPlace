import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Login1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <View style={styles.darkAppBar1TopA}>
        <Image
          style={[styles.primaryIcon, styles.boundaryPosition]}
          resizeMode="cover"
          source={require("../assets/primary.png")}
        />
        <View style={styles.maskGroup}>
          <Text style={[styles.pageTitle, styles.idTypo]}>로그인</Text>
          <View style={[styles.trailingIcon2, styles.trailingIconPosition]}>
            <View style={[styles.boundary, styles.boundaryPosition]} />
          </View>
          <View style={[styles.trailingIcon3, styles.trailingIconPosition]}>
            <View style={[styles.boundary, styles.boundaryPosition]} />
          </View>
        </View>
      </View>
      <ImageBackground
        style={styles.logo3RemovebgPreviewIcon}
        resizeMode="cover"
        source={require("../assets/logo3.png")}
      />
      <Text style={[styles.id, styles.idTypo]}>ID</Text>
      <TextInput
        style={[styles.textinput, styles.textinputLayout]}
        keyboardType="default"
      />
      <Text style={[styles.password, styles.idTypo]}>PASSWORD</Text>
      <TextInput
        style={[styles.textinput1, styles.textinputLayout]}
        keyboardType="default"
      />
      <Pressable
        style={[styles.pressable, styles.textinputLayout]}
        onPress={() => navigation.navigate("Map")}
      />
      <Text style={[styles.text, styles.textTypo]}>로그인</Text>
      <Pressable
        style={[styles.pressable1, styles.textinputLayout]}
        onPress={() => navigation.navigate("Sign_up")}
      />
      <Text style={[styles.text1, styles.textTypo]}>회원가입</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boundaryPosition: {
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  idTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nanumGothicOTF,
    fontWeight: "800",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_6xl,
    color: Color.colorWhite,
  },
  trailingIconPosition: {
    bottom: "29.51%",
    top: "27.87%",
    width: "6.28%",
    height: "42.62%",
    position: "absolute",
  },
  textinputLayout: {
    height: 53,
    width: 328,
    borderRadius: Border.br_8xs,
  },
  textTypo: {
    marginTop: -41,
    marginLeft: 1,
    textAlign: "left",
    fontFamily: FontFamily.nanumGothicOTF,
    fontWeight: "800",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_6xl,
    paddingTop: 10,
  },
  primaryIcon: {
    right: 3,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.8,
  },
  pageTitle: {
    width: "24.4%",
    top: 17,
    left: "5.56%",
    height: 50,
    position: "absolute",
    paddingTop: 18,
  },
  boundary: {
    right: 0,
  },
  trailingIcon2: {
    right: "18.12%",
    left: "75.6%",
  },
  trailingIcon3: {
    right: "4.83%",
    left: "88.89%",
  },
  maskGroup: {
    height: "100%",
    width: "99.28%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0.72%",
    position: "absolute",
  },
  darkAppBar1TopA: {
    width: 417,
    height: 61,
    marginLeft: 3,
  },
  logo3RemovebgPreviewIcon: {
    width: 265,
    height: 124,
    marginTop: 59,
    marginLeft: 1,
  },
  id: {
    marginTop: 25,
    marginRight: 304,
  },
  textinput: {
    marginTop: 2,
    backgroundColor: Color.colorWhite,
    width: 328,
    borderRadius: Border.br_8xs,
  },
  password: {
    marginTop: 13,
    marginRight: 188,
  },
  textinput1: {
    backgroundColor: Color.colorWhite,
    width: 328,
    borderRadius: Border.br_8xs,
  },
  pressable: {
    backgroundColor: "#f2f1eb",
    marginTop: 37,
    width: 328,
    borderRadius: Border.br_8xs,
  },
  text: {
    color: Color.colorDarkolivegreen,
  },
  pressable1: {
    backgroundColor: Color.colorDarkolivegreen,
    marginTop: 32,
    width: 328,
    borderRadius: Border.br_8xs,
  },
  text1: {
    color: Color.colorWhite,
    marginTop: -41,
  },
  view: {
    backgroundColor: Color.colorSilver,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default Login1;
