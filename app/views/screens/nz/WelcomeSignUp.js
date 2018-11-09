import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import styles from 'app/assets/styles/nz/ux';
import FormSignUp from 'app/components/nz/FormSignUp';

//
export default class WelcomeSignUp extends React.Component {

  //
  render() {

    return (

      <View style={styles.wireframe}>

        <FormSignUp/>

      </View>

    );

  }

}
