import React from 'react'
import {
    List,
    ListItem,
    CheckBox
} from 'native-base'

import {Text, StyleSheet} from 'react-native'

export function Todo(props) {
    console.log(props.tasksToShow)
    return(
        <List dataArray = {props.tasksToShow}
            renderRow = {
                (eachTask, i) => 
                    <ListItem>
                        <CheckBox checked = 
                            {eachTask.isCompleted}
                            onPress = {
                                () => props.completeTask(eachTask.id)
                            }
                        />
                        <Text style = {eachTask.isCompleted && completedStyle}>{eachTask.text}</Text>
                    </ListItem>
            }>            
        </List>
    )
}

const completedStyle = {
    textDecorationLine: 'line-through'
}