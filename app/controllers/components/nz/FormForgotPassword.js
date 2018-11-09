import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class FormForgetPassword extends React.Component {

  //
  render() {

    //
    return (

      <View style={styles.wireframe}>

        <View style={styles.wireframe}>
          <Text style={[styles.wireframe]}>Forgot Password instructions...</Text>
        </View>

        <View style={styles.wireframe}>
          <TextInput style={[styles.wireframe]} placeholder={'Username or Email'} />
        </View>

        <View style={styles.wireframe}>
          <Button style={[styles.wireframe]} title={'Cancel'} onPress={() => { }} />
          <Button style={[styles.wireframe]} title={'Reset Password'} onPress={() => { }} />
        </View>

        <View style={styles.wireframe}>
          <Text style={[styles.wireframe]}>🤔 Hmmm? <Button title={'Sign In'} onPress={() => {}}>Did you remember your password all of a sudden?</Button></Text>
        </View>

      </View>

    );

  }

}
