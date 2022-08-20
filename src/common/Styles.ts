import {StyleProp, StyleSheet, TextStyle} from "react-native";



export const commonBorderStyle=(borderRadius:number=10):StyleProp<TextStyle>=>({
    borderStyle: "solid",
    borderColor: "#DDDDDD",
    borderRadius: borderRadius,
    borderWidth: 1
})