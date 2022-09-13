import React, {memo} from "react";
import {Task} from "./Task";
import {FlatList, ListRenderItem,View} from "react-native";
import {TaskItem, TodoListItem} from "../DAL/types/types";

type TasksProps = {
    tasks?: TaskItem[]
    todo: TodoListItem
}
export const Tasks: React.FC<TasksProps> = memo(({tasks, todo}) => {

    const render: ListRenderItem<TaskItem> = ({item}) => {
        return (
                <Task todo={todo} key={item.id} task={item}/>
        )
    }

    return (
        <View>
            <FlatList
                data={tasks}
                extraData={tasks}
                keyExtractor={(item) => item.id}
                renderItem={render}
                listKey={todo.id}
            />
        </View>
    )
})


