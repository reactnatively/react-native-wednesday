import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import styles from 'app/assets/styles/nz/ux';
import FormEnterCode from 'app/components/nz/FormEnterCode';

//
export default class WelcomeEnterCode extends React.Component {

  //
  render() {

    return (

      <View style={styles.wireframe}>

        <FormEnterCode />

      </View>

    );

  }

}
