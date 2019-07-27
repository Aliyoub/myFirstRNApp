import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import myData from '../Helpers/AssMatDispoData';
import MyItems from './Items';
import Menu from './Menu';

class Search extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <View style={{backgroundColor:'gray', padding:7,
                    alignContent:'center', width:'100%'}}>
                    <View style={{backgroundColor:'#eee', height:40, 
                        flexDirection: 'row',alignItems: 'center',
                        paddingLeft:7                        
                        }}>
                        <Icon name= "ios-search" style={{fontSize: 24,color:'#000000', fontWeight:'bold'}} />
                        <TextInput style={{}} placeholder='ex: paris ou dispo'/>
                    </View>
                </View>
                
                {/* <Button style={styles.myButton} title='Rechercher' onPress={() => {}}/> */}
                 <FlatList style={styles.flatList}
                     data={myData}
                    keyExtractor = {(item) => item.id.value.toString()}
                    renderItem={({item}) => <MyItems user = { item }/>} 
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    myTextInput: {
        marginTop: 10,
        marginBottom: 1,
        width:'97%',
        backgroundColor:'white',
        height: 50,
        borderColor: '#FF99DC',
        borderWidth: 1,
        paddingLeft: 5
    },
    myButton: {
        marginTop: 10,
        marginBottom: 1,
        width:'97%',
        backgroundColor: '#FF99DC',
        height: 50,
        borderColor: 'red',
        borderWidth: 1,
        paddingLeft: 5
    },
    flatList: {
        width: '100%',
        height: '100%',
    }
})

export default Search