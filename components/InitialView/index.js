import React, { Component, PropTypes } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import logo from '../../assets/icon.png'
import styles from './styles'

class InitialView extends Component {
  render () {
    const { selectPhoto, takePhoto } = this.props
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo}/>
        <View/>
        <Text style={styles.title}>The Hot Dog Checker</Text>
        <TouchableOpacity style={[styles.btn, styles.btnSolid]} onPress={takePhoto}>
          <Text style={[styles.btnText, styles.btnSolidText]}>Take A Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={selectPhoto}>
          <Text style={styles.btnText}>Select From Gallery</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default InitialView
