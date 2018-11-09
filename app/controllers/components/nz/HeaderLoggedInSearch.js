import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class HeaderLoggedInSearch extends React.Component {

  //
  render() {

    return (

      //
      <View style={[styles.wireframe]}>

        //
        <View style={[styles.wireframe]}>

          //
          <View style={[styles.wireframe]}>
            <Text style={[styles.wireframe]}>Image</Text>
          </View>

          //
          <View style={[styles.wireframe]}>
            <TextInput style={[styles.wireframe]} placeholder={'Search'} />
          </View>

          //
          <View style={[styles.wireframe]}>
            <Button style={[styles.wireframe]} title={'New Note'} />
          </View>

        </View>

      </View>

    );

  }

}
