import {Text, View, StyleSheet} from "react-native";
import {FONTSIZEPrimary, HEIGHT, TEXTCOLOR, WIDTH} from "./common/Variables";

export const EmptyContent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                o curva! list is emty!
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT * 0.79,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: TEXTCOLOR,
        fontSize: FONTSIZEPrimary,
    }
})