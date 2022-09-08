import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppRootStateType} from "../BLL/Store";
import {useNavigation} from "@react-navigation/native";
import {useNavigationType} from "../screens/types/types";
import {bindActionCreators} from "@reduxjs/toolkit";
import {navigateParamsSlice} from "../BLL/NavigateParamsSlice";

export const useAppDispatch: () => AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppNavigation = () => useNavigation<useNavigationType>()

const allActions = {
    ...navigateParamsSlice.actions
}
export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(allActions, dispatch)
}