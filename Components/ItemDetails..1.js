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

  componentDidMount() {
    getItemDetailsFromApi(this.props.navigation.state.params.idItem).then(data => {
      this.setState({
        item: data,
        isLoading: false
      })
    })
  }

  componentDidUpdate() {
    console.log("componentDidUpdate : ")
    console.log(this.props.favoritesItem)
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  // Mise en place redux
  _toggleFavorite() {
    const action = { type: "TOGGLE_FAVORITE", value: this.state.item }
    this.props.dispatch(action)
  }

  _displayItem() {
    const { item } = this.state
    if (item != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Image
            style={styles.image}
            source={{uri: getImageFromApi(item.backdrop_path)}}
          />
          <Text style={styles.title_text}>{item.title}</Text>
          <Button title="Favoris" onPress={() => this._toggleFavorite()}/>
          <Text style={styles.description_text}>{item.overview}</Text>
          {/* <Text style={styles.default_text}>Sorti le {moment(new Date(item.release_date)).format('DD/MM/YYYY')}</Text>
          <Text style={styles.default_text}>Note : {item.vote_average} / 10</Text>
          <Text style={styles.default_text}>Nombre de votes : {item.vote_count}</Text>
          <Text style={styles.default_text}>Budget : {numeral(item.budget).format('0,0[.]00 $')}</Text>
          <Text style={styles.default_text}>Genre(s) : {item.genres.map(function(genre){
              return genre.name;
            }).join(" / ")}
          </Text>
          <Text style={styles.default_text}>Companie(s) : {item.production_companies.map(function(company){
              return company.name;
            }).join(" / ")}
          </Text> */}
        </ScrollView>
      )
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayItem()}
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
  scrollview_container: {
    flex: 1
  },
  image: {
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  }
})

const mapStateToProps = (state) => {
  return {
    favoritesItem: state.favoritesItem
  }
}

export default connect(mapStateToProps)(ItemDetails)