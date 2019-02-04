import React, { Component, PropTypes } from 'react'
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native'
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
  },
  btn: {
    width: 300,
    height: 50,
    borderColor: '#696969',
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: '#F6F7FB',
    shadowColor: '#D6D6D6',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 1,
      height: 2
    },
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#000',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

class InitialView extends Component {
  render () {
    const { selectPhoto } = this.props
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo}/>
        <View/>
        <Text style={styles.title}>The Hot Dog Checker</Text>
        <TouchableOpacity style={styles.btn} onPress={selectPhoto}>
          <Text style={styles.btnText}>Select From Gallery</Text>
        </TouchableOpacity>
        {/*<Button onPress={selectPhoto} title='Select From Gallery'/>*/}
      </View>
    )
  }
}

export default InitialView
