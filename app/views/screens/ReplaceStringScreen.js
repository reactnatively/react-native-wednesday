import React, { Component } from 'react';

import { StyleSheet, View, Text, Button } from 'react-native'

export default class Mynewproject extends Component {

  //
  static navigationOptions = {

    title: 'Replace String',

  };

  constructor(){

    super();

    this.state = {

      TextHolder : "I am a React Native Developer."

    }
  }

  ReplaceTextFunction=()=>{

  var SampleText = this.state.TextHolder.toString();

  var NewText = SampleText.replace("Developer", "<Text>App Builder</Text>");

  this.setState({ TextHolder : NewText});

  }
render() {

  return (

    <View style={styles.MainContainer}>

      <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 20}}> { this.state.TextHolder } </Text>

      <Button title="Replace Developer to App Builder in Above Text" onPress={ this.ReplaceTextFunction } />

    </View>

   );
 }
}

const styles = StyleSheet.create({

 MainContainer :{

   justifyContent: 'center',
   flex:1,
   margin: 10
 }

});
