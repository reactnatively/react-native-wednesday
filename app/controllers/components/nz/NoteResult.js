import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class NoteResult extends React.Component {

  //
  render() {

    return (

      /* Note */
      <View style={styles.wireframe}>

        /* */
        <View style={styles.wireframe}>

          /* */
          <View style={styles.wireframe}>
            <Text style={styles.wireframe}>Profile Image</Text>
          </View>

          /* */
          <View style={styles.wireframe}>
            <Text style={styles.wireframe}>PSCI 1350</Text>
            <Text style={styles.wireframe}>Pless Hall</Text>
          </View>

        </View>

        /* */
        <View style={styles.wireframe}>

          /* */
          <Text style={styles.wireframe}>Filter by:</Text>

          /* */
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text style={styles.wireframe}>September 3</Text>
            <Text style={styles.wireframe}>August 31</Text>
            <Text style={styles.wireframe}>August 24</Text>
          </ScrollView>

        </View>

      </View>

    );

  }

}
