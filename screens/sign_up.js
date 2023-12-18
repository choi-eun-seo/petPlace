import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";


const Sign_up = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.view}>
      <View style={styles.darkAppBar1TopA}>
        <Image
          style={[styles.primaryIcon, styles.boundaryPosition]}
          resizeMode="cover"
          source={require("../assets/primary.png")}
        />
        <View style={styles.maskGroup}>
          
          <Text style={[styles.pageTitle, styles.text5Typo]}>회원가입</Text>
         
        
        </View>
      </View>
      <ImageBackground
        style={styles.logo3RemovebgPreviewIcon}
        resizeMode="cover"
        source={require("../assets/logo3.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>아이디</Text>
      <TextInput
        style={[styles.textinput, styles.textinputLayout]}
        keyboardType="default"
      />
      <Text style={[styles.text1, styles.textTypo]}>비밀번호</Text>
      <TextInput
        style={[styles.textinput1, styles.textinputLayout]}
        keyboardType="default"
      />
      <Text style={[styles.text1, styles.textTypo]}>비밀번호 확인</Text>
      <TextInput
        style={[styles.textinput1, styles.textinputLayout]}
        keyboardType="default"
      />
      <Text style={[styles.text1, styles.textTypo]}>사용자 이름</Text>
      <TextInput
        style={[styles.textinput1, styles.textinputLayout]}
        keyboardType="default"
      />
      <Text style={[styles.text1, styles.textTypo]}>반려견 이름</Text>
      <View style={[styles.textinput1, styles.textinputLayout]} />
      <Pressable
        style={[styles.pressable, styles.textinputLayout]}
        onPress={() => navigation.navigate("Login1")}
      />
      <Text style={[styles.text5, styles.text5Typo]}>회원가입</Text>
    </View>
   </ScrollView> 
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    
  },
  boundaryPosition: {
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  text5Typo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.nanumGothicOTF,
    fontWeight: "800",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_6xl,
    paddingTop: 10,
  },

  textTypo: {
    marginLeft: 43,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.nanumGothicOTF,
    fontWeight: "800",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_6xl,
    // marginTop: 20,
    paddingTop: 8,
  },
  textinputLayout: {
    alignSelf: "center",
    height: 53,
    width: 328,
    borderRadius: Border.br_8xs,
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
    top: 5,
    left: "5.56%",
    height: 30,
    position: "absolute",
    marginTop: 30,
  },

 
  maskGroup: {
    height: "100%",
    width: "99.28%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0.72%",
    position: "absolute",
    marginTop: -10,
    zIndex : 100,
  },
  darkAppBar1TopA: {
    width: 417,
    height: 61,
  },
  logo3RemovebgPreviewIcon: {
    width: 265,
    height: 124,
    marginTop: 30,
    marginLeft: 75,
  },
  text: {
    marginTop: 25,
  },
  textinput: {
    marginTop: 2,
    backgroundColor: Color.colorWhite,
    height: 53,
    width: 328,
    borderRadius: Border.br_8xs,
  },
  text1: {
    marginTop: 13,
  },
  textinput1: {
    backgroundColor: Color.colorWhite,
    height: 53,
    width: 328,
    borderRadius: Border.br_8xs,
  },
  pressable: {
    backgroundColor: Color.colorDarkolivegreen,
    marginTop: 60,
    height: 53,
    width: 328,
    borderRadius: Border.br_8xs,
  },
  text5: {
    marginTop: -41,
    marginLeft: 160,
    marginBottom: 60,
  },
  view: {
    backgroundColor: Color.colorSilver,
    flex: 1,
    width: "100%",
  },
});

export default Sign_up;
