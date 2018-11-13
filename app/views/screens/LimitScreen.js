
  import React, { Component } from 'react';

  import { View, StyleSheet, TextInput, Alert } from 'react-native';

  export default class MyProject extends Component {

    //
    static navigationOptions = {

      title: 'Limit',

    };

       ShowMaxAlert = (EnteredValue) =>{

        var TextLength = EnteredValue.length.toString() ;

        if(TextLength == 222){

          Alert.alert("Sorry, You have reached the maximum input limit.")
          // Put your code here which you want to execute when TextInput entered text reached to 10.

        }


       }

       render() {
         return (

            <View style={styles.MainContainer}>

                <TextInput

                  placeholder="Enter Your Name"

                  maxLength={222}

                  onChangeText={ EnteredValue => this.ShowMaxAlert(EnteredValue) }

                  style={styles.TextInputStyle}
                />

            </View>

         );
       }
     }

  const styles = StyleSheet.create(
  {

    MainContainer: {

      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10

    },

    TextInputStyle:{

      width: '90%',
      textAlign: 'center',
      height: 45
    }

  });
