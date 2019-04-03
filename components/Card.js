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
              <Avatar size="60" name="Lavatchi" />
            </View>
            <View style={styles.storeName}>
              <Text style={styles.storeNameText}>لافاتشي</Text>
            </View>
          </View>
          <View style={styles.right}>
            <Text style={styles.discount}>-3.00 SR</Text>
            <Text style={styles.desc}>وجبة رزيتو ورق العنب</Text>
            {

            <View style={styles.barcodeContainer}>
              <Barcode value="142632" format="CODE128" lineColor="#000" width={2} height={20} style={styles.barcode}/>
            </View>

            }
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.left}>
            <View style={styles.logoHolder}>
              <Avatar size="60" name="Noodella" />
            </View>
            <View style={styles.storeName}>
              <Text style={styles.storeNameText}>نوديلا</Text>
            </View>
          </View>
          <View style={styles.right}>
            <Text style={styles.discount}>-2.00 SR</Text>
            <Text style={styles.desc}>نودلز الدجاج بصلصة الترياكي</Text>
            {

            <View style={styles.barcodeContainer}>
              <Barcode value="773695" format="CODE128" lineColor="#000" width={2} height={20} style={styles.barcode}/>
            </View>

            }
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
    color: '#00A4E7',
    fontWeight: '900'
  },
  desc:{
    textAlign: 'right',
    fontFamily: "GE Thameen",
    marginTop: 10,
    fontSize: 16
  },
  barcodeContainer:{
    paddingLeft: 10
  }
})
