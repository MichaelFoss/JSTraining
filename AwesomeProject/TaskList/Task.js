import React, { Component } from 'react';
import { Content, Card } from 'native-base';
import { Text } from 'react-native';

export class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name ? props.name : 'n/a',
            number: props.number ? props.number : '?'
        }
    }

    render() {
        return (
            <Content padder>
                <Card>
                    <CardItem>
                        <Body>
                        <Text>
                            #{this.state.number}: {this.state.name}
                        </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}
