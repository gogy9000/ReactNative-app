import {StyleSheet, TextInput, View, StatusBar} from "react-native";
import {BACKGROUNDCOLOR, FONTSIZEPrimary, HEIGHT, PADDING, TEXTCOLOR, WIDTH} from "./common/Variables";
import {useState} from "react";
import {CustomButton} from "./common/CustomButton";
import {commonBorderStyle} from "./common/Styles";

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
                style={[styles.searchOrCreateInput, commonBorderStyle()]}
                onChangeText={onTextInput}
                value={inputValue}
                placeholderTextColor={TEXTCOLOR}
                placeholder={"Search..."}
                caretHidden
            />
        <CustomButton styleButton={styles.button} onPress={onPressButton} />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        paddingTop: StatusBar.currentHeight || 0,
        width:WIDTH,
        height:HEIGHT/9,
        paddingHorizontal:15,
        paddingVertical:5,
        backgroundColor:BACKGROUNDCOLOR,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    button:{
        height: (HEIGHT - PADDING * 2) / 19,
         width: (WIDTH - PADDING * 2) / 2,
    },
    searchOrCreateInput:{
        height:(HEIGHT-PADDING*2)/19,
        width:(WIDTH-PADDING*2)/2,
        paddingHorizontal:10,
        fontSize:FONTSIZEPrimary,
        color:TEXTCOLOR,
    }
})