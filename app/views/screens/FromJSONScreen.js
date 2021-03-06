//
import React, { Component } from 'react';
import {
  ScrollView,
  Button,
  StyleSheet,
  ActivityIndicator,
  ListView,
  Text,
  View,
  Alert
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

//
//import styles from 'app/views/assets/styles/ux';

//
export default class LinksScreen extends Component {

  //
  static navigationOptions = {

    title: 'From JSON',

  };

  //
  constructor(props) {

    super(props);

    this.state = {

      isLoading: true,

    }

  }

  //
  componentDidMount() {

    return fetch('http://localhost/www.venny.io/flowers.json?param=1',{
      method: 'GET',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // In this block you can do something with new state.
      });
    })
    .catch((error) => {
      console.error(error);
    });

  }

  //
  GetItem(flower_name) {

    console.log("Yooooooooooo!");
    Alert.alert(flower_name);

  }

  //
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }

  //
  render() {

    //
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (

      <View style={styles.MainContainer}>

        <ListView

          dataSource={this.state.dataSource}

          renderSeparator= {this.ListViewItemSeparator}

          enableEmptySections = {true}

          renderRow={(rowData) => <Text style={styles.rowViewContainer}
          onPress={this.GetItem.bind(this, rowData.details)} >{rowData.flower_name}</Text>}

        />

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

rowViewContainer: {
  fontSize: 20,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
}

});
