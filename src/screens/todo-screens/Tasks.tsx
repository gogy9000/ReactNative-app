import {TaskType} from "../../BLL/TaskReducer";
import React, {memo, useMemo} from "react";
import {Task} from "./Task";
import {TodoItem} from "../../BLL/TodoReducer";

type TasksProps = {
    tasks: TaskType[]
    todo:TodoItem
}
export const Tasks: React.FC<TasksProps> = memo(({tasks,todo}) => {

    const mappedTask= useMemo(()=>
            tasks?.map((task) => <Task todo={todo} key={task.taskId} task={task} />)
    ,[tasks])

    return<>{mappedTask}</>

})
