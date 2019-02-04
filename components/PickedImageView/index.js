import React, { Component, PropTypes } from 'react'
import { View, Text, ImageBackground, Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginVertical: 40,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    paddingVertical: 10,
  }
})

class PickedImageView extends Component {
  render () {
    const {pickedImage} = this.props
    return (
      <ImageBackground source={{uri: pickedImage}} style={styles.container}>
        <View>
        <Text style={styles.title}>It Is A Hot Dog</Text>
        <Button onPress={()=>{}} title='RESET'/>
        </View>
      </ImageBackground>
    )
  }
}

export default PickedImageView
