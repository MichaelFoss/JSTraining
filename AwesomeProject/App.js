import React, { Component } from 'react';
import { View } from 'react-native';
import ToDoList from './ToDoList';

export default class App extends Component {
    render() {
        return (
            <View>
                <ToDoList />
            </View>
        );
    }
}
