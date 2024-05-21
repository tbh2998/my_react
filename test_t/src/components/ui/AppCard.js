import {View, StyleSheet} from "react-native";
import {THEME} from "../../../theme";

export const AppCard = ({ children, style }) => {
    return <View style={{ ...styles.default, ...style }}>
        {children}
    </View>
}

const styles = StyleSheet.create({
    default: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: "#000",
        shadowRadius: 3,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2},
        elevation: 8,
        backgroundColor: THEME.WHITE_COLOR,
        borderRadius: 10
    }
});
