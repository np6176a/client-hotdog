import React, { Component, PropTypes } from 'react'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'
import errorDog from '../../assets/imgs/errorDog.jpg'
import styles from './styles'

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
