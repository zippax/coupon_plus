import React, {Component} from 'react'
import {StyleSheet, View, Dimensions, Image} from 'react-native'
import { WebView } from 'react-native-webview'

let height = Dimensions.get('window').height, hieght = height - 70

export default class Web extends Component{
  constructor(props) {
    super(props);
    this.state = { visible: true }
  }

  hideSpinner() {
    this.setState({ visible: false })
  }


  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: "http://zippax.com/coupons.app" }}
          style={ styles.webView }
          onLoad={() => this.hideSpinner()}
        />
        {this.state.visible && (
          <View style={styles.loading}>
            <Image
                source={require('./../images/loading.gif')}
                style={styles.backgroundImage}
            />
          </View>
        )}
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  loading:{
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#fff',
    height: height,
    alignItems: 'center'
  },
  backgroundImage:{
    width: 200,
    height: 200,
    marginTop: 80
  },
  webView:{
    position: 'absolute',
    height: hieght,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
})
