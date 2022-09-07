import {StyleSheet, TextInput, View, StatusBar} from "react-native";
import {BACKGROUNDCOLOR, FONTSIZEPrimary, HEIGHT, PADDING, TEXTCOLOR, WIDTH} from "../common/Variables";
import {FC, memo, useEffect, useState} from "react";
import {CustomButton} from "../common/CustomButton";
import {commonStyles} from "../common/Styles";
import {StyledInput} from "../styled-components/StyledInput";
import React from "react";
import {Api} from "../DAL/Api";
import {useAppNavigation} from "../CustomHooks/CustomHooks";


type HeaderProps={
    createTodoHandler:(newTodoTitle:string)=>void
}
export const Header:FC<HeaderProps> = memo( ({createTodoHandler}) => {
    const [inputValue,setInputValue]=useState("")
    const navigation=useAppNavigation()

    const[logout]=Api.useLogoutMutation()
    const {data}=Api.useAuthMeQuery()

    const onTextInput = (value:string) => {
        setInputValue(value)
    }
    const onCreateTodo = () => {
        createTodoHandler(inputValue)
        setInputValue("")
    }
    const onLogout = async () => {
       try {
           await logout()
       } catch (e)  {
           console.log(e)
       }
    }
    useEffect(()=>{
        if(data&&data.resultCode===1){
            navigation.navigate("Login")
        }
    },[data])

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
            <CustomButton styleButton={styles.button} onPress={onCreateTodo}>
                Create todo
            </CustomButton>
            <CustomButton onPress={onLogout}>logout</CustomButton>
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
        // height: (HEIGHT - PADDING * 2) / 19,
        //  width: (WIDTH - PADDING * 2) / 2,
    },
    modalInputStyle:{
        // height:(HEIGHT-PADDING*2)/19,
        // width:(WIDTH-PADDING*2)/2,
    }
})