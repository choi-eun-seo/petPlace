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
import { useState } from "react";
import axios from "axios";

const Search = (() => {
  const navigation = useNavigation();
  const [markerData, setMarkerData] = useState(null);
  const [searchText, setSearchText] = useState("");
  let [newCate, setCate] = useState("");

  const updateMarkerData = (markerData) => {
    setMarkerData(markerData);
    console.log(markerData);
  };
  
  const handleSearch = async () => {
    
    try {

      const response = await axios.get(`http://192.168.35.45:3000/search`, {
        params: { searchText },
      });
      
      if (response.status === 200) {
        const markerData = response.data;
        updateMarkerData(markerData);
        // setMarkerData(data);

        // console.log( data);

        navigation.navigate('Map', { searchData: markerData });
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const handleImageClick = async (label) => {
    try {
      const response = await axios.post(
        `http://192.168.35.45:3000/cate`,
        { cate: label } 
      );
  
      if (response.status === 200) {
        const filter = response.data;
        console.log(filter);
        navigation.navigate('Map', { filter: filter });
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error sending data to the server:", error);
    }
  };
  return (
    <View style={styles.view}>
      {/* <View style ={styles.view3}> */}
      <TextInput
        style={[styles.textinput, styles.rectangleShadowBox]}
        keyboardType="default"
        placeholder="검색어를 입력하세요"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <Pressable onPress={handleSearch}>
      <View style={[styles.view1, styles.rectangleShadowBox]} />
      <Text style={styles.text}>검색</Text>
      <Image
        style={[styles.iconactionsearch24px, styles.iconactionsearch24pxLayout]}
        resizeMode="cover"
        source={require("../assets/iconactionsearch.png")}
      />
      </Pressable>
      {/* <Text style={styles.text}>검색</Text> */}
      <View style={styles.view10}>
      {/* </View> */}
      <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      horizontal={true}
      >
      <Pressable onPress={handleImageClick}>
        <Image
          style={styles.food}
          resizeMode="cover"
          source={require("../assets/food.png")}
        />
      </Pressable>
      <Pressable onPress={() => handleImageClick("병원")}>
        <Image
          style={[styles.food, styles.foodLayout1]}
          resizeMode="cover"
          source={require("../assets/동물병원.png")}
        />
      </Pressable>
      <Pressable onPress={() => handleImageClick("여행지")}>
        <Image
          style={[styles.food, styles.foodLayout1]}
          resizeMode="cover"
          source={require("../assets/애견놀이터.png")}
        />
      </Pressable>
      <Pressable onPress={() => handleImageClick("카페")}>
        <Image
          style={[styles.food, styles.foodLayout1]}
          resizeMode="cover"
          source={require("../assets/애견동반카페.png")}
        />
      </Pressable>
       
      </ScrollView>
      </View>
      {/* <View style={styles.view11}>
      </View> */}
   
    </View>
    
  );
});

const styles = StyleSheet.create({
  
  
  view3: {
    width: "100%",
  },
  horizontalScrollViewItem: {
    
    height: "100%",  
    marginHorizontal: 0,  
    zIndex: 100,
    marginTop: 1,
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
    marginTop: -34,
    left: 15,
    
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
    shadowColor: "rgba(0, 0, 0, 0.3)",
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
    marginRight: 10,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "700",
    letterSpacing: 1,
    fontFamily: FontFamily.nanumGothicOTF,
    marginTop: -20,
  
  },
 
  view: {
    // backgroundColor: Color.colorWhitesmoke_100,
    // flex: 1,
    width: "100%",
    alignItems: "flex-end",
    paddingTop: Padding.p_xs,
    marginBottom: 10,
    height: 70,
  },
});

export default Search;
