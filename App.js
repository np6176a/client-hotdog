import React from 'react'
import { StyleSheet, View } from 'react-native'
import { uploadImgAsync } from './utils/Upload'
import InitialView from './components/InitialView'

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
    //all of this needs to be in the util file
    const { ImagePicker, Permissions } = Expo
    //getting user permission for gallery
    const {
      status: cameraRollPermit
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

    if (cameraRollPermit === 'granted') {
      let imgResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3]
      })
      await this.handleImgResult(imgResult)
    }
  }

  //fn to update img state when user picks an img
  handleImgResult = async (imgResult) => {
    if (imgResult.cancelled) return
    try {
      this.setState({
        loading: true
      })
      const uploadResponse = await uploadImgAsync(imgResult.uri)
      const uploadResult = await uploadResponse.json()
      // const aiResult = await requestAiProcessing(s3Bucket, s3Path)
      // const isHotdog = processAiResult(aiResult)
      // setState({loading: false, error: false, isHotdog: true)}
    } catch (e) {
      console.log({ uploadResponse })
      console.log({ uploadResult })
      console.log({ e })
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
