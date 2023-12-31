import * as React from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Pressable,
  Image,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily, Padding } from "../GlobalStyles";
import Search from "../component/Search";
import NaBar from "../component/NaBar";
import CustomMap from "../component/CustomMap";


const Star = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Search/>
      <CustomMap />
      <View style={styles.view}/>
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
        style={[
          styles.petsRemovebgPreviewIcon,
          styles.iconactionsearch24pxLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/petremovebgpreview2.png")}
      />
      <Image
        style={styles.user1Icon}
        resizeMode="cover"
        source={require("../assets/user-1.png")}
      />
      <View style={[styles.view2, styles.viewSpaceBlock]} />
      <View style={[styles.view3, styles.viewLayout]} />
      <View style={[styles.view4, styles.viewLayout]}>
        <View style={[styles.view5, styles.rectanglePosition]} />
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
      <Text style={styles.text1}>사용자</Text>
      <Text style={styles.text2}>반려견</Text>
      <View style={styles.view6}>
        <View style={[styles.view7, styles.viewPosition]}>
          <View style={styles.view8} />
          <View style={styles.darkElevation00dpOpacit}>
            <View style={[styles.shadow, styles.rectanglePosition]} />
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <View style={[styles.onSurface, styles.rectanglePosition]} />
          </View>
          <Text style={styles.label}>그룹1</Text>
          <Image
            style={[styles.petRemovebgPreviewIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/petremovebgpreview1.png")}
          />
        </View>
        <View style={[styles.view9, styles.viewPosition]}>
          <View style={styles.view8} />
          <View style={styles.darkElevation00dpOpacit}>
            <View style={[styles.shadow, styles.rectanglePosition]} />
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <View style={[styles.onSurface, styles.rectanglePosition]} />
          </View>
          <Text style={styles.label}>그룹2</Text>
          <Image
            style={[styles.petRemovebgPreviewIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/pets.png")}
          />
        </View>
      </View>
      {/* <View style={styles.view}> */}
        <NaBar/>

      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  iconactionsearch24pxLayout: {
    height: 24,
    width: 24,
  },
  iconLayout1: {
    height: 66,
    width: 66,
  },
  viewSpaceBlock: {
    marginTop: 24,
    // width: 414,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  viewLayout: {
    height: 45,
    width: 45,
  },
  rectanglePosition: {
    right: 0,
    bottom: 0,
    top: 0,
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  viewPosition: {
    height: 48,
    left: 0,
    right: 0,
    position: "absolute",
  },
  iconPosition: {
    height: 22,
    top: "50%",
    position: "absolute",
  },
  darkTabselementscontaPosition: {
    bottom: 1,
    right: 0,
    top: 0,
    position: "absolute",
  },
  lightPosition: {
    width: 120,
    bottom: 1,
    top: 0,
    position: "absolute",
  },
  iconInactivePosition: {
    display: "none",
    marginTop: -24,
    left: "50%",
    top: "50%",
    position: "absolute",
    height: 24,
    width: 24,
  },
  captionTypo: {
    textTransform: "uppercase",
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
    lineHeight: 16,
    position: "absolute",
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 1,
  },
  indicatorPosition: {
    top: 70,
    opacity: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.colorSilver,
  },
  textinput: {
    width: 328,
    height: 53,
    marginRight: 73,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
  },
  view1: {
    width: 52,
    height: 52,
    marginTop: -53,
    marginRight: 12,
    backgroundColor: Color.colorSilver,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    borderRadius: Border.br_8xs,
  },
  iconactionsearch24px: {
    marginTop: -43,
    marginRight: 26,
  },
  text: {
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
    marginRight: 28,
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 1,
    fontFamily: FontFamily.nanumGothicOTF,
  },
  icon: {
    marginTop: -305,
    marginRight: 57,
  },
  icon1: {
    marginTop: -66,
    marginRight: -1,
  },
  petsRemovebgPreviewIcon: {
    marginTop: -47,
    marginRight: 81,
  },
  user1Icon: {
    height: 0,
    marginRight: 311,
    marginTop: 7,
    width: 40,
  },
  view2: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorGray_500,
    borderWidth: 0.5,
    height: 350,

    
  },
  view3: {
    marginTop: -330,
    marginRight: 20,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSilver,
    width: "100%",
   
  },
  view5: {
    left: 0,
    bottom: 0,
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
  view4: {
    marginTop: -45,
    marginRight: 315,
  },
  petsIcon: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
  },
  pets: {
    width: 33,
    height: 33,
    marginTop: -39,
    marginRight: 26,
  },
  text1: {
    marginTop: -25,
    marginRight: 255,
    color: Color.colorBlack,
    fontWeight: "800",
    lineHeight: 25,
    letterSpacing: 2,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.nanumGothicOTF,
  },
  text2: {
    marginRight: 75,
    marginTop: -25,
    color: Color.colorBlack,
    fontWeight: "800",
    lineHeight: 25,
    letterSpacing: 2,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.nanumGothicOTF,
  },
  view8: {
    top: 4,
    bottom: 4,
    backgroundColor: Color.colorWhitesmoke_200,
    left: 7,
    position: "absolute",
    width: 40,
    borderRadius: Border.br_8xs,
    
  },
  shadow: {
    left: 0,
    bottom: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  rectangle: {
    backgroundColor: Color.colorGray_200,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  onSurface: {
    backgroundColor: Color.colorGray_400,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  darkElevation00dpOpacit: {
    opacity: 0,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  label: {
    marginTop: -7,
    marginLeft: -129,
    letterSpacing: 0,
    color: Color.colorDimgray,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
    fontWeight: "800",
    position: "absolute",
    fontFamily: FontFamily.nanumGothicOTF,
  },
  petRemovebgPreviewIcon: {
    marginTop: -11.51,
    left: 15,
    width: 24,
    height: 22,
  },
  view7: {
    top: 0,
  },
  view9: {
    bottom: 0,
  },
  view6: {
    // width: 394,
    width: "100%",
    height: 101,
    marginTop: 10,
    marginBottom: -40,
    marginRight: -25, 
  },



  view: {
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    paddingTop: Padding.p_xs,
  },
});

export default Star;
