import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class SectionLoggedInCapture extends React.Component {

  //
  render() {

    return (

      //
      <View style={[styles.wireframe]}>

        //
        <View style={[styles.wireframe]}>

          <TextInput style={[styles.wireframe]} placeholder={'What\'s on your mind?'} />
          <Text style={[styles.wireframe]}>222 characters remaining</Text>

        </View>

      </View>

    );

  }

}
