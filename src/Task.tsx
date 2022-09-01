import React from "react";
import {Text} from "react-native";
import {TaskType} from "./BLL/TaskReducer";

type TaskProps = {
    task: TaskType
}
export const Task: React.FC<TaskProps> = ({task}) => {
    return (
        <Text key={task.taskId}>{task.taskTitle}</Text>
    )
}