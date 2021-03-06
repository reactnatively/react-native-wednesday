import React, { Component } from 'react';

import { StyleSheet, View, TextInput, Text, ActivityIndicator, TouchableOpacity } from 'react-native';

export default class Project extends Component {

  //
  static navigationOptions = {

    title: 'Create',

  };

  //
  constructor() {

    super();

    this.state = {

      ActivityIndicator_Loading: false,

      token: 'keys_qABC40UKdvWZN0DVt',
      app: '83838383',
      author: 'profiler3jM5dM2I',
      host: 'profiler3jM5dM2I',
      text: '',
      latitude: '',
      longitude: '',
      altitude: '',
      stage: '',
      topic: '',
      place: '',
      access: 2,

    }

  }

  //
  componentDidMount() {

    //
    console.log(this.state);

  }

  //
  Insert_Data_Into_MySQL = () => {

    this.setState({ ActivityIndicator_Loading : true }, () => {

      var api = 'http://localhost/www.venny.io/v3/posts' +
      '?' + 'token' + '=' + this.state.token +
      '&' + 'app' + '=' + this.state.app +
      '&' + 'author' + '=' + this.state.author +
      '&' + 'host' + '=' + this.state.host +
      '&' + 'text' + '=' + this.state.text +
      '&' + 'latitude' + '=' + this.state.latitude +
      '&' + 'longitude' + '=' + this.state.longitude +
      '&' + 'altitude' + '=' + this.state.altitude +
      '&' + 'stage' + '=' + this.state.stage +
      '&' + 'topic' + '=' + this.state.topic +
      '&' + 'place' + '=' + this.state.place +
      '&' + 'access' + '=' + this.state.access;

      console.log(api);

      fetch(api,{method:'POST'})

        .then((response) => response.json())
        .then((responseJsonFromServer) => {

          console.log(api);
          console.log(responseJsonFromServer);
              alert(responseJsonFromServer);

              this.setState({ ActivityIndicator_Loading : false });

        })
        .catch((error) => {
            console.error(error);

            this.setState({ ActivityIndicator_Loading : false});
        });

    });

  }

  //
  render() {

    return(

      <View style = { styles.MainContainer }>

        <TextInput
          placeholder = "What's on your mind?"
          style = { styles.TextInputStyleClass }
          underlineColorAndroid = "transparent"
          onChangeText = {(TextInputText) => this.setState({ text: TextInputText })} />

        <TextInput
          placeholder = "Latitude"
          style = { styles.TextInputStyleClass }
          underlineColorAndroid = "transparent"
          onChangeText = {(TextInputText) => this.setState({ latitude: TextInputText })} />

        <TextInput
          placeholder = "Longitude"
          style = { styles.TextInputStyleClass }
          underlineColorAndroid = "transparent"
          onChangeText = {(TextInputText) => this.setState({ longitude: TextInputText })} />

        <TouchableOpacity
          activeOpacity = { 0.5 }
          style = { styles.TouchableOpacityStyle }
          onPress = { this.Insert_Data_Into_MySQL }>

          <Text style = { styles.TextStyle }>Insert Data Into MySQL Database</Text>

        </TouchableOpacity>

        {

          this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null

        }

      </View>

    );

  }

}

//
const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },

  TextInputStyleClass: {

    textAlign: 'center',
    height: 40,
    backgroundColor : "#fff",
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 7 ,
    marginBottom: 10,
    width: '95%'
  },

  TouchableOpacityStyle: {
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#009688',
    marginBottom: 20,
    width: '90%'
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18
  },

  ActivityIndicatorStyle:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }

});
