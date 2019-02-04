import React, { Component, PropTypes } from 'react'
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet } from 'react-native'
import YesHotDog from './components/YesHotDog'
import NoHotDog from './components/NoHotDog'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  divider: {
    flex: 1,
    height: 50
  },
  btnWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  btnText:{
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

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
