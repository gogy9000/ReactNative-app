import {StyleSheet, Text, View} from "react-native";
import {WIDTH} from "./common/variables";

export const Header = () => {
    return (
        <View style={styles.container}>
            <Text>
                Header
            </Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        width:WIDTH,
        backgroundColor:"white"
    },
})