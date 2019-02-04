import React from 'react'
import { StyleSheet, View } from 'react-native'
import { userPermit } from './utils/Permissions'
import { awsImgAnalysis } from './utils/AmazonServices'
import { checkForHotdog } from './utils/CheckForHotDog'
import InitialView from './components/InitialView'
import { ImagePicker } from 'expo'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hotDog: null,
      loading: false,
      hasError: false
    }
  }

  selectPhoto = async () => {
    const canAccessImageRoll = await userPermit()
    if (!canAccessImageRoll) return
    const pickedImage = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    })
    await this.handleImgResult(pickedImage)
  }

  //fn to update img state when user picks an img
  handleImgResult = async (pickedImage) => {
    if (pickedImage.cancelled) return
    try {
      this.setState({
        loading: true
      })
      const data = await awsImgAnalysis(pickedImage)
      const isHotDog = checkForHotdog(data)
      this.setState({ loading: false, error: false, isHotdog })
    } catch (e) {
      console.log(e)
      //this.setState({ loading: false, error: true })
      //also have a reset button in the error view to restart the photo submit
      alert('Failed Image Upload :(')
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
