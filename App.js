import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
} from "react-native";
import AutoWebView from "./src/screens/AutoWebView";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="automoto" component={AutoWebView}  />
        <Stack.Screen name="cars" component={AutoWebView} />
        <Stack.Screen name="auto" component={AutoWebView} />
        <Stack.Screen name="mobile" component={AutoWebView} />
      </Stack.Navigator>
    </NavigationContainer>
    // {/* </NavigationContainer> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#40a7f1",
    alignItems: "center",
    justifyContent: "center",
  },
  baner: {
    width: "75%",
    height: "20%",
    position: "absolute",
    top: 80,
    minWidth: "55%",
    minHeight: 60,
  },
  touchables: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "ligthblue",
    overflow: "hidden",
    marginBottom: 15,
    minWidth: "55%",
    minHeight: 60,
  },
  autobg: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "blacak  ",
    overflow: "hidden",
    marginBottom: 15,
    minWidth: "55%",
    minHeight: 60,
  },
});
