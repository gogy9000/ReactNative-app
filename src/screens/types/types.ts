import {CompositeScreenProps, NavigationProp, NavigatorScreenParams, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {TodoItem} from "../../BLL/TodoReducer";
import {TaskType} from "../../BLL/TaskReducer";

export type RootStackParamList={
    LoginView:undefined
    TodoScreen:NavigatorScreenParams<TodoStackParamList>
}
export type TodoStackParamList={
    TodoView:undefined
    Todo:NavigatorScreenParams<TasksStackParamList>
}
export type TasksStackParamList={
    TaskList:{todo:TodoItem}
    Task:{todo:TodoItem,task:TaskType}
}
export type EntityTaskPropsType=CompositeScreenProps<
    NativeStackScreenProps<TasksStackParamList,"Task">,
    TodoPropsTypes
    >

export type TasksPropsType=CompositeScreenProps<
    NativeStackScreenProps<TasksStackParamList,"TaskList">,
    TodoPropsTypes
    >

export type TodoPropsTypes =CompositeScreenProps<
    NativeStackScreenProps<TodoStackParamList,"Todo">,
    NativeStackScreenProps<RootStackParamList>
    >

type useNavigationType=NavigationProp<RootStackParamList>
export const useAppNavigation=()=>useNavigation<useNavigationType>()