import React, { Component } from "react";
import { View, ViewStyle, Text, TextStyle, StyleSheet } from "react-native";

import HelloWorld from "./components/HelloWorld/index";

interface Props {

}

interface State {

}

export default class App extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload, {"\n"}
                    Cmd+D or shake for dev menu
                </Text>

                <HelloWorld style={styles.helloworld} max={10} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    } as ViewStyle,

    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    } as TextStyle,

    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    } as TextStyle,

    helloworld: {
        marginVertical: 15,
    } as ViewStyle,
});
