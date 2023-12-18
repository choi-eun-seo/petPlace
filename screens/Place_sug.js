import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Place_sug = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <View style={[styles.view1, styles.viewShadowBox]} />
      <View style={[styles.view2, styles.viewShadowBox]} />
      <Image
        style={[styles.iconactionsearch24px, styles.iconactionsearch24pxLayout]}
        resizeMode="cover"
        source={require("../assets/iconactionsearch.png")}
      />
      <Text style={styles.text}>검색</Text>
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
      <View style={[styles.pets, styles.petsSpaceBlock]}>
        <Image
          style={[styles.petsIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/pets.png")}
        />
      </View>
      <Text style={[styles.text1, styles.textTypo1]}>사용자</Text>
      <Text style={[styles.text2, styles.textTypo1]}>반려견</Text>
      <Image
        style={[styles.icon, styles.viewLayout]}
        resizeMode="cover"
        source={require("../assets/-1.png")}
      />
      <View style={styles.view7}>
        <View style={[styles.view8, styles.viewPosition]}>
          <Text style={styles.text3}>장소제안</Text>
          <Image
            style={[
              styles.iconcontentcreate24px,
              styles.iconactionsearch24pxLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/iconcontentcreate-24px.png")}
          />
        </View>
      </View>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Mymap")}
      >
        <View style={[styles.view8, styles.viewPosition]}>
          <Text style={styles.mymap}>MYmap</Text>
          <Image
            style={[
              styles.iconcontentcreate24px,
              styles.iconactionsearch24pxLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/petsremovebgpreview.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.view10, styles.petsSpaceBlock]} />
      <View style={[styles.view11, styles.viewLayout]}>
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-2.png")}
        />
        <Text style={styles.text4}>
          <Text style={styles.text5}>신규 장소 등록 요청</Text>
          <Text style={styles.text6}>{` >`}</Text>
        </Text>
        <Text
          style={[styles.text7, styles.textTypo]}
        >{`지도에 표시되지 않은 새로운 장소가 있다면
알려주세요!`}</Text>
      </View>
      <View style={[styles.view12, styles.viewLayout]}>
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-2.png")}
        />
        <Text style={styles.text8}>
          <Text style={styles.text5}>{`신규 매장 등록 `}</Text>
          <Text style={styles.text6}>{` >`}</Text>
        </Text>
        <Text style={[styles.text11, styles.textTypo]}>
          새 매장을 오픈한 사업주라면 등록해보세요!
        </Text>
      </View>
      
      <Image
        style={styles.user1Icon}
        resizeMode="cover"
        source={require("../assets/user-1.png")}
      />
      <View style={[styles.view13, styles.viewLayout3]}>
        <View
          style={[
            styles.darkTabselementsconta,
            styles.darkTabselementscontaPosition,
          ]}
        >
          <View style={[styles.view8, styles.viewPosition]}>
          
            <View style={[styles.rectangle3, styles.viewPosition]} />
          </View>
        </View>
        <Pressable
          style={[styles.lightTabselements6Sta, styles.lightPosition]}
          onPress={() => navigation.navigate("Map")}
        >
           <Text style={[styles.caption, styles.captionTypo]}>홈</Text>
          
        </Pressable>
        <View style={[styles.lightTabselements6Sta1, styles.lightPosition]}>
          <Text style={[styles.caption2, styles.captionTypo]}>즐겨찾기</Text>
          <View style={styles.iconActive}>
           
          </View>
          
        </View>
        <View
          style={[
            styles.lightTabselements6Sta2,
            styles.darkTabselementscontaPosition,
          ]}
        >
          <Text style={[styles.caption3, styles.captionTypo]}>프로필설정</Text>
          
        </View>
        <Image
          style={styles.glyphstabBarcollectionIcon}
          resizeMode="cover"
          source={require("../assets/glyphstab-barcollection.png")}
        />
        <Image
          style={styles.glyphssmallbookmarkIcon}
          resizeMode="cover"
          source={require("../assets/glyphssmallbookmark.png")}
        />
      </View>
      <Image
        style={styles.colorIcon}
        resizeMode="cover"
        source={require("../assets/-color.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewShadowBox: {
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
  petsSpaceBlock: {
    marginTop: -39,
    height: 33,
  },
  textTypo1: {
    fontWeight: "800",
    letterSpacing: 2,
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    lineHeight: 30,
    textAlign: "center",
    fontFamily: FontFamily.nanumGothicOTF,
  },
  viewLayout: {
    alignSelf: "center",
    height: 70,
    width: 374,
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
    left: 16,
    color: Color.colorGray_100,
    position: "absolute",
    fontFamily: FontFamily.nanumGothicOTF,
    fontWeight: "700",
    letterSpacing: 1,
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
    left: "50%",
    fontSize: FontSize.size_sm,
    lineHeight: 16,
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
    width: 328,
    height: 53,
    marginRight: 73,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
    marginTop: 20,
  },
  view2: {
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
  view3: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    borderColor: Color.colorGray_500,
    borderWidth: 0.5,
    height: 736,
    marginTop: 32,
    borderStyle: "solid",
  },
  view4: {
    marginTop: -715,
    marginRight: 20,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSilver,
  },
  view6: {
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
  view5: {
    marginTop: -45,
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
    marginRight: 26,
  },
  text1: {
    marginTop: -31,
    marginRight: 287,
    color: Color.colorBlack,
  },
  text2: {
    marginRight: 75,
    marginTop: -30,
    color: Color.colorBlack,
  },
  icon: {
    marginTop: 38,
  },
  text3: {
    color: Color.colorDarkolivegreen,
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    left: 0,
    bottom: 0,
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.nanumGothicOTF,
    fontWeight: "700",
    letterSpacing: 1,
  },
  iconcontentcreate24px: {
    left: "50%",
    marginLeft: -12,
    top: 0,
    position: "absolute",
  },
  view8: {
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
  },
  view7: {
    height: 48,
    marginRight: 83,
    marginTop: -59,
    width: 56,
  },
  mymap: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    left: 0,
    bottom: 0,
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.nanumGothicOTF,
    fontWeight: "700",
    letterSpacing: 1,
  },
  pressable: {
    height: 46,
    marginTop: -47,
    marginRight: 275,
    width: 56,
  },
  view10: {
    borderColor: Color.colorGainsboro,
    borderRightWidth: 1,
    width: 2,
    marginRight: 206,
    borderStyle: "solid",
  },
  icon1: {
    right: -18,
    bottom: -18,
    left: 0,
    top: 0,
  },
  text5: {
    color: Color.colorBlack,
  },
  text6: {
    color: Color.colorDimgray,
  },
  text4: {
    left: 15,
    top: "50%",
    marginTop: -23.81,
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.nanumGothicOTF,
    fontWeight: "700",
    letterSpacing: 1,
  },
  text7: {
    bottom: 8,
    lineHeight: 16,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  view11: {
    marginTop: 58,
  },
  text8: {
    left: 16,
    top: "50%",
    marginTop: -23.81,
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.nanumGothicOTF,
    fontWeight: "700",
    letterSpacing: 1,
  },
  text11: {
    marginTop: 0.19,
    top: "50%",
  },
  view12: {
    marginTop: 14,
    marginBottom: -80,
  },
  icon3: {
    width: 66,
    height: 66,
    marginTop: 95,
    marginRight: 57,
  },
  petsRemovebgPreviewIcon1: {
    marginTop: -54,
    marginRight: 87,
  },
  user1Icon: {
    width: 40,
    height: 0,
    marginRight: 311,
    marginTop: 7,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 4,
    elevation: 4,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    backgroundColor: Color.colorSilver,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  rectangle1: {
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowRadius: 10,
    elevation: 10,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    backgroundColor: Color.colorSilver,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  rectangle2: {
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowRadius: 5,
    elevation: 5,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    backgroundColor: Color.colorSilver,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  rectangle3: {
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    backgroundColor: Color.colorSilver,
  },
  darkTabselementsconta: {
    left: 0,
  },
  lightElevation00dp: {
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iconActive: {
    marginTop: -24,
    top: "50%",
    left: "50%",
    marginLeft: -12,
    position: "absolute",
    height: 24,
    width: 24,
  },
  iconInactive: {
    marginLeft: -12,
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
  indicator: {
    left: 0,
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
  primary2: {
    left: 7,
    right: 0,
    bottom: 0,
    position: "absolute",
  },
  indicator1: {
    left: 7,
  },
  caption3: {
    marginTop: 5,
    marginLeft: -40.5,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
  },
  iconsocialnotifications24px1: {
    marginLeft: -8.5,
  },
  lightTabselements6Sta2: {
    width: 127,
  },
  glyphstabBarcollectionIcon: {
    marginTop: -22.25,
    left: 56,
    width: 22,
    height: 22,
    top: "50%",
    position: "absolute",
  },
  glyphssmallbookmarkIcon: {
    marginLeft: -6,
    width: 12,
    height: 18,
    top: "50%",
    left: "50%",
    marginTop: -20,
    position: "absolute",
  },
  view13: {
    height: 73,
    marginTop: 242,
  },
  colorIcon: {
    width: 18,
    height: 19,
    marginRight: 58,
    marginTop: -59,
  },
  view: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    paddingTop: Padding.p_xs,
  },
});

export default Place_sug;
