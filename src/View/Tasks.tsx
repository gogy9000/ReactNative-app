import {TaskType} from "../BLL/TaskReducer";
import React, {memo} from "react";
import {Task} from "./Task";
import {TodoItem} from "../BLL/TodoReducer";
import {FlatList, ListRenderItem, Text,View} from "react-native";
import {TodoListItem} from "../DAL/types/types";

type TasksProps = {
    tasks: TaskType[]
    todo:TodoListItem
    viewMod?:boolean
}
export const Tasks: React.FC<TasksProps> = memo(({tasks,todo,viewMod}) => {

    const render: ListRenderItem<TaskType> = ({item}) => {
        return (
            <>{viewMod ?
                <Text>{item.taskTitle}</Text>:
                <Task todo={todo} key={item.taskId} task={item} />
            }</>

        )
    }

    return(
    <View>
        <FlatList
            data={tasks}
            extraData={tasks}
            keyExtractor={(item)=>item.taskId}
            renderItem={render}
            listKey={todo.id}
        />
    </View>
    )
})


