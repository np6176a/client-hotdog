import React from 'react'
import { StyleSheet, View } from 'react-native'
import InitialView from './components/InitialView'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      img: null,
      loading: false,
    }
    this.takePhoto = this.takePhoto.bind(this)
    this.selectPhoto = this.selectPhoto.bind(this)
    this.handleImgResult = this.handleImgResult.bind(this)
  }

  takePhoto () {
    console.log('hello')
  }

  selectPhoto () {
    //getting user permission for gallery
    const {
      status: cameraRollPermit
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

    if (cameraRollPermit === 'granted') {
      let imgResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3]
      })
    }
    this.handleImgResult(imgResult)
  }

  //fn to update img state when user picks an img
  handleImgResult = async (imgResult) => {
    try {
      this.setState({
        loading: true
      })
      if (!imgResult.cancelled) {
        this.setState({
          img: imgResult
        })
      }
    } catch (e) {
      console.log({e})
      alert('Failed Image Upload :(')
    } finally {
      this.setState({
        loading: false
      })
    }
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
    backgroundColor: '#EDEEF7',
    flexDirection: 'column'
  },
})
