import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class FormUpdateDetails extends React.Component {

  //
  render() {

    return (

      /* Update Details form */
      <View style={styles.wireframe}>

        /* */
        <View style={styles.wireframe}>
          <Text style={[styles.wireframe]}>Sign Up instructions...</Text>
        </View>

        /* */
        <View style={styles.wireframe}>
          <TextInput style={[styles.wireframe]} placeholder={'First Name'} />
          <TextInput style={[styles.wireframe]} placeholder={'Last Name'} />
          <TextInput style={[styles.wireframe]} placeholder={'Email'} />
        </View>

        /* */
        <View style={styles.wireframe}>
          <Button style={[styles.wireframe]} title={'Update Details'} onPress={() => { }} />
        </View>

      </View>

    );

  }

}
