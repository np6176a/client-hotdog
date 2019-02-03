import React from 'react'
import { StyleSheet, View } from 'react-native'
import { userPermit } from './utils/Permissions'
import { uploadImgAsync } from './utils/AmazonServices'
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
    const imgResult = await userPermit()
    return await this.handleImgResult(imgResult)
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
