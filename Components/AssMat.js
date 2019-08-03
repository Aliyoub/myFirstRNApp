import React, {Component} from 'react';
import { StyleSheet, Button, View, FlatList, ActivityIndicator } from 'react-native';
import MyItems from './Items';
import myData from '../Helpers/AssMatDispoData';

class AssMat extends Component {
static navigationOptions = ({ navigation }) => ({
  title: 'Test',
  headerLeft: (
    <Button onPress={() =>navigation.navigate('Search')} />
  ),
});
    constructor(props){
        super(props)
        // Dans le state, on ne gère que des données qui, une fois modifées, peuvent affecter le rendu
        // de notre component. C'est pour cette raison qu'on ne met pas 'searchedText' dans le state. Ainsi,
        // on évite le chargement du component à chaque fois qu'un caractère est tapé.
        // Une bonne demarche est de voir si notre donnée est utilisée dans le render ou non, si oui, elle a
        // sûrement sa place dans le state, sinon, elle n' y a peut-être pas sa place 
        this.state = { 
            items: [],
            isLoading: false
        }
        this.page = 0,
        this.totalPages = 0
    }

    _loadItems(){
        // Pour modifier le state sur RN, il faut utiliser setState qui permet de modifier le state 
        // tout en rechargeant le component.
        // Lorsque la recherche est terminée, le component est rechargé avec les données récupérées de l'api

        // Sur RN, pour récupérer la donnée d'un component, il faut qu'un événement ait lieu sur ce component
        // sinon la donnée ne peut être récupérée, d'où le  sur le textInput.
        // En effet, 'onChangeText' est appelé à chaque fois qu'un caractère est saisi sur le textInput
        this.setState({ isLoading: true })

    }

    _displayLoading(){
        if(this.state.isLoading){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size = 'large' />
                </View>
            )
        }
    }

    render() {
        return (
            <View style={{alignItems: 'center'}}>
                {/* <View style={{backgroundColor:'gray', padding:7,
                    alignContent:'center', width:'100%'}}>
                    <View style={{backgroundColor:'#eee', height:40, 
                        flexDirection: 'row',alignItems: 'center',
                        paddingLeft:7                        
                        }}>
                        <Icon name= "ios-search" style={{fontSize: 24,color:'#000000', fontWeight:'bold'}} />
                    </View>
                </View> */}

                 <FlatList style={styles.flatList}
                    data={myData}
                    //data={this.state.items}
                    keyExtractor = {(item) => item.id.value.toString()}
                    onEndReachedThreshold = {0.5}
                    renderItem={({item}) => <MyItems user = { item } />} 
                />
                {/* on appelle notre fonction _displayLoading ici, tout en bas de la view
                pour qu'elle soit appelée en dernier et que le chargement s'affiche par dessus tous les autres élements */}
                { this._displayLoading() }
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
    },

    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default AssMat