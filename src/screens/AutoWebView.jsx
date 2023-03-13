import React from 'react';
import WebView from 'react-native-webview';
import { useFocusEffect, useState } from '@react-navigation/native';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';

function AutoWebView(props) {
    function selectView() {
        switch (props.route.name) {
            case "automoto":
                uri = 'https://automoto.bg/';
                break;
            case "cars":
                uri = 'https://www.cars.bg/';
                break;
            case "auto":
                uri = 'https://www.auto.bg/'
                break;
            case "mobile":
                uri = 'https://www.mobile.bg';
                break;

            default:
                uri = "https://www.mobile.bg"
                break;
        }
        return <WebView source={{uri:uri}}></WebView>;
    }
    return (
        <SafeAreaView style={styles.container}>
            { selectView()}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})

export default AutoWebView;