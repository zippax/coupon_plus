import React, {Component} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Barcode from 'react-native-barcode-builder'
import Avatar from 'react-native-user-avatar'
import * as Animatable from 'react-native-animatable'
import axios from 'axios'

export default class Card extends Component{
  constructor(props){
    super(props)
    this.state = {coupons:[]}
  }
  componentDidMount(){
    let v = Math.random().toString(36).substring(7);

    axios.get('http://localhost/coupon/coupons.json.php?v='+v).then(response =>this.setState({coupons:response.data}));
  }

  insert(item_name){
    alert(item_name)
  }

  render_coupons(){
    return this.state.coupons.map(coupon =>
      // Start Coupons Component
      <View style={styles.card} key={coupon.id}>
        <View style={styles.left}>
          <View style={styles.logoHolder}>
            <Image
                source={{uri: coupon.logo}}
                style={{ borderRadius: 30, width: 60, height: 60 }}
            />
          </View>
          <View style={styles.storeName}>
            <Text style={styles.storeNameText}>{ coupon.store_name }</Text>
            <View style={styles.barcodeContainer}>
              <Barcode value= { coupon.coupon } format="CODE128" lineColor="#000" width={1} height={20} style={styles.barcode}/>
            </View>
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.pricetagHolder}>
            <Text style={styles.discount}>- { coupon.discount } SR</Text>
            <Icon name="ios-pricetag" size={18} color="#EE3A59" style={{marginLeft: 10}}/>
          </View>
          <Text style={styles.desc}>{ coupon.short_description }</Text>
          <View style={styles.footer}>
            <View style={styles.added}>
              <Text style={styles.addedText} onPress={()=>this.insert(coupon.short_description)}>اضافة الكوبون</Text>
              <Icon name="ios-add" size={20} color="#fff" style={{marginLeft: 10}}/>
            </View>
            <View style={styles.qty}>
              <Icon name="ios-eye" size={20} color="#222" />
            </View>
          </View>
        </View>
      </View>

      // End Coupons Component
    )
  }

  render() {
    return (
      <Animatable.View style={styles.container} animation="slideInUp">
        { this.render_coupons() }
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
    fontSize: 14,
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
