import React, { Component } from 'react';
import { View } from 'react-native';
import TaskList from './TaskList/TaskList.js';

export default class App extends Component {
    render() {
        return (
            <View>
                <TaskList />
            </View>
        );
    }
}
