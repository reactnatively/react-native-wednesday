//
import React, { Component } from 'react';
import { ScrollView, Button, StyleSheet } from 'react-native';

//
import styles from 'app/views/assets/styles/ux';

//
export default class TopicsScreen extends Component {

  //
  static navigationOptions = {

    title: 'Topics',

  };

  //
  componentWillMount() {
    axios.get(
      'https://api.venny.io/v3/subscribe'
    )
      .then(
        response => this.setState({
          albums: response.data
        })
      );

    // GET request for remote image
    axios({
      method:'get',
      url:'https://api.venny.io/v3/subscribe',
      data: {
        token: 'keys_qABC40UKdvWZN0DVt',
        app: '83838383',
        first_name: 'Adolphus',
        last_name: 'Nolan',
        username: 'sonofadolphus',
        email: 'sonofadolphus@gmail.com',
        password: 'B1@thering!'
      },
      responseType:'stream'
    })
      .then(function (response) {
        response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
      });
  }

  axios({
    method: 'post',
    url: '/user/12345',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  });



  //
  componentWillMount() {

    fetch('https://api.venny.io/v3/subscribe', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: 'keys_qABC40UKdvWZN0DVt',
        first_name: 'Adolphus',
        last_name: 'Nolan',
        username: 'sonofadolphus',
        email: 'sonofadolphus@gmail.com',
        password: 'B1@thering!',
        app: '83838383',
      }),
    });

    const instance = axios.create({
  baseURL: 'https://api.venny.io/v3/subscribe',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

  }

  //
  render() {

    return (
      <ScrollView style={styles.container}>

        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <Text>Topics</Text>
      </ScrollView>
    );

  }

}
