import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class HeaderLoggedInMetadata extends React.Component {

  //
  render() {

    return (

      <View style={[styles.wireframe]}>

        <View style={[styles.wireframe]}>

          <View style={[styles.wireframe]}>
            <Image source={require('app/assets/images/nz/profile-image-ill_life_crisis.png')} style={[styles.wireframe]} resizeMode="contain" />
          </View>

          <View style={[styles.wireframe]}>
            <Text style={[styles.wireframe]}>Sunday Evening</Text>
            <View style={[styles.wireframe]}>
              <Image source={require('app/assets/images/nz/pin-of-gray.png')} style={[styles.wireframe]} resizeMode="contain" />
              <Text style={[styles.wireframe]}>Pless Hall</Text>
            </View>
          </View>

          <View style={[styles.wireframe]}>
            <Image source={require('app/assets/images/nz/privacy.png')} style={[styles.wireframe]} resizeMode="contain" />
          </View>

        </View>

      </View>

    );

  }

}
