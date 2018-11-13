import React, { Component } from 'react';

import { StyleSheet, Text, View, ListView, ActivityIndicator } from 'react-native';

import { StackNavigator } from 'react-navigation';

class MainActivity extends Component {

  //
  static navigationOptions = {

    title: 'Detail',

  };

  constructor(props) {

    super(props);

    this.state = {

      // Default Value of this State.
      Loading_Activity_Indicator: true

    }
  }

  componentDidMount() {

    return fetch('https://reactnativecode.000webhostapp.com/FruitsList.php')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          Loading_Activity_Indicator: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {

          // In this block you can do something with new state.

        });
      })
      .catch((errorMsg) => {

        console.error(errorMsg);

      });
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

  Navigate_To_Second_Activity=(fruit_name)=>
    {
      //Sending the JSON ListView Selected Item Value On Next Activity.
      this.props.navigation.navigate('Second', { JSON_ListView_Clicked_Item: fruit_name });

    }

  static navigationOptions =
    {

     title: 'MainActivity',

    };


  render()
  {
    if (this.state.Loading_Activity_Indicator) {
      return (
        <View style={styles.ActivityIndicator_Style}>

          <ActivityIndicator size = "large" color="#009688"/>

        </View>
      );
    }

    return (

      <View style={styles.MainContainer}>

        <ListView

          dataSource={this.state.dataSource}

          renderSeparator= {this.ListViewItemSeparator}

          renderRow={(rowData) => <Text style={styles.rowViewContainer}
          onPress={this.Navigate_To_Second_Activity.bind(this, rowData.fruit_name)} >{rowData.fruit_name}</Text>}

        />

      </View>
    );
  }
}

class SecondActivity extends Component
{
  static navigationOptions =
  {
     title: 'SecondActivity',
  };

  render()
  {
     return(
        <View style = { styles.MainContainer }>

           <Text style = { styles.TextStyle }> { this.props.navigation.state.params.JSON_ListView_Clicked_Item } </Text>

        </View>
     );
  }
}

export default MyNewProject = StackNavigator(
{
  First: { screen: MainActivity },

  Second: { screen: SecondActivity }
});

const styles = StyleSheet.create(
{
  MainContainer:
  {
     justifyContent: 'center',
     flex:1,
     margin: 10

  },

  TextStyle:
  {
     fontSize: 23,
     textAlign: 'center',
     color: '#000',
  },

  rowViewContainer:
  {

    fontSize: 17,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,

  },

  ActivityIndicator_Style:
  {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,

  }

});
