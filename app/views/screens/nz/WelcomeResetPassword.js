import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import styles from 'app/assets/styles/nz/ux';
import FormResetPassword from 'app/components/nz/FormResetPassword';

//
export default class WelcomeResetPassword extends React.Component {

  //
  render() {

    return (

      <View style={styles.wireframe}>

        <FormResetPassword />

      </View>

    );

  }

}
