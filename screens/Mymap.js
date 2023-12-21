import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import NaBar from "../component/NaBar";

const Mymap = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mymap}>
      <TextInput
        style={[styles.textinput, styles.viewShadowBox]}
        keyboardType="default"
      />
      <View style={[styles.view1, styles.viewShadowBox]} />
      <Image
        style={styles.iconactionsearch24px}
        resizeMode="cover"
        source={require("../assets/iconactionsearch.png")}
      />
      <Text style={styles.text}>검색</Text>
      <View style={[styles.view2, styles.viewLayout3]}>
        <Text style={[styles.text1, styles.textTypo]}>사용자</Text>
        <Text style={[styles.text2, styles.textTypo]}>반려견</Text>
        <View style={[styles.view3, styles.viewLayout1]} />
        <View style={styles.pets}>
          <Image
            style={[styles.petsIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/pets.png")}
          />
        </View>
        <View style={[styles.view4, styles.viewLayout1]}>
          <View style={[styles.view5, styles.viewPosition]} />
          <Image
            style={[styles.user2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/user-2.png")}
          />
        </View>
      </View>
      <View style={styles.view6}>
        <Image
          style={[styles.petsIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-1.png")}
        />
        <Pressable
          style={[styles.pressable, styles.view8Layout]}
          onPress={() => navigation.navigate("Place_sug")}
        >
          <View style={[styles.view7, styles.viewPosition]}>
            <Text style={[styles.text3, styles.text3Typo]}>장소제안</Text>
            <Image
              style={[
                styles.iconcontentcreate24px,
                styles.iconcontentcreate24pxPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/iconcontentcreate-24px1.png")}
            />
          </View>
        </Pressable>
        <View style={[styles.view8, styles.iconPosition]}>
            <Text style={[styles.mymap1, styles.text3Typo]}>MYmap</Text>
            <Image
              style={[
                styles.petRemovebgPreviewIcon,
                styles.iconcontentcreate24pxPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/petremovebgpreview.png")}
            />
          
        </View>
      </View>
      <View style={[styles.view10, styles.viewLayout]} />
      <View style={[styles.view11, styles.viewShadowBox]} />
      <View style={styles.nav}/>

        <NaBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  nav:{
    marginBottom: -10,
  },

  textinput: {
    width: 290,
    height: 53,
    marginRight: 73,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
    marginTop: 10,
  },

  viewShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  viewLayout3: {
    // width: 414,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    color: Color.colorBlack,
    fontWeight: "800",
    lineHeight: 30,
    letterSpacing: 2,
    fontSize: FontSize.size_lg,
    left: "50%",
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.nanumGothicOTF,
  },
  viewLayout1: {
    height: 45,
    width: 45,
    top: 21,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  viewPosition: {
    bottom: 0,
    top: 0,
  },
  view8Layout: {
    width: 56,
    left: "50%",
  },
  text3Typo: {
    fontSize: FontSize.size_sm,
    left: 0,
    bottom: 0,
    lineHeight: 16,
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.nanumGothicOTF,
    fontWeight: "700",
    letterSpacing: 1,
  },
  iconcontentcreate24pxPosition: {
    top: 0,
    left: "50%",
    position: "absolute",
    height: 24,
  },
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  viewLayout: {
    marginRight: 205,
    width: 2,
    borderRightWidth: 1,
    borderColor: Color.colorGainsboro,
    height: 33,
    borderStyle: "solid",
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
    top: "50%",
    left: "50%",
    position: "absolute",
    height: 24,
    width: 24,
  },
  captionTypo: {
    textTransform: "uppercase",
    top: "50%",
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    left: "50%",
    position: "absolute",
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 1,
  },
  indicatorPosition: {
    opacity: 0,
    top: 70,
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.colorSilver,
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
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  iconactionsearch24px: {
    marginTop: -43,
    marginRight: 26,
    height: 24,
    width: 24,
  },
  text: {
    fontSize: FontSize.size_3xs,
    marginRight: 28,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "700",
    letterSpacing: 1,
    fontFamily: FontFamily.nanumGothicOTF,
  },
  text1: {
    marginLeft: -110,
    top: 32,
    marginTop: -5,
  },
  text2: {
    marginLeft: 60,
    top: 33,
    marginTop: -5,
  },
  view3: {
    right: 20,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSilver,
  },
  petsIcon: {
    left: 0,
    bottom: 0,
    top: 0,
    right: 0,
  },
  pets: {
    top: 27,
    right: 26,
    width: 33,
    height: 33,
    position: "absolute",
  },
  view5: {
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSilver,
    position: "absolute",
  },
  user2Icon: {
    top: 5,
    right: 5,
    bottom: 6,
    left: 6,
  },
  view4: {
    left: 21,
  },
  view2: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    borderColor: Color.colorGray_500,
    borderWidth: 0.5,
    height: 736,
    marginTop: 32,
    borderStyle: "solid",
  },
  text3: {
    color: Color.colorGray_100,
  },
  iconcontentcreate24px: {
    marginLeft: -12,
    width: 24,
    top: 0,
  },
  view7: {
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
  },
  pressable: {
    marginLeft: 50,
    top: 10,
    height: 48,
    position: "absolute",
  },
  mymap1: {
    color: Color.colorDarkolivegreen,
  },
  petRemovebgPreviewIcon: {
    marginLeft: -13,
    width: 27,
  },
  view8: {
    marginTop: -24.35,
    marginLeft: -122,
    height: 47,
    width: 56,
    left: "50%",
  },
  view6: {
    width: "100%",
    height: 70,
    marginTop: -655,
    // marginRight: 50,
    alignSelf: "center",
  },
  view10: {
    marginTop: -52,
    width: "80%",
  },
  view11: {
    // width: 373,
    width: "90%",
    height: 300,
    marginTop: 40,
    marginRight: 18,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    backgroundColor: Color.colorWhitesmoke_100,
    marginBottom: -10,
  },


  mymap: {
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    paddingTop: Padding.p_xs,
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default Mymap;
