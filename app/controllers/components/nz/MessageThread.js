import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class MessageThread extends React.Component {

  //
  render() {

    return (

      /* Message Thread */
      <View style={styles.wireframe}>

        /* Profile Image */
        <View style={styles.wireframe}>

          <Text style={styles.wireframe}>[Profile Image]</Text>

        </View>

        /* Message Details */
        <View style={styles.wireframe}>

          /* */
          <View style={styles.wireframe}>

            <Text style={styles.wireframe}>@Username</Text>
            <Text style={styles.wireframe}>Username<Text style={styles.wireframe}> 3 Mutual Friends</Text></Text>

          </View>

        </View>

        /* Arrow */
        <View style={styles.wireframe}>

          <Text style={styles.wireframe}>[Arrow]</Text>

        </View>

      </View>

    );

  }

}
