import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import styles from 'app/assets/styles/nz/ux';
import FormSignIn from 'app/components/nz/FormSignIn';

//
export default class WelcomeSignIn extends React.Component {

  //
  render() {

    return (

      <View style={styles.wireframe}>

        <FormSignIn/>

      </View>

    );

  }

}
