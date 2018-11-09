import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styles from 'app/assets/styles/nz/ux';
import FooterLoggedInTools from './FooterLoggedInTools';

//
export default class FooterLoggedIn extends React.Component {

  //
  render() {

    return (

      <View style={styles.wireframe}>

        <FooterLoggedInTools />

      </View>

    );

  }

}
