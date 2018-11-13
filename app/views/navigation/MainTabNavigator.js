//
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

//
import TabBarIcon from 'app/controllers/components/TabBarIcon';
import HomeScreen from 'app/views/screens/HomeScreen';
import LinksScreen from 'app/views/screens/LinksScreen';
import SettingsScreen from 'app/views/screens/SettingsScreen';
import FromJSONScreen from 'app/views/screens/FromJSONScreen';
import WithImagesScreen from 'app/views/screens/WithImagesScreen';
import RefreshScreen from 'app/views/screens/RefreshScreen';
import IsConnectedScreen from 'app/views/screens/IsConnectedScreen';
import LoadMoreScreen from 'app/views/screens/LoadMoreScreen';
import CreateScreen from 'app/views/screens/CreateScreen';
import InsertScreen from 'app/views/screens/InsertScreen';
import DetailScreen from 'app/views/screens/DetailScreen';
import PickerScreen from 'app/views/screens/PickerScreen';

//
const HomeStack = createStackNavigator({ Home: HomeScreen, });
const LinksStack = createStackNavigator({ Links: LinksScreen, });
const SettingsStack = createStackNavigator({ Settings: SettingsScreen, });
const FromJSONStack = createStackNavigator({ FromJSON: FromJSONScreen, });
const WithImagesStack = createStackNavigator({ WithImages: WithImagesScreen, });
const RefreshStack = createStackNavigator({ Refresh: RefreshScreen, });
const IsConnectedStack = createStackNavigator({ IsConnected: IsConnectedScreen, });
const LoadMoreStack = createStackNavigator({ LoadMore: LoadMoreScreen, });
const CreateStack = createStackNavigator({ Create: CreateScreen, });
const InsertStack = createStackNavigator({ Insert: InsertScreen, });
const DetailStack = createStackNavigator({ Detail: DetailScreen, });
const PickerStack = createStackNavigator({ Picker: PickerScreen, });

//
HomeStack.navigationOptions = { tabBarLabel: 'Home', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle' } /> ), };
LinksStack.navigationOptions = { tabBarLabel: 'Links', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle' } /> ), };
SettingsStack.navigationOptions = { tabBarLabel: 'Settings', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle' } /> ), };
FromJSONStack.navigationOptions = { tabBarLabel: 'From JSON', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle' } /> ), };
WithImagesStack.navigationOptions = { tabBarLabel: 'With Images', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle' } /> ), };
RefreshStack.navigationOptions = { tabBarLabel: 'Refresh', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle' } /> ), };
IsConnectedStack.navigationOptions = { tabBarLabel: 'Is Connected', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle' } /> ), };
LoadMoreStack.navigationOptions = { tabBarLabel: 'Load More', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle' } /> ), };
CreateStack.navigationOptions = { tabBarLabel: 'Create', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle' } /> ), };
InsertStack.navigationOptions = { tabBarLabel: 'Insert', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle' } /> ), };
DetailStack.navigationOptions = { tabBarLabel: 'Detail', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle' } /> ), };
PickerStack.navigationOptions = { tabBarLabel: 'Picker', tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle' } /> ), };

//
export default createBottomTabNavigator({
  //HomeStack,
  //LinksStack,
  //SettingsStack,
  //FromJSONStack,
  //WithImagesStack,
  //IsConnectedStack,
  //RefreshStack,
  //LoadMoreStack,
  CreateStack,
  InsertStack,
  DetailStack,
  PickerStack,
});
