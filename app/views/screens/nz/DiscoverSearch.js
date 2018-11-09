//
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class DiscoverSearch extends React.Component {

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

        /* Search Results */
        <View style={styles.wireframe}>

          /* Notes: */
          <View style={styles.wireframe}>

            /* Header */
            <View style={styles.wireframe}>
              <Text style={styles.wireframe}>Notes:</Text>
            </View>

            /* Results */
            <View style={styles.wireframe}>

              /* */
              <View style={styles.wireframe}>
                <Text style={styles.wireframe}>Profile Image</Text>
              </View>

              /* */
              <View style={styles.wireframe}>

                /* */
                <View style={styles.wireframe}>
                  <Text style={styles.wireframe}>8/16/18 15:44</Text>
                </View>

                /* */
                <View style={styles.wireframe}>
                  <Text style={styles.wireframe}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                </View>

                /* */
                <View style={styles.wireframe}>
                  <Text style={styles.wireframe}>PSCI 1350</Text>
                  <Text style={styles.wireframe}>Pless Hall</Text>
                </View>

              </View>
            </View>

          </View>

        </View>

      </ScrollView>

    );

  }

}
