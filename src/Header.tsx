import {StyleSheet, TextInput, View, StatusBar} from "react-native";
import {BACKGROUNDCOLOR, FONTSIZEPrimary, HEIGHT, PADDING, TEXTCOLOR, WIDTH} from "./common/Variables";
import {FC, memo, useState} from "react";
import {CustomButton} from "./common/CustomButton";
import {commonStyles} from "./common/Styles";
import {StyledInput} from "./styled-components/StyledInput";
import React from "react";


type HeaderProps={
    createTodoHandler:(newTodoTitle:string)=>void
}
export const Header:FC<HeaderProps> = memo( ({createTodoHandler}) => {
    const [inputValue,setInputValue]=useState("")
    const onTextInput = (value:string) => {
        setInputValue(value)
    }
    const onPressButton = () => {
        createTodoHandler(inputValue)
        setInputValue("")
    }
    return (
        <View style={styles.container}>
            <StyledInput
                style={[commonStyles.modalInputStyle]}
                onChangeText={onTextInput}
                value={inputValue}
                placeholderTextColor={TEXTCOLOR}
                placeholder={"Search..."}
                caretHidden
            />
            <CustomButton styleButton={styles.button} onPress={onPressButton}>
                Create todo
            </CustomButton>
        </View>
    )
})

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
    modalInputStyle:{
        height:(HEIGHT-PADDING*2)/19,
        width:(WIDTH-PADDING*2)/2,
    }
})