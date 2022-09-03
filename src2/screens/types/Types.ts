import {CompositeScreenProps, NavigationProp, NavigatorScreenParams, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import type { StackScreenProps } from '@react-navigation/stack'
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
    noHome:NavigatorScreenParams<NoHome0>
    Home:{asd:string}|undefined
}
export type NoHome0={
    noHome1:undefined
    noHome2:undefined
}

export type MainDetailsPropsType = CompositeScreenProps<
    BottomTabScreenProps<RootStackParamList, 'Home'>,
    StackScreenProps<NoHome0>
    >

 type UseNavigationType = NavigationProp<MainDetailsPropsType>
export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const useAppNavigation = () => useNavigation<UseNavigationType>()