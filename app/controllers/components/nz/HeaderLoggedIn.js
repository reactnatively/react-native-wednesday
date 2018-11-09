import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styles from 'app/assets/styles/nz/ux';
import HeaderLoggedInMetadata from './HeaderLoggedInMetadata';
import HeaderLoggedInSearch from './HeaderLoggedInSearch';

//
export default class HeaderLoggedIn extends React.Component {

  //
  render() {

    return (

      <View style={styles.wireframe}>

        <HeaderLoggedInMetadata />

      </View>

    );

  }

}
