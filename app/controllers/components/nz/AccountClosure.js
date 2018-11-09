import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class AccountClosure extends React.Component {

  //
  render() {

    return (

      /* Account Closure */
      <View style={styles.wireframe}>

        /* Header */
        <View style={styles.wireframe}>
          <Text style={styles.wireframe}>Close Account</Text>
        </View>

        /* Instructions */
        <View style={styles.wireframe}>
          <Text style={styles.wireframe}>Close your account by pressing the button below.</Text>
        </View>

        /* Button */
        <View style={styles.wireframe}>
          <Button style={[styles.wireframe]} title={'Close Account'} onPress={() => { }} />
        </View>

      </View>

    );

  }

}
