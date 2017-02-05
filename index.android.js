/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { 
  Container,
  Content, 
  Footer,
  Button 
} from 'native-base';

import { Myheader } from './Myheader' 
import { Todo } from './Todo'
import { InputController } from './InputController'


/*Reducer*/
const reducer = (state = {todo: [], inputText: ""}, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        todo: state.todo.concat(action.payload.data)
      }
    case 'COMPLETE_TASK':
      // let tempState = {...state}
      // tempState.todo[action.payload.id].isCompleted = !state.todo[action.payload.id].isCompleted
      // return tempState
        todoNew = state.todo.slice()
        todoNew[action.payload.id].isCompleted = !todoNew[action.payload.id].isCompleted
        return {
          ...state,
          todo: todoNew.slice() 
        }
    case 'SET_TEXT':
      return {...state, inputText: action.payload.text}
    case 'CLEAR_TODO':
      return {
        ...state,
        todo: []
      }
    default:
      return state 
  }
}
/* End of Reducer */

export default class reactrealm extends Component {
  lastId = -1
  state = reducer(undefined, {})

  /*Dispatcher*/

  dispatch(action) {
    this.setState(prevState => reducer(prevState, action),
    console.log(this.state))
  }
/*End of Dispatcher*/
  
  setText(text) {
    this.dispatch({
        type: 'SET_TEXT',
        payload: {text: text}
    })
  }

 addItem() {
   console.log("Called add function")
   if(this.state.inputText === "") return
   this.lastId += 1
   this.dispatch({
     type: 'ADD_ITEM',
     payload: {
       data: {
         text: this.state.inputText,
         id: this.lastId,
         isCompleted: false
       }
     }
   })
   this.dispatch({
     type: 'SET_TEXT',
     payload: {text: ""}
   })
 } 

 completeTask(indexOfTask) {
   this.dispatch({
     type: 'COMPLETE_TASK',
     payload: {
       id: indexOfTask
     }
   })
 }

 clearTodo() {
   console.log("Clear")
   this.lastId = -1
   this.dispatch({
     type: 'CLEAR_TODO'
   })
 }


  render() {
    console.log(this.state)
    return (
      <Container>
        {Myheader}
        <Content>
          <Todo completeTask = {this.completeTask.bind(this)}
            tasksToShow = {this.state.todo} 
          />
          <Button danger
            onPress = {this.clearTodo.bind(this)}
            style = {{alignSelf: 'center', marginTop: 30}}
          >
            Clear Todo
          </Button>
        </Content>
        <Footer style = 
          {{
            backgroundColor: 'rgba(0,0,0,0)',
            paddingHorizontal: 5
          }}>
          <InputController setText = {this.setText.bind(this)}
            addItem = {this.addItem.bind(this)}
            inputValue = {this.state.inputText} 
          />
        </Footer>
      </Container>
    );
  }
}

AppRegistry.registerComponent('reactrealm', () => reactrealm);


