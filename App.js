const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Place_sug from "./screens/Place_sug";
import Mymap from "./screens/Mymap";
import Star from "./screens/Star";
import Map from "./screens/Map";
import Sign_up from "./screens/sign_up";
import Login1 from "./screens/Login";
import Setting from "./screens/Setting";
import Splash from "./screens/Splash";

import { createNativeStackNavigator } from "@react-navigation/native-stack";


const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Login1"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Place_sug"
              component={Place_sug}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Mymap"
              component={Mymap}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Star"
              component={Star}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Map"
              component={Map}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sign_up"
              component={Sign_up}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login1"
              component={Login1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Setting"
              component={Setting}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splash />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
