import React from 'react';
import {createStackNavigator, createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Search from '../Components/Search';
import AssMat from '../Components/AssMat';
import Parents from '../Components/Parents';
import Favorites from '../Components/Favorites';
import Fonctionnement from '../Components/Fonctionnement';
import { View,Button } from 'react-native';
import PropTypes from 'prop-types';


/* class Navigation extends React.Component{

render(){
  const { navigate } = this.props.navigation;
  return(
    <View></View>
  );
}
}
Button.propTypes = {
  navigate: PropTypes.string.isRequired,
}; */
 //const navigation = this.props.navigation;

const AppTabNavigator = createMaterialTopTabNavigator(
  {
    AssMat: {
      screen: AssMat,
      navigationOptions: {
        tabBarLabel: 'Ass Mat',
        tabBarIcon: ({ focused }) => (
        <Icon name = 'ios-woman' color = { focused ? '#FFF' : '#E33E7C' } size = {20} />      
        )
      },
    },

    Parents: {
      screen: Parents,
      navigationOptions: {
        tabBarLabel: 'Parents',
        tabBarIcon: ({ focused }) => (
        <Icon name = 'ios-people' color = { focused ? '#FFF' : '#E33E7C' } size = {20} />      
        )
      },
    },
    
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: 'Accueil',
        tabBarIcon: ({ focused }) => (
        <Icon name = 'ios-home' color = { focused ? '#FFF' : '#E33E7C' } size = {20} />  
        )
      },
    },

    Fonctionnement: {
      screen: Fonctionnement,
      navigationOptions: {
        tabBarLabel: 'Fonctionnement',
        tabBarIcon: ({ focused }) => (
        <Icon name = 'ios-home' color = { focused ? '#FFF' : '#E33E7C' } size = {20} />  
        )
      },
    },
  },

  {
    shifting: false, // voir: https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html
    initialRouteName: 'AssMat',

    //tabBarPosition: 'bottom', // A ne pas supprimer, au cas où on voudrait mettre la navigation en bas
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#FFF',
      inactiveTintColor: '#E33E7C',
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        width: 100,
      },
      style: {
        backgroundColor: '#FF99DC',
        //backgroundColor: '#E33E7C',
      },
      indicatorStyle: {
        // borderBottomColor: '#87B56A',
        // borderBottomWidth: 2,
      },
    },

  },
);

const App = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#FF99DC',
        //backgroundColor: '#E33E7C',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
       //headerRight: ( <Button title = "ios-search" onPress={() =>alert('Parents')} 
       headerRight: ( <Icon name = "ios-search" onPress={() => this.props.navigation.navigate('Parents')} 
          style = {{fontSize: 24, color: '#FFF', fontWeight: 'bold', marginRight: 17}}/>), 

      title: 'AssMatDispo',
    },
  },
});



export default createAppContainer(App);

//export default createAppContainer(AppTabNavigator)