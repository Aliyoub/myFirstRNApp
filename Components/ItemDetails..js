// Components/ItemDetails.js

import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, Button } from 'react-native'
import { getItemDetailsFromApi, getImageFromApi } from '../API/TMDBApi'
import moment from 'moment'
import numeral from 'numeral'
import { connect } from 'react-redux'

class ItemDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: undefined,
      isLoading: true
    }
  }

  componentDidMount(){
    //getItemDetailsFromApi(this.props.navigation.state.params.idItem).then(data => {
      this.setState({
        item: {first: user.name.first, last: user.name.last, location: user.location.city}
        //item: data
      })
    //})
  }

  _displayItemDetails() {
    /* const item = this.state.item;
    if(item != undefined){
      return(
        <ScrollView>
          <Text>{this.state.item.first}</Text>
        </ScrollView>
      )
    } */
    alert('test ok')
  }

  render() {
    const idItem = this.props.navigation.state.params.idItem
    return (
      <View>
        Détails de Item { this._displayItemDetails() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default ItemDetails