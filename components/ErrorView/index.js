import React, { Component, PropTypes } from 'react'
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import errorDog from '../../assets/imgs/errorDog.jpg'
import yes from '../../assets/icons/yeah.png'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  divider: {
    flex: 2,
    height: 40
  },
  wrapper:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 60,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 40,
    padding: 20,
    textAlign: 'center',
    color: '#fff'
  },
  txt:{
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  },
  btnWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  btn: {
    width: 180,
    height: 50,
    borderColor: '#fff',
    borderRadius: 100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

class ErrorView extends Component {
  render () {
    const { reset } = this.props
    return (
      <ImageBackground source={errorDog} style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Oops!</Text>
          <Text style={styles.txt}>We had a technical issue.</Text>
          <Text style={styles.txt}>Please restart.</Text>
        </View>
        <View style={styles.btnWrap}>
          <TouchableOpacity style={styles.btn} onPress={reset}>
            <Text style={styles.btnText}>Restart</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider}/>
      </ImageBackground>
    )
  }
}

export default ErrorView
