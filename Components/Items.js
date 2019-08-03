import React, { Component } from 'react';
import {View, Image, Text, StyleSheet, Button} from 'react-native';

export default class MyItems extends Component {
  render() {
    //console.log('props:', this.props);
    //const user = this.props.user 
    //alert('fff')
    const { user, displayItemDetails } = this.props        
    let pic = {
        uri: user.picture.thumbnail
    };
    return (

      <View style={{backgroundColor: '#CCDCED', marginBottom: 1, paddingTop:7 }} opacity={0.7}>                    
        <View style={styles.main_container} >                    
          <View style={{justifyContent:'center', alignSelf:'flex-start', marginLeft:7}}>
              <Image style={{width: 49.5, height: 43.5, borderRadius:50}} source = {pic} />
          </View>
          <View style={styles.userInfosWithoutAvatar}>
            <View style={{flex:1}}>
                <Text style={styles.user_name}>{user.name.first} {user.name.last}</Text>
                <Text style={styles.user_address}>{user.location.street} - {user.location.city}</Text>
                <View style={styles.blocAtTheBottomOfItem}>
                    <Text style={{color:'#AC1354',fontWeight: 'bold',fontSize: 12}}>Dispo:oui</Text>
                    <Text style={{color:'#AC1354',fontWeight: 'bold',fontSize: 12}}>Place(s):3</Text>
                    <Text style={{color:'#AC1354',fontWeight: 'bold',fontSize: 12}}>Expérience:5 ans</Text>
                </View>           
            </View>
          </View>
        </View>
          <View style={{flex:1, alignItems:'flex-end', paddingBottom:'2%'}}>
            <Text style={{color:'#AC1354',fontWeight: 'bold',fontSize: 12, marginRight:'2%',textDecorationLine: 'underline'}}
            onPress={() => alert(user.id.value)}>Voir
            </Text>
          </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  main_container: {width: '100%',color: 'red',flexDirection: 'row',alignItems:'stretch'},
  blocAtTheBottomOfItem: {flexDirection: 'row',justifyContent: 'space-between',},
  userInfosWithoutAvatar: {flexDirection: 'column', flex:1, alignItems:'center'},
    

user_name:{
    marginLeft: 15,
    color: '#AC1354',
    //color: '#C50707',
    fontWeight: 'bold',
    fontSize: 14

  },
  user_address: {
    marginLeft: 15,
    color: '#AC1354',
    //color: '#C50707',
    fontWeight: 'bold',
    fontSize: 14
  },
  user_dispo: {
    marginLeft: 15,
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: '#FF99DC',
    padding: 3,
    borderRadius: 100
  },
  user_places: {
    marginLeft: 15,
    color: '#B86547',
    fontWeight: 'bold',
    fontSize: 14
  },
  user_agrement: {
    marginLeft: 15,
    color: '#B86547',
    fontWeight: 'bold',
    fontSize: 14
  },
  myVoirPlusButton: {
    fontSize: 10
  }
})