import {Text, View,StyleSheet} from "react-native";
import {FONTSIZEPrimary, HEIGHT, PADDING, WIDTH} from "./common/variables";

export const Footer = () => {
    return (
        <View style={styles.container}>
            <Text>
                filter
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        height:(HEIGHT-PADDING*2)/19,
        width:(WIDTH-PADDING*2)/2,
        paddingHorizontal:10,
        fontSize:FONTSIZEPrimary,
        color:"white",
    }
})