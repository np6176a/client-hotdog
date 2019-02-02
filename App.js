import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InitialView from './components/InitialView'

export default class App extends React.Component {
  constructor (props){
    super(props)
    this.state={
      img: null,
      loading: false,
    }
    this.takePhoto = this.takePhoto.bind(this)
    this.selectPhoto = this.selectPhoto.bind(this)
  }

  takePhoto () {
    console.log('hello')
  }

  selectPhoto () {
    console.log('yep')
  }

  render () {
    return (
      <View style={styles.container}>
        <InitialView takePhoto={this.takePhoto} selectPhoto={this.selectPhoto}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
})
