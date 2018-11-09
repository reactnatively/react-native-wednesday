import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import styles from 'app/assets/styles/nz/ux';
import FormForgotPassword from 'app/components/nz/FormForgotPassword';

//
export default class WelcomeForgotPassword extends React.Component {

  //
  render() {

    return (

      <View style={styles.wireframe}>

        <FormForgotPassword />

      </View>

    );

  }

}
