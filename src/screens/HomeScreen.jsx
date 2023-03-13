import React from 'react';
import {
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Dimensions,
    SafeAreaView,
} from "react-native";

function HomeScreen({ navigation }) {
    const AutoMotoLogo = require("../image/ezgif-3-011b04688a.jpg");
    const AutoBgLogo = require("../image/ezgif-3-011b04688a.jpg");
    const carsLogo = require("../image/ezgif-3-2091f6109b.png");
    const MobileLogo = require("../image/mobile.png");
    return (

        <SafeAreaView style={styles.container}>

            <Image
                source={require("../image/logo_transparent.png")}
                style={styles.baner}
            ></Image>
            <View >
                <TouchableOpacity
                    onPress={() => navigation.navigate('automoto')}
                    style={[styles.touchables, { backgroundColor: "#50C346" }]}
                >
                    <Image source={AutoMotoLogo} style={{ width: 200, height: 60 }}></Image>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('cars')}

                    style={[styles.touchables, { backgroundColor: "#FF6600" }]}
                >
                    <Image
                        source={carsLogo}
                        style={{ width: 200, height: 60 }}
                        resizeMode={"contain"}
                    ></Image>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.autobg, { backgroundColor: "#38618C" }]}
                    onPress={() => navigation.navigate('auto')}
                >
                    <Text>Аuto.bg</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.touchables, { backgroundColor: "#0099FF" }]}
                    onPress={() => navigation.navigate('mobile')}

                >
                    <Image
                        source={MobileLogo}
                        style={{ width: 200, height: 60 }}
                        resizeMode={"contain"}
                    ></Image>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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
        position:'relative',
        height: "20%",
        minWidth: "55%",
        minHeight: 60,
        marginBottom:20,
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

export default HomeScreen;