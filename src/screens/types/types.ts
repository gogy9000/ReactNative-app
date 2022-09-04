import {NavigationProp, NavigatorScreenParams, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList={
    LoginView:undefined
    TodoScreen:NavigatorScreenParams<TodoStackParamList>
}
export type TodoStackParamList={
    TodoView:undefined
    Todo:{todoId:string}|undefined
}


export type ParamPropsTypes=NativeStackScreenProps<RootStackParamList>
type useNavigationType=NavigationProp<RootStackParamList>
export const useAppNavigation=()=>useNavigation<useNavigationType>()