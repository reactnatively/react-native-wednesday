import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class AccountSignOut extends React.Component {

  //
  render() {

    return (

      /* Account Sign Out */
      <View style={styles.wireframe}>

        /* Header */
        <View style={styles.wireframe}>
          <Text style={styles.wireframe}>Sign Out</Text>
        </View>

        /* Instructions */
        <View style={styles.wireframe}>
          <Text style={styles.wireframe}>Sign out of your account.</Text>
        </View>

        /* Button */
        <View style={styles.wireframe}>
          <Button style={[styles.wireframe]} title={'Sign Out'} onPress={() => { }} />
        </View>

      </View>

    );

  }

}
