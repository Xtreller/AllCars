import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
} from "react-native";
export default function App() {
  const AutoMotoLogo = require("./src/image/ezgif-3-011b04688a.jpg");
  const AutoBgLogo = require("./src/image/ezgif-3-011b04688a.jpg");
  const carsLogo = require("./src/image/ezgif-3-2091f6109b.png");
  const MobileLogo = require("./src/image/mobile.png");

  return (
    // <NavigationContainer>
    <SafeAreaView style={styles.container}>
   
      <Image
        source={require("./src/image/logo_transparent.png")}
        style={styles.baner}
      ></Image>
      <TouchableOpacity
        style={[styles.touchables, { backgroundColor: "#50C346" }]}
      >
        <Image source={AutoMotoLogo} style={{ width: 200, height: 60 }}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.touchables, { backgroundColor: "#FF6600" }]}
      >
        <Image
          source={carsLogo}
          style={{ width: 200, height: 60 }}
          resizeMode={"contain"}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.autobg, { backgroundColor: "#38618C" }]}>
        <Text>Аuto.bg</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.touchables, { backgroundColor: "#0099FF" }]}
      >
        <Image
          source={MobileLogo}
          style={{ width: 200, height: 60 }}
          resizeMode={"contain"}
        ></Image>
      </TouchableOpacity>
    </SafeAreaView>
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
