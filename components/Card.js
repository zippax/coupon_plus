import React, {Component} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


export default class Card extends Component{
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.card}>
          <View style={styles.left}>
            <View style={styles.logoHolder}>
            </View>
            <View style={styles.storeName}>
              <Text style={styles.storeNameText}>لافاتشي</Text>
            </View>
          </View>
          <View style={styles.right}>
            <Text style={styles.discount}>3.00 SR</Text>
            <Text style={styles.desc}>العرض يشمل وجبات البرجر فقط</Text>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  card:{
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#eee',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 20,
    shadowOpacity: 1.0,
    flexDirection: 'row',
    marginBottom: 10
  },
  left:{
    flex: 1,
    borderRightWidth: 2,
    borderRightColor: '#eee',
    padding: 10,
    alignItems: 'center'
  },
  right:{
    flex: 2,
    padding: 10
  },
  logoHolder:{
    width: 60,
    height: 60,
    backgroundColor: '#00A4E7',
    borderRadius: 30,
    marginRight: 10
  },
  storeName:{
    marginTop: 5,
    marginRight: 10
  },
  storeNameText:{
    textAlign: 'center',
    fontFamily: "GE Thameen",
    fontSize: 16
  },
  discount:{
    textAlign: 'right',
    fontSize: 20,
    color: '#00A4E7',
    fontWeight: '900'
  },
  desc:{
    textAlign: 'right',
    fontFamily: "GE Thameen",
    marginTop: 10
  }
})
