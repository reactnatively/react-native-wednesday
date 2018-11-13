import React, { Component } from 'react';

import { StyleSheet, View, Alert, ListView, Text, TouchableOpacity, Image } from 'react-native';

export default class Mynewproject extends Component {

  //
  static navigationOptions = {

    title: 'Floating',

  };

constructor(props) {

   super(props);

   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

   this.state = {

     dataSource: ds.cloneWithRows([
          'One',
           'Two',
           'Three',
           'Four',
           'Five',
           'Six',
           'Seven',
           'Eight',
           'Nine',
           'Ten',
           'Eleven',
           'Twelve',
           'Thirteen',
           'fourteen',
           'Fifteen'
       ]),

   };


 }

ListViewItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "100%",
         backgroundColor: "#000",
       }}
     />
   );
 }

 GetListViewItem (rowData) {

 Alert.alert(rowData);

 }

 SampleFunction=()=>{

  // Write your own code here, Which you want to execute on Floating Button Click Event.
  Alert.alert("Floating Button Clicked");

}

render() {

return (

<View style={styles.MainContainer}>

        <ListView

           dataSource={this.state.dataSource}

           renderSeparator= {this.ListViewItemSeparator}

           renderRow={
                       (rowData) => <Text style={styles.rowViewContainer} onPress={this.GetListViewItem.bind(this, rowData)}>{rowData}</Text>
                     }
        />

        <TouchableOpacity activeOpacity={0.5} onPress={this.SampleFunction} style={styles.TouchableOpacityStyle} >

          <Image source={{uri : 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png'}}

          style={styles.FloatingButtonStyle} />

        </TouchableOpacity>

</View>

   );
 }
}

const styles = StyleSheet.create({

 MainContainer :{

   justifyContent: 'center',
   flex:1,
   margin: 10
 },

 rowViewContainer:
 {

   fontSize: 18,
   paddingRight: 10,
   paddingTop: 10,
   paddingBottom: 10,

 },

 TouchableOpacityStyle:{

     position: 'absolute',
     width: 50,
     height: 50,
     alignItems: 'center',
     justifyContent: 'center',
     right: 30,
     bottom: 30,
   },

   FloatingButtonStyle: {

     resizeMode: 'contain',
     width: 50,
     height: 50,
   }
});
