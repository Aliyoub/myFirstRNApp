import React, { Component } from 'react';
import {View, Image, Text, StyleSheet, Button} from 'react-native';

export default class MyItems extends Component {
  render() {
    //console.log('props:', this.props);
    const user = this.props.user        
    let pic = {
        uri: user.picture.thumbnail
    };
    return (
        <View style={[styles.main_container]} opacity={0.7}>
            <View style={{justifyContent:'center'}}>
                <Image style={{width: 49.5, height: 43.5, borderRadius:50}} source = {pic} />
            </View>
            <View style={[styles.userInfosWithoutAvatar]}>
                <Text style={[styles.user_name]}>{user.name.first} {user.name.last}</Text>
                {/* <Text style={[styles.user_address]}>{user.location.city}</Text> */}
                <Text style={[styles.user_address]}>{user.location.street} - {user.location.city}</Text>
                <View style={[styles.blocAtTheBottomOfItem]}>
                    {/* <Text style={[styles.user_agrement]}>agrément: oui</Text> */}
                    <Text style={{color:'red',fontWeight: 'bold',fontSize: 12}}>Dispo:oui</Text>

                    <Text style={{color:'red',fontWeight: 'bold',fontSize: 12}}>Place(s):3</Text>

                    <Text style={{color:'red',fontWeight: 'bold',fontSize: 12}}>Expérience:5 ans</Text>
                    <Text style={{color:'blue',fontWeight: 'bold',fontSize: 12}}>Détails>></Text>
                    {/* <Button color='#DD70B7' fontSize= title='Voir+' onPress={() => {}}/> */}
                </View>           
            </View>
        </View>
    );
  }
}
 
const styles = StyleSheet.create({
  main_container: {
    height: 70,
    width: '100%',
    /* backgroundColor: '#67D2D8', */
    color: 'red',
    backgroundColor: '#CCDCED',
    marginBottom: 1,
    flexDirection: 'row'
},
blocAtTheBottomOfItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
},
user_name:{
    marginLeft: 15,
    color: '#C50707',
    fontWeight: 'bold',
    fontSize: 14

  },
  user_address: {
    marginLeft: 15,
    color: '#C50707',
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