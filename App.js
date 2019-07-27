import React, { Component } from 'react';
import {View, ImageBackground, Button, Text} from 'react-native';
  
import {
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
} from 'react-navigation';
import {
  createMaterialBottomTabNavigator
} from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';


//import BottomTabNavigator from './Components/BottomTabNavigator';
import Search from './Components/Search';
import Menu from './Components/Menu';
import MyItems from './Components/Items';
import AssMat from './Components/AssMat';
import Parents from './Components/Parents';

import {accrocheStyle} from './Styles/accrocheStyle';
import {backgroundStyle} from './Styles/backgroundStyle';

class Main extends Component {
    render() {
    let pic = {
      uri: 'https://cdn.pixabay.com/photo/2013/02/21/19/10/mother-84628_960_720.jpg'
    };
    return (
      <View>
      <Search />
        <ImageBackground source={pic} style={backgroundStyle.bg}>                               
          <View style={backgroundStyle.ImageBackgroundView}>
            <Text style={accrocheStyle.accroche1}>Au bonheur des bouts d'chou!</Text>
            <Text style={accrocheStyle.accroche2}>
              Trouver une assitante maternelle ou des enfants à garder 
              n'a jamais été aussi simple !
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const AppTabNavigator = createMaterialTopTabNavigator(
  {
    home:{
      screen: Main,
        navigationOptions: {
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ focused }) => (
                    <Icon name='ios-home' color={focused ? '#FFF' : '#FF99DC'} size={20} />
                  )
        },
    },
    parents:{
      screen: Parents,
        navigationOptions: {
          tabBarLabel: 'Parents',
          tabBarIcon: ({ focused }) => (
                    <Icon name='ios-people' color={focused ? '#FFF' : '#FF99DC'} size={20} />
                  )
          },
    },
    assmat:{
      screen: AssMat,
        navigationOptions: {
          tabBarLabel: 'Ass Mat',
          tabBarIcon: ({ focused }) => (
                    <Icon name='ios-woman' color={focused ? '#FFF' : '#FF99DC'} size={20} />
                  )
          },
    }
  },

  {
    shifting: false, // voir: https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html
    initialRouteName: 'home',
 
    //tabBarPosition: 'bottom', // A ne pas supprimer, au cas où on voudrait mettre la navigation en bas
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions:{
      showIcon: true,
      activeTintColor: '#FFF',
      inactiveTintColor: '#FF99DC',
      labelStyle: {
      fontSize: 12,
      },
      tabStyle: {
        width: 100,
      },
      style: {
        backgroundColor: '#E33E7C',
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
        backgroundColor: '#E33E7C',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
       },
       headerRight: (<Icon name= "ios-search" onPress={() => alert('This is a button!')}
          style={{fontSize: 24, color:'#FFF', fontWeight:'bold', marginRight:17}} />
        ),
      //  headerRight: (<Button onPress={() => alert('This is a button!')} title="Info" color="#fff"/> ),
      title: 'AssMatDispo',
    },
  },
});

export default createAppContainer(App);