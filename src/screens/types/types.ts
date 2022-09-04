import {NavigationProp, useNavigation} from "@react-navigation/native";

export type RootStackParamList={
    Login:undefined
    Todo:undefined
}
type useNavigationType=NavigationProp<RootStackParamList>
export const useAppNavigation=()=>useNavigation<useNavigationType>()