import React from 'react';
import {StyleSheet, View, Platform} from "react-native";
import {THEME} from "../../theme";
import {AppTextBold} from "./ui/AppTextBold";

export const Navbar = () => {
    return (
        <View style={{ ...styles.navbar, ...Platform.select({
                ios: styles.navbarIos,
                android: styles.navbarAndroid
            })}}
        >
            <AppTextBold style={styles.text}>Todo App</AppTextBold>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10
    },
    navbarAndroid: {
      borderBottomWidth: 2
    },
    navbarIos: {
        borderBottomWidth: 1
    },
    text: {
        color: THEME.WHITE_COLOR,
        fontSize: 26
    }
});
