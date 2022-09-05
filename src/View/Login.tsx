import React, {useEffect} from "react";
import {CustomButton} from "../common/CustomButton";
import {StyleSheet, View, NativeSyntheticEvent, NativeTouchEvent} from "react-native";
import {Formik} from 'formik';
import {StyledInput} from "../styled-components/StyledInput";
import {MARGIN, PADDING, WIDTH} from "../common/Variables";
import {commonBorderStyle} from "../common/Styles";
import {authApi} from "../DAL/AuthAPI";
import {useAppNavigation} from "../CustomHooks/CustomHooks";

export const Login = () => {
    const {data} = authApi.useAuthMeQuery()
    const [login] = authApi.useLoginMutation()
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