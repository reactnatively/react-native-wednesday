//
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import styles from 'app/assets/styles/nz/ux';
import MessageThread from 'app/components/nz/MessageThread';

//
export default class ProfileMessages extends React.Component {

  //
  render() {

    return (

      /* */
      <ScrollView>

        /* Navigation */
        <View style={styles.wireframe}>

          /* Navigation */
          <View style={styles.wireframe}>
            <Text style={styles.wireframe}>Messages</Text>
          </View>

          /* Navigation */
          <View style={styles.wireframe}>
            <Text style={styles.wireframe}>New Direct Message</Text>
          </View>

        </View>

        /* Search Bar */
        <View style={styles.wireframe}>
          <TextInput style={[styles.wireframe]} placeholder={'Search users by name or handle...'} />
        </View>

        /* Message Threads */
        <View style={styles.wireframe}>

          /* */
          <MessageThread />

        </View>

      </ScrollView>

    );

  }

}
