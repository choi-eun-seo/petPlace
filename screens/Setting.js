import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import Search from'../component/Search';
import NaBar from "../component/NaBar";

const Setting = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
     
      <Search/>
      <View style={styles.view}/>
     <View style={styles.view12}>
      <Image
        style={[styles.icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/-108.png")}
      />
      <Image
        style={[styles.icon1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/-107.png")}
      />
      <Image
        style={[styles.petsRemovebgPreviewIcon, styles.petsIconLayout]}
        resizeMode="cover"
        source={require("../assets/petsremovebgpreview.png")}
      />
      <Image
        style={styles.user1Icon}
        resizeMode="cover"
        source={require("../assets/user-1.png")}
      />
      <View style={[styles.view3, styles.viewLayout3]} />
      <View style={[styles.view4, styles.viewLayout1]} />
      <View style={[styles.view5, styles.viewLayout1]}>
        <View style={[styles.view6, styles.viewPosition]} />
        <Image
          style={[styles.user2Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/user-2.png")}
        />
      </View>
      <View style={styles.pets}>
        <Image
          style={[styles.petsIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/pets.png")}
        />
      </View>
      <Text style={[styles.text1, styles.textTypo]}>사용자</Text>
      <Text style={[styles.text2, styles.textTypo]}>반려견</Text>
      <View style={[styles.view7, styles.viewLayout]}>
        <View style={[styles.view8, styles.viewPosition]}>
       
          <Text style={[styles.label, styles.labelTypo]}>사용자 이름 변경</Text>
          <Image
            style={[styles.petRemovebgPreviewIcon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/petremovebgpreview1.png")}
          />
        </View>
      </View>
      <View style={styles.viewLayout}>
        <View style={[styles.view8, styles.viewPosition]}>
          
          <Text style={[styles.label1, styles.labelTypo]}>
            반려견 이름 변경
          </Text>
          <Image
            style={[styles.petsRemovebgPreviewIcon1, styles.iconPosition2]}
            resizeMode="cover"
            source={require("../assets/petsremovebgpreview.png")}
          />
        </View>
      </View>
      </View>
      {/* <View style={[styles.view, styles.viewLayout3]}> */}
        <NaBar/>
      {/* </View> */}
    
    </View>
  );
};

const styles = StyleSheet.create({

  petsIconLayout: {
    height: 24,
    width: 24,
  },

  iconLayout1: {
    height: 66,
    width: 66,
  },
  viewLayout3: {
    width: 414,
    backgroundColor: Color.colorWhite,
  },
  viewLayout1: {
    height: 45,
    width: 45,
  },
  viewPosition: {
    bottom: 0,
    top: 0,
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorBlack,
    fontWeight: "800",
    lineHeight: 25,
    letterSpacing: 2,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.nanumGothicOTF,
  },
  viewLayout: {
    height: 48,
    width: 394,
  },
  labelTypo: {
    textAlign: "left",
    color: Color.colorDimgray,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    marginTop: -7,
    left: "50%",
    top: "50%",
    fontWeight: "800",
    position: "absolute",
    fontFamily: FontFamily.nanumGothicOTF,
  },
  iconPosition1: {
    height: 22,
    top: "50%",
    position: "absolute",
  },
  iconPosition2: {
    top: "50%",
    position: "absolute",
  },


  icon: {
    marginTop: 83,
    marginRight: 57,
  },
  icon1: {
    marginTop: -66,
    marginRight: -1,
  },
  petsRemovebgPreviewIcon: {
    marginTop: -50,
    marginRight: 81,
  },
  user1Icon: {
    width: 40,
    height: 0,
    marginRight: 311,
    marginTop: 7,
  },
  view3: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorGray_500,
    borderWidth: 0.5,
    height: 218,
    marginTop: 24,
  },
  view4: {
    marginTop: -197,
    marginRight: 20,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSilver,
  },
  view6: {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSilver,
  },
  user2Icon: {
    top: 5,
    right: 5,
    bottom: 6,
    left: 6,
  },
  view5: {
    marginTop: -45,
    marginRight: 348,
  },
  petsIcon: {
    left: 0,
    bottom: 0,
    top: 0,
    // right: 0,
    
  },
  pets: {
    width: 33,
    height: 33,
    marginTop: -39,
    marginRight: 26,
  },
  text1: {
    marginTop: -30,
    marginRight: 287,
  },
  text2: {
    marginTop: -25,
    marginRight: 75,
  },
 


  
  label: {
    marginLeft: -129,
  },
  petRemovebgPreviewIcon: {
    marginTop: -11.51,
    left: 15,
    width: 24,
    height: 22,
  },
  view8: {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  view7: {
    marginTop: 20,
  },
  label1: {
    marginLeft: -130,
  },
  petsRemovebgPreviewIcon1: {
    marginTop: -12,
    left: 16,
    height: 24,
    width: 24,
  },

  view: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    paddingTop: Padding.p_xs,
  },
  view12:{
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    paddingTop: Padding.p_xs,
    marginTop: -315,
  }
});

export default Setting;
