//
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
export default class PrepareTopic extends React.Component {

  //
  render() {

    return (

      /* */
      <View style={styles.wireframe}>

        /* Note */
        <View style={styles.wireframe}>
          <Text style={styles.wireframe}>We need to see comps for gift center, mobile and express renew.</Text>
        </View>

        /* Metadata */
        <View style={styles.wireframe}>

          /* */
          <View style={styles.wireframe}>
            <Text style={styles.wireframe}>February 21, 2018 10:10 AM</Text>
          </View>

          /* */
          <View style={styles.wireframe}>
            <Text style={styles.wireframe}>1 of 37</Text>
          </View>

        </View>

        /* */
        <View style={styles.wireframe}>

          /* */
          <View style={styles.wireframe}>
            <Text style={styles.wireframe}>Helpful?</Text>
          </View>

          /* */
          <View style={styles.wireframe}>
            <Text style={styles.wireframe}>Comment</Text>
          </View>

          /* */
          <View style={styles.wireframe}>
            <Text style={styles.wireframe}>Share</Text>
          </View>

          /* */
          <View style={styles.wireframe}>

            /* */
            <View style={styles.wireframe}>
              <Text style={styles.wireframe}>Image</Text>
            </View>

            /* */
            <View style={styles.wireframe}>
              <TextInput style={[styles.wireframe]} placeholder={'What say you?'} />
            </View>

            /* */
            <View style={styles.wireframe}>
              <Button style={[styles.wireframe]} title={'Comment'} onPress={() => { }} />
            </View>

          </View>

        </View>

      </View>

    );
  }
}
