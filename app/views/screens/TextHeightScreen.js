

    import React, { Component } from 'react';

    import { StyleSheet, View, Button, Text} from 'react-native';

    export default class Mynewproject extends Component {

      //
      static navigationOptions = {

        title: 'Text Height',

      };

      constructor() {

        super();

        this.state={

          Text_Height : 100,

          Text_Width : 100

        }
      }

      Change_Height_Width=()=>{

        this.setState({

          Text_Height : 120,
          Text_Width : 200

        })

      }

     render() {

       return (

          <View style={styles.MainContainer}>


            <Text style={ [ styles.TextStyle, { height: this.state.Text_Height, width: this.state.Text_Width } ] }>

              Hello React Native Developers.
              Hello React Native Developers.
              Hello React Native Developers.
              Hello React Native Developers.

            </Text>

            <Button title='Change Text Component Height Width Dynamically on Button Click' onPress={this.Change_Height_Width} />


          </View>


       );
     }
    }

    const styles = StyleSheet.create({

    MainContainer :{

        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,

    },

    TextStyle:{

        textAlign:'center',
        color: '#4CAF50',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#009688'

    }

    });
