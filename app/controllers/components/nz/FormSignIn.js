import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class FormSignIn extends React.Component {

  //
  render() {

    //
    return (

      <View style={styles.wireframe}>

        <View style={styles.wireframe}>
          <Text style={[styles.wireframe]}>Sign In instructions...</Text>
        </View>

        <View style={styles.wireframe}>
          <TextInput style={[styles.wireframe]} placeholder={'Username or Password'} />
          <TextInput style={[styles.wireframe]} placeholder={'Password'} />
          <Text style={[styles.wireframe]}>Remember Me</Text>
        </View>

        <View style={styles.wireframe}>
          <Button style={[styles.wireframe]} title={'Sign In'} onPress={() => { }} />
        </View>

        <View style={styles.wireframe}>
          <Text style={[styles.wireframe]}>Forgot password? <Button title={'Sign Up'} onPress={() => { }}>Sign up for Notearise.</Button></Text>
        </View>

      </View>

    );

  }

}
