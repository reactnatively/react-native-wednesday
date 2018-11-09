//
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from 'app/assets/styles/nz/ux';

//
import HeaderLoggedIn from 'app/components/nz/HeaderLoggedIn';
import FooterLoggedIn from 'app/components/nz/FooterLoggedIn';
import SectionLoggedIn from 'app/components/nz/SectionLoggedIn';
import FormCaptureText from 'app/components/nz/FormCaptureText';

//
export default class CaptureText extends React.Component {

  //
  render() {

    return (

      <View style={styles.wireframe}>
        <HeaderLoggedIn />
        <SectionLoggedIn />
        <FooterLoggedIn />
      </View>

    );

  }

}
