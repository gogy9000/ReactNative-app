import {StyleSheet, TextInput, View} from "react-native";
import {HEIGHT, PADDING, WIDTH} from "./common/variables";
import {useState} from "react";
import {CustomButton} from "./common/CustomButton";

export const Header = () => {
    const [inputValue,setInputValue]=useState("")
    const onTextInput = (value:string) => {
        setInputValue(value)
    }
    const onPressButton = () => {
        setInputValue("")
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchOrCreateInput}
                onChangeText={onTextInput}
                value={inputValue}
                placeholderTextColor={"#DDDDDD"}
                placeholder={"Search..."}
            />
        <CustomButton onPress={onPressButton} />

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:WIDTH,
        height:HEIGHT/10,
        paddingHorizontal:15,
        paddingVertical:5,
        backgroundColor:"rgba(5,5,5,0.2)",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    searchOrCreateInput:{
        height:(HEIGHT-PADDING*2)/19,
        width:(WIDTH-PADDING*2)/2,
        paddingHorizontal:10,
        borderStyle:"solid",
        borderColor:"#DDDDDD",
        borderWidth:1,
        borderRadius:3,
        fontSize:22,
        color:"white",

    }
})