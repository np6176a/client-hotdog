import React from 'react'
import { StyleSheet, View } from 'react-native'
import { userPermit } from './utils/Permissions'
import { uploadImgAsync, imgRekognition } from './utils/AmazonServices'
import InitialView from './components/InitialView'
import { ImagePicker } from 'expo'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      img: null,
      loading: false,
    }
  }

  takePhoto = () => {
    console.log('hello')
  }

  selectPhoto = async () => {
    const canAccessImageRoll = await userPermit()
    if (!canAccessImageRoll) return null
    const pickedImage = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    })
    await this.handleImgResult(pickedImage)
  }

  //fn to update img state when user picks an img
  handleImgResult = async (pickedImage) => {
    debugger
    if (pickedImage.cancelled) return
    try {
      this.setState({
        loading: true
      })
      const uploadResponse = await uploadImgAsync(pickedImage.uri)
      const reko = await imgRekognition(uploadResponse.data)
      console.log(reko)
      debugger

      // const aiResult = await requestAiProcessing(s3Bucket, s3Path)
      // const isHotdog = processAiResult(aiResult)
      // setState({loading: false, error: false, isHotdog: true)}
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
