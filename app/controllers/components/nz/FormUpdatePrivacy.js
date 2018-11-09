import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class FormUpdatePrivacy extends React.Component {

  //
  render() {

    return (

      /* Update Details form */
      <View style={styles.wireframe}>

        /* */
        <View style={styles.wireframe}>
          <Text style={[styles.wireframe]}>Your notes are currently public. This means, by default, no one can see your notes but you.</Text>
        </View>

        /* */
        <View style={styles.wireframe}>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Public" value="0" />
            <Picker.Item label="Private" value="2" />
          </Picker>
        </View>

      </View>

    );

  }

}
