import {CompositeScreenProps, NavigationProp, NavigatorScreenParams} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {TodoItem} from "../../BLL/TodoReducer";
import {TaskType} from "../../BLL/TaskReducer";

export type RootScreenStackParamList ={
    Login:undefined
    TodoScreen:NavigatorScreenParams<TodoScreenStackParamList>
}
export type TodoScreenStackParamList ={
    TodoList:undefined
    TaskScreen:NavigatorScreenParams<TasksScreenStackParamList>
}
export type TasksScreenStackParamList ={
    TaskList:{todo:TodoItem}
    Task:{todo:TodoItem,task:TaskType}
}
export type EntityTaskPropsType=CompositeScreenProps<
    NativeStackScreenProps<TasksScreenStackParamList,"Task">,
    TodoPropsTypes
    >

export type TasksPropsType=CompositeScreenProps<
    NativeStackScreenProps<TasksScreenStackParamList,"TaskList">,
    TodoPropsTypes
    >

export type TodoPropsTypes =CompositeScreenProps<
    NativeStackScreenProps<TodoScreenStackParamList,"TaskScreen">,
    NativeStackScreenProps<RootScreenStackParamList>
    >

export type useNavigationType=NavigationProp<RootScreenStackParamList>
