//
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styles from 'app/assets/styles/nz/ux';
import NoteResult from 'app/components/nz/NoteResult';

//
export default class ProfileSummary extends React.Component {

  //
  render() {

    return (

      /* */
      <ScrollView>

        /* Profile Header */
        <View style={styles.wireframe}>

          /* Profile Image */
          <View style={styles.wireframe}>

            <Text style={styles.wireframe}>
              Profile Image
            </Text>

          </View>

          /* Profile Stats */
          <View style={styles.wireframe}>

            /*  */
            <View style={styles.wireframe}>

              /* */
              <View style={styles.wireframe}>
                <Text style={styles.wireframe}>189</Text>
                <Text style={styles.wireframe}>Notes</Text>
              </View>

              /* */
              <View style={styles.wireframe}>
                <Text style={styles.wireframe}>34</Text>
                <Text style={styles.wireframe}>Followers</Text>
              </View>

              /* */
              <View style={styles.wireframe}>
                <Text style={styles.wireframe}>12</Text>
                <Text style={styles.wireframe}>Following</Text>
              </View>

            </View>

            /*  */
            <View style={styles.wireframe}>
              <Text style={styles.wireframe}>Edit Profile</Text>
            </View>

            /*  */
            <View style={styles.wireframe}>
              <Text style={styles.wireframe}>@landaredding</Text>
            </View>

          </View>

        </View>

        /* Notifications */
        <View style={styles.wireframe}>

          /* */
          <View style={styles.wireframe}>
            <Text style={styles.wireframe}>New Notifications</Text>
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
