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

const Search = (() => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      {/* <View style ={styles.view}> */}
      <TextInput
        style={[styles.textinput, styles.rectangleShadowBox]}
        keyboardType="default"
      />
      <View style={[styles.view1, styles.rectangleShadowBox]} />
      <Text style={styles.text}>검색</Text>
      <Image
        style={[styles.iconactionsearch24px, styles.iconactionsearch24pxLayout]}
        resizeMode="cover"
        source={require("../assets/iconactionsearch.png")}
      />
      {/* <Text style={styles.text}>검색</Text> */}
      {/* </View> */}
      <View style={styles.view10}>
      <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      horizontal={true}
      >
      <View style={[styles.horizontalScrollViewItem, styles.rectangleShadowBox]}>
      <Image
        style={styles.food}
        resizeMode="cover"
        source={require("../assets/food.png")}
      />
        </View>
        <View style={[styles.horizontalScrollViewItem, styles.rectangleShadowBox]}>
          <Image
            // style={[styles.food, styles.foodLayout1]}
            resizeMode="cover"
            source={require("../assets/동물병원.png")}
          />
        </View>
        <View style={[styles.horizontalScrollViewItem, styles.rectangleShadowBox]}>
          <Image
            // style={[styles.food, styles.foodLayout1]}
            resizeMode="cover"
            source={require("../assets/애견놀이터.png")}
          />
        </View>
        <View style={[styles.horizontalScrollViewItem, styles.rectangleShadowBox]}>
          <Image
            // style={[styles.food, styles.foodLayout1]}
            resizeMode="cover"
            source={require("../assets/애견동반카페.png")}
          />
        </View>
       
      </ScrollView>
      </View>
      {/* <View style={styles.view11}>
      </View> */}
   
    </View>
    
  );
});

const styles = StyleSheet.create({
  
  
  
  scrollViewContent:{
    // backgroundColor: Color.colorDarkolivegreen,
    height: 50,
    marginTop: 15,
    // zIndex: -100,

  },
  horizontalScrollViewItem: {
    
    height: "100%",  
    marginHorizontal: 0,  
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
  
  
  
 
  textinput: {
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
    // marginTop: 20,
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
    marginTop: -33,
    marginRight: 26,
    marginBottom: 0,
  },
  text: {
    fontSize: FontSize.size_3xs,
    marginRight: 28,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "700",
    letterSpacing: 1,
    fontFamily: FontFamily.nanumGothicOTF,
    marginTop: -20,
  
  },
 
  view: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    paddingTop: Padding.p_xs,
    marginBottom: 10,
  },
});

export default Search;
