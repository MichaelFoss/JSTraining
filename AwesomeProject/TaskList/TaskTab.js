import React, { Component } from 'react';
import { Tab } from 'native-base';
import { Task } from './Task.js'

export class TaskTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: props.tasks
        }
    }

    render() {
        let renderedTasks = this.state.tasks.map(tasks => (
            <Task
                name={tasks.name}
                number={tasks.number}
            />
        ));
        return (
            <Tab heading={this.props.heading}>
                {renderedTasks}
            </Tab>
        );
    }
}
