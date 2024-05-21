import {View, Image, StyleSheet} from "react-native";

export const EmptyList = () => {
    return (
        <View style={styles.imageWrap}>
            <Image style={styles.image} source={require('../../assets/no-items.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    imageWrap: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        paddingTop: 50,
        height: 300
    },
    image: {
        width: '100%',
        resizeMode: "contain"
    }
});
