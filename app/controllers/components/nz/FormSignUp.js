import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class FormSignUp extends React.Component {

  //
  render() {

    return (

      <View style={styles.wireframe}>

        <View style={styles.wireframe}>
          <Text style={[styles.wireframe]}>Sign Up instructions...</Text>
        </View>

        <View style={styles.wireframe}>
          <TextInput style={[styles.wireframe]} placeholder={'First Name'} />
          <TextInput style={[styles.wireframe]} placeholder={'Email'} />
          <TextInput style={[styles.wireframe]} placeholder={'Username'} />
          <TextInput style={[styles.wireframe]} placeholder={'Password'} />
        </View>

        <View style={styles.wireframe}>
          <Button style={[styles.wireframe]} title={'Sign Up'} onPress={() => { }} />
        </View>

        <View style={styles.wireframe}>
          <Text style={[styles.wireframe]}><Button title={'Sign In'} onPress={() => {}}>Already have a log-in?</Button> By signing up & registering, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</Text>
        </View>

      </View>

    );

  }

}
