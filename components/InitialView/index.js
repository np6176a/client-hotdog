import React, { Component, PropTypes } from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'
import logo from '../../assets/icon.png'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30
  },
  title: {
    fontSize: 30,
    marginVertical: 40,
    fontWeight: 'bold'
  }
})

class InitialView extends Component {
  render () {
    const { takePhoto, selectPhoto } = this.props
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo}/>
        <View/>
        <Text style={styles.title}>The Hot Dog Checker</Text>
        <Button onPress={selectPhoto} title='Select From Gallery'/>
      </View>
    )
  }
}

export default InitialView
