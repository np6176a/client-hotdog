import React, { PureComponent, PropTypes } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import yes from '../../../../assets/icons/yeah.png'
import styles from '../styles'


class YesHotDog extends PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image source={yes} style={styles.image}/>
          <Text style={styles.title}>It Is A Hot Dog</Text>
        </View>
      </View>
    )
  }
}

export default YesHotDog
