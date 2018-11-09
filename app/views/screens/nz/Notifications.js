//
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class Notifications extends React.Component {

  //
  render() {

    return (

      /* */
      <ScrollView>

        /* All */
        <View style={styles.wireframe}>

          /*
          Notification */
          <View style={styles.wireframe}>

            <View style={styles.wireframe}>

              <Text style={styles.wireframe}>Profile Image</Text>

            </View>

            <View style={styles.wireframe}>

              <Text style={styles.wireframe}>Landa commented on your post this afternoon. <Text style={styles.wireframe}>1h ago</Text></Text>

            </View>

          </View>

        </View>

      </ScrollView>

    );

  }

}
