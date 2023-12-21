import React from "react";
import { StyleSheet, View , Text} from "react-native";
import MapView, {Marker} from "react-native-maps";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

const CustomMap = ({ markerData, filter }) => {
  const navigation = useNavigation();
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  console.log('markerDATA2 :', markerData);
  console.log(filter);
  
  useEffect(() => {
    const getLocationAsync = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          setErrorMsg("위치 권한이 거부되었습니다.");
          return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation.coords);
      } catch (error) {
        console.error("위치 정보를 가져오는 도중 에러 발생", error);
        setErrorMsg("위치 정보를 가져오는 도중 에러 발생");
      }
    };

    getLocationAsync();
  }, []);

  useEffect(() => {
    if (location) {
      console.log("Location Updated:", location);
    }
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("markerData3:", markerData);
    };
  
    fetchData();
  }, [markerData]);

  return (
    <View style={styles.container}>
      {/* <MapView style={styles.map} initialRegion={location} /> */}
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="현재위치"
          />
        
        {/* {markerData && Array.isArray(markerData) && markerData.map((marker, index) => (
            
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.name}
              description={marker.description}
            />
          ))} */}
          {filter &&
            filter.map((item, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
                title={item.name}
                description={item.description}
                image={require("../assets/greenPets.png")}
              />
            ))}
        {markerData  && (
            // console.log(`Marker ${index + 1} - Latitude: ${marker.latitude}, Longitude: ${marker.longitude}`);
  
          <Marker
            // skey={index}
            coordinate={{
              latitude: markerData.latitude,
              longitude: markerData.longitude,
            }}
            title={markerData.name}
            description={markerData.description}
            // image={require("../assets/pets.png")}

            image={require("../assets/petremovebgpreview1.png")}
          />
          )}
        </MapView>
    )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: -10,
    
  },
  map: {
    // flex: 1,
    width: "100%",
    height: 500,
    // width: "100%",
    // aspectRatio: 0.5,
    zIndex: -10,
    marginTop: -20,
  },
});

export default CustomMap;

