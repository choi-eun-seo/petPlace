import * as React from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,

} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const NaBar = (() => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      
     
   
      <View style={[styles.view9, styles.viewLayout2]}>
        <View
          style={[
            styles.darkTabselementsconta,
            styles.darkTabselementscontaPosition,
          ]}
        >
            <View style={[styles.rectangle3, styles.rectanglePosition]} />
          
        </View>
        <Pressable 
          style={[styles.lightTabselements6Sta, styles.lightPosition]}
          onPress={()=> navigation.navigate("Map")}
        >
          <View>
          <Image
            style={[styles.glyphstabBarcollectionIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/glyphstab-barcollection.png")}
          />
          <Text style={[styles.caption, styles.captionTypo]}>홈</Text>
          </View>

          {/* <Image
            style={[styles.glyphstabBarcollectionIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/glyphstab-barcollection.png")}
          />
          <Text style={[styles.caption, styles.captionTypo]}>홈</Text> */}
        </Pressable>
        <Pressable
          style={[styles.lightTabselements6Sta1, styles.lightPosition]}
          onPress={() => navigation.navigate("Star")}
        >
          <Image
          style={[styles.glyphssmallbookmarkIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/glyphssmallbookmark.png")}
        />
          <Text style={[styles.caption2, styles.captionTypo]}>즐겨찾기</Text>
            
        </Pressable>
        <View
          style={[
            styles.darkTabselementscontaPosition,
          ]}
        >
        <Pressable
          style={[styles.lightElevation00dp2, styles.rectanglePosition]}
          onPress={() => navigation.navigate("Setting")}
        >
          <View>
          <Image
            style={styles.colorIcon}
            resizeMode="cover"
            source={require("../assets/-color.png")}
          />
         
          <Text style={[styles.caption3, styles.captionTypo]}>프로필설정</Text>
          </View>
          {/* <Image
            style={styles.colorIcon}
            resizeMode="cover"
            source={require("../assets/-color.png")}
          />
         
          <Text style={[styles.caption3, styles.captionTypo]}>프로필설정</Text> */}
          
        </Pressable>
        </View>
      </View>
      <Image
        style={styles.colorIcon}
        resizeMode="cover"
        source={require("../assets/-color.png")}
      />
    </View>

  );
});


const styles = StyleSheet.create({
  viewLayout2: {
    width: 414,
    backgroundColor: Color.colorWhite,
  },

  rectanglePosition: {
    bottom: 0,
    top: 0,
  },
 
 
  darkTabselementscontaPosition: {
    bottom: 0,
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
 
  iconPosition: {
    top: "40%",
    position: "absolute",
    marginLeft: -5,
  },
  captionTypo: {
    textTransform: "uppercase",
    top: "40%",
    left: "50%",
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    position: "absolute",
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 1,
  },
 
  


  rectangle3: {
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    backgroundColor: Color.colorSilver,
    marginBottom: 25,
  },
  darkTabselementsconta: {
    left: 0,
  },

  caption: {
    marginTop: 45,
    marginLeft: -4,
    fontFamily: FontFamily.nanumGothicOTF,
    textTransform: "uppercase",
  },
  lightTabselements6Sta: {
    left: 7,
  },

  caption2: {
    marginLeft: -28,
    marginTop: 5,
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
    marginTop: 45,
    marginLeft: -100,
    // marginRight: -60,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
  },

  glyphstabBarcollectionIcon: {
    marginTop: 17,
    left: 56,
    width: 22,
    height: 22,
  },
  glyphssmallbookmarkIcon: {
    marginLeft: -6,
    width: 12,
    height: 18,
    left: "50%",
    marginTop : -21,
  },
  view9: {
    height: 100,
    marginTop: 54,
    marginBottom:10, 
  },
  colorIcon: {
    width: 18,
    height: 19,
    marginTop: -94,
    marginRight: 58,
    marginBottom: 30,
  },
  view: {
    // backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    paddingTop: -Padding.p_xs,
    marginBottom: -150,
  },
});

export default NaBar;
