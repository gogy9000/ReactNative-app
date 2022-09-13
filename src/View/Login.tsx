import React, {useEffect} from "react";
import {CustomButton} from "../common/CustomButton";
import {StyleSheet, View, Text, NativeSyntheticEvent, NativeTouchEvent, ActivityIndicator} from "react-native";
import {Formik} from 'formik';
import {StyledInput} from "../styled-components/StyledInput";
import {MARGIN, PADDING, WIDTH} from "../common/Variables";
import {commonBorderStyle} from "../common/Styles";
import {Api} from "../DAL/Api";
import {useAppNavigation} from "../CustomHooks/CustomHooks";
import {AxiosError} from "axios";

export const Login = () => {
    const {data, isLoading, error, isError} = Api.useAuthMeQuery()
    const err = error as AxiosError
    const [login] = Api.useLoginMutation()
    const navigation = useAppNavigation()

    useEffect(() => {
        if (data && data.resultCode === 0) {
            navigation.navigate("TodoScreen", {screen: "TodoList"})
        }
    }, [data])

    const onSubmit = async (values: { email: string, password: string }) => {
        try {
            await login(values)
        } catch (e) {
            console.log(e)
        }
    }

    if (isLoading) {
        return (
            <View style={[styles.loginContainer]}>
                <ActivityIndicator size={"large"} color={"rgb(255,255,255)"}/>
            </View>
        )
    }

    if (isError) {
        return (
            <View style={[styles.loginContainer]}>
                <Text>{err.message}</Text>
            </View>
        )
    }

    return (
        <View style={[styles.loginContainer]}>
            <Formik
                initialValues={{email: '', password: ""}}
                onSubmit={onSubmit}
            >
                {({handleChange, handleBlur, handleSubmit, values}) => (
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

                        <CustomButton
                            onPress={(handleSubmit as unknown) as (ev: NativeSyntheticEvent<NativeTouchEvent>) => void}
                            title="Submit"/>
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loginForm: {
        width: (WIDTH - PADDING * 2),
        paddingHorizontal: PADDING,
        paddingVertical: PADDING,
        backgroundColor: "rgba(5,5,5,0.5)",
    },
    loginTextField: {
        marginVertical: MARGIN / 3,
    }
})