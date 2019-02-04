import React, { PureComponent, PropTypes } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import nope from '../../../../assets/icons/nope.png'
import styles from '../styles'

class NoHotDog extends PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image source={nope} style={styles.image}/>
          <Text style={styles.title}>Not A Hot Dog</Text>
        </View>
      </View>
    )
  }
}

export default NoHotDog
