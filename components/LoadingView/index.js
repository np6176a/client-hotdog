import React, {PureComponent} from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import styles from './styles'


class LoadingView extends PureComponent{
  render () {
    return(
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={styles.title}>Checking For Hot Dog</Text>
      </View>
    )
  }
}

export default LoadingView
