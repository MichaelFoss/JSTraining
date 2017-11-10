import React, { Component } from 'react';
import { FlatList, View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';

export default class ListApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastAdded: null,
      items: []
    };
  }

  _handleAddItem() {
    this.setState(previousState => {
      return {
        lastAdded: this.state.newItemName,
        items: [
          ...previousState.items,
          { key: this.state.newItemName }
        ]
      };
    });
  }

  render() {
    console.log('Rendering all items: ', this.state.items);
    return (
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
        />
        <View
          style={styles.alignMiddle}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._handleAddItem()}
          >
            <Text
              style={styles.buttonText}
            >
              Add
            </Text>
          </TouchableOpacity>
        </View>
        <Text>List:</Text>
        <FlatList
          data={this.state.items}
          style={styles.list}
          renderItem={({item}) => <Text style={styles.listItem}>• {item.key}</Text>}
        />
      </View>
    );
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

