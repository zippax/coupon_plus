import React, {Component} from 'react'
import {AppRegistry, StyleSheet, Text, View, ScrollView, Image, Dimensions} from 'react-native'
import Header from './components/Header'
import Card from './components/Card'

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

export default class Home extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.scrollView}>
          <Card />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFF'
  },
  scrollView:{
    flex: 1,
  }
})


AppRegistry.registerComponent('coupon_plus', () => Home)
