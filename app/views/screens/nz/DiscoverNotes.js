//
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styles from 'app/assets/styles/nz/ux';
import NoteResult from 'app/components/nz/NoteResult';

//
export default class DiscoverNotes extends React.Component {

  //
  render() {

    return (

      /* */
      <ScrollView>

        /* Filter */
        <View style={styles.wireframe}>

          /* */
          <View style={styles.wireframe}>

            <Text style={styles.wireframe}>Filter by:</Text>

          </View>

          /* */
          <View style={styles.wireframe}>

            <Text style={styles.wireframe}>Your Notes</Text>
            <Text style={styles.wireframe}>Other Notes</Text>

          </View>

        </View>

        /* Notes */
        <View style={styles.wireframe}>

          /* Note */
          <NoteResult />

        </View>

      </ScrollView>

    );

  }

}
