import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class WelcomeHello extends React.Component {

  //
  render() {

    return (

      <View style={styles.wireframe}>

        <View style={styles.wireframe}>
          <Text style={styles.wireframe}>Well, hello!</Text>
          <Text style={styles.wireframe}>We're Notearise.</Text>
        </View>

        <View style={styles.wireframe}>
          <Text style={styles.wireframe}>Prepare for it all.</Text>
        </View>

        <View style={styles.wireframe}>
          <Button title={'Sign In'} onPress={() => { }}>Sign In</Button>
          <Button title={'Sign Up'} onPress={() => { }}>Sign Up</Button>
        </View>

      </View>

    );

  }

}
