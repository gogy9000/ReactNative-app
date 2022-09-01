import {TaskType} from "./BLL/TaskReducer";
import React from "react";
import {Task} from "./Task";

type TasksProps = {
    tasks: TaskType[]
}
export const Tasks: React.FC<TasksProps> = ({tasks}) => {
    return (
        <>
            {tasks?.map((task) => <Task key={task.taskId} task={task} />)}
        </>
    )
}
