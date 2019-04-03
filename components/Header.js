import React, {Component} from 'react'
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'

export default class Header extends Component{
  render() {
    return (
      <Animatable.View style={styles.container} animation="slideInDown">
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={styles.left}>
          <Icon name="ios-settings" size={30} color="#fff" />
        </View>
        <View style={styles.center}>
          <Image
              source={require('./../images/logoWhitePlusColor.png')}
              style={styles.logo}
          />
        </View>
        <View style={styles.right}>
          <Icon name="ios-wallet" size={30} color="#fff" />
        </View>
      </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 100,
    paddingTop: 20,
    paddingBottom: 10,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    zIndex: 3,
    backgroundColor: '#00adea'
  },
  headerText:{
    color: '#00ADEA',
    fontWeight: '900'
  },
  left:{
    flex: 1,
    marginLeft: 20
  },
  right:{
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20
  },
  center: {
    flex: 1,
    alignItems: 'center'
  },
  logo:{
    width: 100,
    height: 36
  }
})
