import React, { Component } from 'react';
import { Button } from 'native-base';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { TaskTabs } from './TaskTabs.js';
import { Tabs, Tab, Content, Container } from 'native-base';

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastAdded: null,
            newItemName: '',
            tasks: [
                [],
                [],
                []
            ]
        };
    }

    _handleAddItem() {
        this.setState(previousState => {
            const lastAdded = this.state.newItemName;
            return {
                lastAdded,
                tasks: [
                    ...previousState.tasks,
                    {
                        key: {
                            name: this.state.newItemName,
                            number: this.state.tasks.length
                        }
                    }
                ],
                newItemName: ''
            };
        });
    }

    render() {
        console.log('Rendering Task List. State: ', this.state);
/*
            <View
                style={styles.view}
            >
                <Text
                    style={styles.alignMiddle}
                >
                    List App (last added: {this.state.lastAdded !== null ? this.state.lastAdded : 'n/a'})
                </Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.setState({ newItemName: text })}
                    placeholder="Enter New Item"
                    value={this.state.newItemName}
                />
                <View>
                    <Button
                        style={[styles.button, styles.alignMiddle]}
                        onPress={() => this._handleAddItem()}
                    >
                        <Text
                            style={styles.buttonText}
                        >
                            Add
                        </Text>
                    </Button>
                </View>
            </View>
 */
        return (
            <Tabs initialPage={0}>
                <Tab heading="Tab 1">
                    <Content padder>
                        <Text>
                            Tab 1 contents.
                        </Text>
                    </Content>
                </Tab>
                <Tab heading="Tab 2">
                    <Content padder>
                        <Text>
                            Tab 2 contents.
                        </Text>
                    </Content>
                </Tab>
            </Tabs>
        );
        /*
                <TaskTabs
                    tasks={this.state.tasks}
                />
         */
    }
}

const styles = StyleSheet.create({
    view: {
        paddingTop: 40,
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    alignMiddle: {
        alignItems: 'center'
    },
    textInput: {
        borderWidth: 2,
        borderColor: '#000099',
        borderRadius: 3,
        marginVertical: 10,
        marginHorizontal: 20
    },
    button: {
        width: 100,
        height: 40,
        marginHorizontal: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#6666FF',
        backgroundColor: '#6666FF',
    },
    buttonText: {
        paddingVertical: 10,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    list: {
        paddingTop: 22
    },
    listItem: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
