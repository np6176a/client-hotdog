import { ImagePicker, Permissions } from 'expo'

export const userPermit = async () => {
  const {
    status: cameraRollPermit
  } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  if (cameraRollPermit === 'granted') {
    return await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    })
  }
}
