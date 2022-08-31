import {FC, ReactElement, useState} from "react";
import {ImageBackground, Text, View, StyleSheet, Pressable, Modal} from "react-native";
import {commonBorderStyle} from "./common/Styles";
import {FONTSIZEPrimary, FONTSIZESecondary, HEIGHT, MARGIN, PADDING, TEXTCOLOR, WIDTH} from "./common/Variables";
import {TodoItem} from "./BLL/TodoReducer";
import {CustomButton} from "./common/CustomButton";
import uuid from "react-native-uuid";
import {TaskType} from "./BLL/TaskReducer";

type TodoContainerProps = {
    todo: TodoItem
    children?: ReactElement
    onPressHandler?: () => void
    addTaskHandler:(task:TaskType)=>void
}

export const TodoContainer: FC<TodoContainerProps> = (props) => {
    const {addTaskHandler}=props

    const [isModalVisible, setIsModalVisible]=useState(false)

    return (
        <Pressable onPress={() => {
            setIsModalVisible(!isModalVisible)
        }}>
            <View style={[stylesTodo.card, commonBorderStyle(10)]}>
                <Todo addTaskHandler={addTaskHandler} todo={props.todo}>
                    {props.children}
                </Todo>
            </View>
            <Modal

                visible={isModalVisible}
                transparent={true}
                onRequestClose={()=>{setIsModalVisible(false)}}
                animationType={"fade"}

            >
                <View style={[stylesTodo.modal, commonBorderStyle(10)]}>
                    <Todo addTaskHandler={addTaskHandler} todo={props.todo}>
                        {props.children}
                    </Todo>
                </View>
            </Modal>
        </Pressable>
    )
}
type TaskProps={
    todo:TodoItem
    children?:ReactElement
    addTaskHandler:(task:TaskType)=>void
}

export const Todo:FC<TaskProps> = (props) => {
    const {children,addTaskHandler,todo}=props
    const onAddTask = () => {
        const newTaskId=uuid.v1().toString()
        addTaskHandler({taskTitle:"azaza",taskId:newTaskId,taskStatus:"0",todoId:todo.id})
    }
    return(
        <ImageBackground
            style={stylesTodo.deckCover}
            source={todo.decKCover}
            borderRadius={10}
            resizeMode={"cover"}>
            <Text style={stylesTodo.title}>{todo.title}</Text>
            <CustomButton onPress={onAddTask}>add task</CustomButton>

            {children || null}
        </ImageBackground>
    )

}

export const stylesTodo = StyleSheet.create({
    modal:{
        width: ((WIDTH - PADDING * 2)) - 2,
        minHeight: ((HEIGHT - PADDING * 2)/1.3 ),
        marginHorizontal: MARGIN,
        alignSelf:"center",
        position:"absolute",
        top:((HEIGHT - PADDING * 2)/11 ),
    },
    card: {
        flex: 1,
        width: ((WIDTH - PADDING * 2) / 2) - 2,
        height: ((HEIGHT - PADDING * 2) / 4),
        marginVertical: MARGIN / 2,
        marginHorizontal: MARGIN / 2,
    },
    deckCover: {
        flex: 1,
        justifyContent: "flex-start",
        paddingHorizontal: PADDING / 3,
        paddingVertical: PADDING / 3
    },
    title: {
        fontSize: FONTSIZEPrimary,
        color: TEXTCOLOR,
        alignSelf: "center",
    },
    price: {
        fontSize: FONTSIZESecondary,
        color: TEXTCOLOR
    },
    grade: {
        fontSize: FONTSIZESecondary,
        color: TEXTCOLOR
    },
    created: {
        color: TEXTCOLOR
    }
})