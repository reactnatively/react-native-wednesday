//
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class ProfileMessage extends React.Component {

  //
  render() {

    return (

      /* */
      <ScrollView>

        /* Messages */
        <View style={styles.wireframe}>

          /* */
          <View style={styles.wireframe}>
            <Text style={styles.wireframe}>[Profile Image]</Text>
          </View>

          /* */
          <View style={styles.wireframe}>
            <Text style={styles.wireframe}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            <Text style={styles.wireframe}>2h ago</Text>
          </View>

        </View>

      </ScrollView>

    );

  }

}
