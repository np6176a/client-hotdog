import React, { Component, PropTypes } from 'react'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'
import YesHotDog from './components/YesHotDog'
import NoHotDog from './components/NoHotDog'
import styles from './styles'

class PickedImageView extends Component {
  render () {
    const { pickedImage, isHotDog, reset } = this.props
    return (
      <ImageBackground source={{ uri: pickedImage }} style={styles.container}>
        <View style={styles.divider}/>
        {isHotDog &&
        <YesHotDog/>
        }
        {!isHotDog &&
          <NoHotDog/>
        }
        <View style={styles.btnWrap}>
          <TouchableOpacity style={styles.btn} onPress={reset}>
            <Text style={styles.btnText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

export default PickedImageView
