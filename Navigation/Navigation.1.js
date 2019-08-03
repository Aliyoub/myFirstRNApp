import React from 'react';


//import { createStackNavigator, createAppContainer } from 'react-navigation'
import {createStackNavigator, createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

/* import Menu from './Components/Menu';
import MyItems from './Components/Items'; */
import Search from '../Components/Search';
import AssMat from '../Components/AssMat';
import Parents from '../Components/Parents';
import Favorites from '../Components/Favorites';

const SearchStackNavigator = createStackNavigator(
  {
    Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
      screen: Search,
        navigationOptions: {
          tabBarLabel: 'Recherche',
          tabBarIcon: ({ focused }) => (
                    <Icon name='ios-search' color={focused ? '#FFF' : '#FF99DC'} size={20} />
                  )
      },
    },
    Favorites: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
      screen: Favorites,
      navigationOptions: {
        title: 'Ass Mat'
      }
    },
  },
  {
    shifting: false, // voir: https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html
    initialRouteName: 'Search',

    tabBarPosition: 'bottom', // A ne pas supprimer, au cas où on voudrait mettre la navigation en bas
    //tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
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


})

const AppTabNavigator = createMaterialTopTabNavigator({
  Search: {
    screen: Search,
  },
  Favorites: {
    screen: Favorites
  }

  
})


/* const AppStackNavigator = createStackNavigator(
  {
    Search:{
      screen: Search,
        navigationOptions: {
          tabBarLabel: 'Recherche',
          tabBarIcon: ({ focused }) => (
                    <Icon name='ios-search' color={focused ? '#FFF' : '#FF99DC'} size={20} />
                  )
        },
    },
    Parents: {
      screen: Parents,
        navigationOptions: {
          tabBarLabel: 'Parents',
          tabBarIcon: ({ focused }) => (
                    <Icon name='ios-people' color={focused ? '#FFF' : '#FF99DC'} size={20} />
                  )
          },
    },
    AssMat: {
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
    initialRouteName: 'parents',
 
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

const AppTabNavigator = createMaterialTopTabNavigator({
  AppStackNavigator: {
    screen: AppStackNavigator,
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

export default createAppContainer(AppTabNavigator); */

export default createAppContainer(AppTabNavigator)