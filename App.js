import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ImagePicker } from 'expo'
import { userPermit } from './utils/Permissions'
import { awsImgAnalysis } from './utils/AmazonServices'
import { checkForHotdog } from './utils/CheckForHotDog'
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

  selectPhoto = async () => {
    const canAccessImageRoll = await userPermit()
    if (!canAccessImageRoll) return
    const pickedImage = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9]
    })
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
      const data = await awsImgAnalysis(pickedImage)
      const isHotDog = checkForHotdog(data)
      this.setState({ loading: false, error: false, isHotDog })
    } catch (e) {
      console.log(e)
      this.setState({ loading: false, error: true })
    }
  }

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
      <View style={styles.container}>
        {error &&
        <ErrorView reset={this.resetChecker}/>
        }

        {!pickedImage &&
        <InitialView selectPhoto={this.selectPhoto}/>
        }
        {(pickedImage && !loading) &&
        <PickedImageView
          pickedImage={pickedImage}
          isHotDog={isHotDog}
          reset={this.resetChecker}
        />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEEF7',
  },
})
