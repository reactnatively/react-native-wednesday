import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styles from 'app/assets/styles/nz/ux';
import SectionLoggedInCapture from './SectionLoggedInCapture';

//
export default class SectionLoggedIn extends React.Component {

  //
  render() {

    return (

      <View style={styles.wireframe}>

        <SectionLoggedInCapture />

      </View>

    );

  }

}
