import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class FormUpdatePassword extends React.Component {

  //
  render() {

    return (

      /* Update Details form */
      <View style={styles.wireframe}>

        /* */
        <View style={styles.wireframe}>
          <Text style={[styles.wireframe]}>Update password instructions...</Text>
        </View>

        /* */
        <View style={styles.wireframe}>
          <TextInput style={[styles.wireframe]} placeholder={'Old Password'} />
          <TextInput style={[styles.wireframe]} placeholder={'New Password'} />
          <TextInput style={[styles.wireframe]} placeholder={'Confirm New Password'} />
        </View>

        /* */
        <View style={styles.wireframe}>
          <Button style={[styles.wireframe]} title={'Update Password'} onPress={() => { }} />
        </View>

      </View>

    );

  }

}
