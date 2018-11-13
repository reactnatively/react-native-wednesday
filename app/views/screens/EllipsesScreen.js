import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

//
export default class App extends Component<{}> {

  //
  static navigationOptions = {

    title: 'Ellipses',

  };

    render()
    {
        return(

            <View style = { styles.MainContainer }>

                <Text style={styles.TextStyle} numberOfLines = { 1 }  >

                    This is the Sample Ellipsis Text for Ellipsis from End.

                </Text>

                <Text style={styles.TextStyle} numberOfLines = { 1 } ellipsizeMode = 'head'>

                    This is the Sample Ellipsis Text for Ellipsis from Start.

                </Text>

                <Text style={styles.TextStyle} numberOfLines = { 1 } ellipsizeMode = 'middle'>

                    This is the Sample Ellipsis Text for Ellipsis from Middle.

                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        MainContainer:
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',

        },

        TextStyle:
        {
           textAlign: 'center',
           fontSize: 20,
           padding: 10,
           color: '#000'

        }

    });
