import React, { Component } from 'react';
import { Header, Tabs } from 'native-base';
import { TaskTab } from './TaskTab.js';

export class TaskTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: props.tasks
        }
    }

    render() {
        console.log('Rendering Task Tabs. State: ', this.state);
        return (
            <Tabs>
                <Container>
                    <Header hasTabs />
                    <Tabs initialPage={0}>
                        <TaskTab
                            heading="To Do"
                            tasks={this.state.tasks[0]}
                        />
                        <TaskTab
                            heading="Doing"
                            tasks={this.state.tasks[1]}
                        />
                        <TaskTab
                            heading="Done"
                            tasks={this.state.tasks[2]}
                        />
                    </Tabs>
                </Container>
            </Tabs>
        );
    }
}
