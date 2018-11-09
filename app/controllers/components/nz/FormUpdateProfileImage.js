import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class FormUpdateProfileImage extends React.Component {

  //
  render() {

    return (

      /* Update Profile Image */
      <View style={styles.wireframe}>

        /* Profile Image */
        <View style={styles.wireframe}>
          <Text style={styles.wireframe}>Profile Image</Text>
        </View>

        /* Profile Image */
        <View style={styles.wireframe}>
          <Text style={styles.wireframe}>[Profile Image]</Text>
          <Text style={styles.wireframe}>Upload a new profile picture</Text>
        </View>

      </View>

    );

  }

}
