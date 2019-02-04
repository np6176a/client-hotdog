import React from 'react'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo'
import { userCameraRollPermit, userCameraPermit } from './utils/Permissions'
import { awsImgAnalysis } from './utils/AmazonServices'
import { checkForHotdog } from './utils/CheckForHotDog'
import { imgLibPicker, imgCameraPicker } from './utils/ImgPicker'
import InitialView from './components/InitialView'
import PickedImageView from './components/PickedImageView'
import ErrorView from './components/ErrorView'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pickedImg: null,
      isHotDog: null,
      loading: false,
      hasError: false
    }
  }

  takePhoto = async () => {
    const canAccessCamera = await userCameraPermit()
    const canAccessImageRoll = await userCameraRollPermit()
    if (!canAccessImageRoll || !canAccessCamera) return
    const pickedImage = await imgCameraPicker()
    this.setState({ pickedImage: pickedImage.uri })
    await this.handleImgResult(pickedImage)
  }

  selectPhoto = async () => {
    const canAccessImageRoll = await userCameraRollPermit()
    if (!canAccessImageRoll) return
    const pickedImage = await imgLibPicker()
    this.setState({ pickedImage: pickedImage.uri })
    await this.handleImgResult(pickedImage)
  }

  //fn to update img state when user picks an img
  handleImgResult = async (pickedImage) => {
    if (pickedImage.cancelled) return
    try {
      this.setState({
        loading: true
      })
      const namesObj = await awsImgAnalysis(pickedImage)
      const isHotDog = checkForHotdog(namesObj)
      this.setState({ loading: false, error: false, isHotDog })
    } catch (e) {
      console.log(e)
      this.setState({ loading: false, error: true })
    }
  }
//resets all state
  resetChecker = () => {
    this.setState({
      pickedImage: null,
      isHotDog: null,
      error: false,
      loading: false
    })
  }

  render () {
    const { pickedImage, isHotDog, loading, error } = this.state
    return (
      <LinearGradient
        colors={['#FF416C', '#FF4B2B']}
        start={[0, 0]}
        end={[1, 1]}
        location={[0.25, 0.4, 1]}
        style={styles.container}
      >
        {error &&
        <ErrorView reset={this.resetChecker}/>
        }

        {!pickedImage &&
        <InitialView selectPhoto={this.selectPhoto} takePhoto={this.takePhoto}/>
        }
        {(pickedImage && !loading) &&
        <PickedImageView
          pickedImage={pickedImage}
          isHotDog={isHotDog}
          reset={this.resetChecker}
        />
        }
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEEF7',
  },
})
