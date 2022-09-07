import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppRootStateType} from "../BLL/Store";
import {useNavigation} from "@react-navigation/native";
import {useNavigationType} from "../screens/types/types";

export const useAppDispatch: () => AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppNavigation = () => useNavigation<useNavigationType>()