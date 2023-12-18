import * as React from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import Search from '../component/Search';
import NaBar from '../component/NaBar';

const Map = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      
      <Search/>
     
      <View style ={styles.view}/>
      <View style={styles.view11}>
        
      </View>
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
        source={require("../assets/petsremovebgpreview.png")}
      />
      <Image
        style={styles.user1Icon}
        resizeMode="cover"
        source={require("../assets/user-1.png")}
      />
      
    
      <View style={[styles.view2, styles.viewLayout2]} />
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
      <Text style={[styles.text1, styles.textTypo]}>사용자</Text>
      <Text style={[styles.text2, styles.textTypo]}>반려견</Text>
      <Image
        style={styles.icon2}
        resizeMode="cover"
        source={require("../assets/-1.png")}
      />
      <View style={styles.view6}>
        <Pressable
          style={[styles.pressable, styles.rectanglePosition]}
          onPress={() => navigation.navigate("Place_sug")}
        >
          <Text style={[styles.text3, styles.text3Typo]}>장소제안</Text>
          <Image
            style={styles.iconcontentcreate24px}
            resizeMode="cover"
            source={require("../assets/iconcontentcreate-24px1.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.pressable1}
        onPress={() => navigation.navigate("Mymap")}
      >
        <View style={[styles.pressable, styles.rectanglePosition]}>
          <Text style={[styles.mymap, styles.text3Typo]}>MYmap</Text>
          <Image
            style={styles.iconcontentcreate24px}
            resizeMode="cover"
            source={require("../assets/petsremovebgpreview.png")}
          />
        </View>
      </Pressable>
      
      <View style={[styles.view8, styles.petsSpaceBlock]} />
      
      <NaBar/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  
  view10: {
    marginTop: -38,

  },
  view11:{
    zIndex: 100,
    marginTop: -800,
    height: 66,
    width: 66,
    marginBottom: -285,
  },

  food:{
    marginLeft: 8,
   
  },
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
  viewLayout2: {
    width: 414,
    backgroundColor: Color.colorWhite,
    height: 190,
  },
  viewLayout: {
    height: 45,
    width: 45,
  },
  rectanglePosition: {
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
    lineHeight: 16,
    letterSpacing: 2,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.nanumGothicOTF,
  },
  text3Typo: {
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    left: 0,
    bottom: -30,
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.nanumGothicOTF,
    fontWeight: "700",
    letterSpacing: 1,
  },

  text: {
    fontSize: FontSize.size_3xs,
    marginRight: 28,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "700",
    letterSpacing: 1,
    fontFamily: FontFamily.nanumGothicOTF,
    marginTop: 63,
  },
  icon: {
    marginTop: 805,
    marginRight: 57,
    
  },
  icon1: {
    marginTop: -66,
    marginRight: -1,

  },
  petsRemovebgPreviewIcon: {
    marginTop: -48,
    marginRight: 82,
  },
  user1Icon: {
    width: 40,
    height: 0,
    marginRight: 311,
    marginTop: 7,
  },
  view2: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    borderColor: Color.colorGray_500,
    borderWidth: 0.5,
    height: 218,
    marginTop: 24,
    borderStyle: "solid",
  },
  view3: {
    marginTop: -172,
    marginRight: 20,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSilver,
  },
  view5: {
    left: 0,
    right: 0,
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
    marginTop: -40,
    marginRight: 348,
    
  },
  petsIcon: {
    left: 0,
    bottom: 0,
    top: 0,
    right: 0,
  },
  pets: {
    width: 33,
    marginTop: -39,
    height: 33,
    marginRight: 26,
  },
  text1: {
    marginTop: -30,
    marginRight: 287,
    paddingTop: 10,
    marginBottom: -20,
  },
  text2: {
    marginRight: 75,
    marginTop: -10,
    paddingTop: 14,
    marginBottom: -20,
  },
  icon2: {
    width: 374,
    height: 70,
    marginTop: 45,
    alignSelf: "center",
    marginBottom: -50,
  },
  text3: {
    color: Color.colorGray_100,
  },
  iconcontentcreate24px: {
    left: "50%",
    marginLeft: -12,
    top: 30,
    position: "absolute",
    height: 24,
    width: 24,
  },
  pressable: {
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    
  },
  view6: {
    height: 48,
    marginTop: -40,
    width: 56,
    marginRight: 87,
   
  },
  mymap: {
    color: Color.colorDimgray,
  },
  pressable1: {
    height: 46,
    marginTop: -45,
    marginRight: 273,
    width: 56,
  },
  view8: {
    borderColor: Color.colorGainsboro,
    borderRightWidth: 1,
    width: 2,
    marginTop: -15,
    marginRight: 205,
    height: 33,
    borderStyle: "solid",
    marginBottom: -20,
  },



  darkTabselementsconta: {
    left: 0,
  },

  caption: {
    marginTop: 6,
    marginLeft: -7,
    fontFamily: FontFamily.nanumGothicOTF,
    textTransform: "uppercase",
  },
  lightTabselements6Sta: {
    left: 7,
  },

  caption2: {
    marginLeft: -28,
    marginTop: 7,
    fontFamily: FontFamily.nanumGothicOTF,
    textTransform: "uppercase",
  },
  lightTabselements6Sta1: {
    marginLeft: -60,
    left: "50%",
  },
  lightElevation00dp2: {
    right: 7,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },


  caption3: {
    marginTop: 5,
    marginLeft: -100,
    // marginRight: -60,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
  },

  glyphstabBarcollectionIcon: {
    marginTop: -13,
    left: 56,
    width: 22,
    height: 22,
  },
  glyphssmallbookmarkIcon: {
    marginLeft: -6,
    width: 12,
    height: 18,
    left: "50%",
    marginTop : -12,
  },
  
  colorIcon: {
    width: 18,
    height: 19,
    marginTop: -95,
    marginRight: 58,
    marginBottom: 30,
  },
  view: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    paddingTop: Padding.p_xs,
   
  },
});

export default Map;
