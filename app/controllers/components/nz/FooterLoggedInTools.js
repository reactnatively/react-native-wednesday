import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class FooterLoggedInTools extends React.Component {

  //
  render() {

    return (

      //
      <View style={[styles.wireframe]}>

        //
        <View style={[styles.wireframe]}>

          //
          <View style={[styles.wireframe]}>
            <Text style={[styles.wireframe]}>Type</Text>
          </View>

          //
          <View style={[styles.wireframe]}>
            <Text style={[styles.wireframe]}>Draw</Text>
          </View>

          //
          <View style={[styles.wireframe]}>
            <Text style={[styles.wireframe]}>Image</Text>
          </View>

          //
          <View style={[styles.wireframe]}>
            <Text style={[styles.wireframe]}>Audio</Text>
          </View>

        </View>

        //
        <View style={[styles.wireframe]}>

          //
          <View style={[styles.wireframe]}>
            <Text style={[styles.wireframe]}>Capture</Text>
          </View>

        </View>


      </View>

    );

  }

}
