import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class FormCaptureText extends React.Component {

  //
  render() {

    //
    return (

      <View style={styles.wireframe}>

        <View style={styles.wireframe}>
          <TextInput style={[styles.wireframe]} placeholder={'What\'s on your mind?'} />
        </View>

        <View style={styles.wireframe}>

          <View style={styles.wireframe}>
            <TextInput style={[styles.wireframe]} placeholder={'Latitude'} />
            <TextInput style={[styles.wireframe]} placeholder={'Longitude'} />
            <TextInput style={[styles.wireframe]} placeholder={'Altitude'} />
          </View>

          <View style={styles.wireframe}>
            <TextInput style={[styles.wireframe]} placeholder={'Privacy'} />
          </View>

        </View>

        <View style={styles.wireframe}>
          <Button style={[styles.wireframe]} title={'Submit'} />
        </View>

        <View style={styles.wireframe}>
          <Text style={[styles.wireframe]}>222 characters remaining</Text>
        </View>

      </View>

    );

  }

}
