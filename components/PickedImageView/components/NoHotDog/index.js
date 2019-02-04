import React, { PureComponent, PropTypes } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import nope from '../../../../assets/icons/nope.png'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    height: 100
  },
  wrapper:{
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 30,
    marginBottom: -10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    padding: 20,
    textAlign: 'center'
  }
})

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
