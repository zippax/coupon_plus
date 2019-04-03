import React, {Component} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Barcode from 'react-native-barcode-builder'
import Avatar from 'react-native-user-avatar'
import * as Animatable from 'react-native-animatable'

export default class Card extends Component{
  render() {
    return (
      <Animatable.View style={styles.container} animation="slideInUp">

        <View style={styles.card}>
          <View style={styles.left}>
            <View style={styles.logoHolder}>
              {
              //  <Avatar size="60" name="SQ" />
              }
              <Image
                  source={require('./../images/restLogo.jpg')}
                  style={{ borderRadius: 30, width: 60, height: 60 }}
              />
            </View>
            <View style={styles.storeName}>
              <Text style={styles.storeNameText}>لافاتشي</Text>
              <View style={styles.barcodeContainer}>
                <Barcode value="142632" format="CODE128" lineColor="#000" width={1} height={20} style={styles.barcode}/>
              </View>
            </View>
          </View>
          <View style={styles.right}>
            <View style={styles.pricetagHolder}>
              <Text style={styles.discount}>- 3.00 SR</Text>
              <Icon name="ios-pricetag" size={20} color="#EE3A59" style={{marginLeft: 10}}/>
            </View>
            <Text style={styles.desc}>وجبة البرجر بالباربيكيو اليابانية</Text>
            <View style={styles.footer}>
              <View style={styles.added}>
                <Text style={styles.addedText}>اضافة الكوبون</Text>
                <Icon name="ios-add" size={20} color="#fff" style={{marginLeft: 10}}/>
              </View>
              <View style={styles.qty}>
                <Icon name="ios-eye-off" size={20} color="#222" />
              </View>
            </View>
          </View>
        </View>

      </Animatable.View>
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
    backgroundColor: '#eee',
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
    fontSize: 16,
    color: '#EE3A59',
    fontWeight: '900'
  },
  desc:{
    textAlign: 'right',
    fontFamily: "GE Thameen",
    marginTop: 10,
    fontSize: 16,
  },
  pricetagHolder:{
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },
  barcodeContainer:{
    paddingLeft: 0,
    marginTop: -10,
    zIndex: -1
  },
  footer:{
    flexDirection: 'row',
    marginTop: 10
  },
  added:{
    flexDirection: 'row',
    backgroundColor: '#11CC6D',
    alignSelf: 'center',
    marginLeft: 10,
    paddingHorizontal:20,
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 15
  },
  qty:{
    backgroundColor: '#eee',
    alignSelf: 'center',
    marginLeft: 10,
    paddingHorizontal:10,
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 15
  },
  addedText:{
    fontFamily: "GE Thameen",
    color: '#fff'
  },
  qtyText:{
    fontFamily: "GE Thameen",
    color: '#000'
  }
})
