import { ImagePicker } from 'expo'

export const imgCameraPicker = async () => {
  return await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [4, 3]
  })
}
export const imgLibPicker = async () => {
  return await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [4, 3]
  })
}
