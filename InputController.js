import React, { Component } from 'react'
import {
    Input,
    InputGroup,
    Icon,
    Button
} from 'native-base'

export function InputController(props) {
    return(
        <InputGroup borderType = 'regular' iconRight>
             <Button primary style = 
                {{width: 50}}
                onPress = {() => props.addItem()}
              >
                <Icon name='ios-add' />
            </Button>
            <Input placeholder = "Enter your text"
                onChangeText = {(text) => props.setText(text)}
                value = {props.inputValue}
             />
        </InputGroup>
    )
}