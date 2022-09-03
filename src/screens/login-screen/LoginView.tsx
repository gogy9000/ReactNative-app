import React from "react";
import {CustomButton} from "../../common/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {StyleSheet, View, TextInput, GestureResponderEvent, NativeSyntheticEvent, NativeTouchEvent} from "react-native";
import { Formik } from 'formik';
import {StyledInput} from "../../styled-components/StyledInput";
import {BACKGROUNDCOLOR, MARGIN, PADDING, WIDTH} from "../../common/Variables";
import {commonBorderStyle} from "../../common/Styles";
import {useAuthMeQuery,useLoginMutation} from "../../DAL/AuthAPI";




export const LoginView = () => {
    const {data,error,isLoading}=useAuthMeQuery("")
    const [login,{data:response}]=useLoginMutation()
    const navigate=useNavigation()
    const onSubmit =async (values:{ email: string ,password:string}) => {
      await  login(values)
    }


    return(
        <View style={[styles.loginContainer]}>
      <Formik
          initialValues={{ email: '' ,password:""}}
          onSubmit={onSubmit}
      >
          {({ handleChange, handleBlur, handleSubmit , values }) => (
              <View style={[styles.loginForm, commonBorderStyle()]}>
                  <StyledInput

                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                  />
                  <StyledInput
                      style={[styles.loginTextField]}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                  />

                  <CustomButton onPress={(handleSubmit  as unknown) as (ev: NativeSyntheticEvent<NativeTouchEvent>)=>void} title="Submit" />
              </View>
          )}
      </Formik>
        </View>
  )
}

const styles=StyleSheet.create({
    loginContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    loginForm:{
        width:(WIDTH-PADDING*2),
        paddingHorizontal:PADDING,
        paddingVertical:PADDING,
        backgroundColor:"rgba(5,5,5,0.5)",
    },
    loginTextField:{
        marginVertical:MARGIN/3,
    }
})