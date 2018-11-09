import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import API from 'app/components/nz/api';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: [],
    name: ''
  }

  handleChange = name => {
    this.setState({ name });
    console.log(this.state.name);
  }

  handleSubmit = async event => {

    const user = {
      name: this.state.name
    };

      // Promise is resolved and value is inside of the response const.
    const response = await API.post(`users`);

    console.log("this submitted " + this.state.name);

    API.post(`users`, { user })

      .then(res => {
        //console.log(res);
        console.log(res.data);
        this.state.name = '';
      })

  }

  //
  componentDidMount() {

    API.get(`users`, {
      params: {
        ID: 12345,
        march: "flowers",
      }
    })
      .then(res => {
        const persons = res.data;
        const personsRequest = res.request;
        const personsStatus = res.status;
        console.log(persons);
        console.log(personsRequest);
        console.log(personsStatus);
        this.setState({ persons });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  //
  render() {
    return (
      <View>
        { this.state.persons.map(person => <Text>{person.name}</Text>)}
        <Text>{this.state.name}</Text>
        <View>
              <Text>Person ID: </Text>
              <TextInput
                onChangeText={this.handleChange}
                placeholder="User..."
                underlineColorAndroid="transparent"
                multiline={true}
                value={this.state.name}
                style={{borderWidth:1}}
                ref={input => {
                  this.textInput = input;
                }}
              />
              <Button title="Add" onPress={ () => {this.handleSubmit()} }>Add</Button>
        </View>

      </View>
    )
  }
}
