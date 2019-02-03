import { ImagePicker, Permissions } from 'expo'

export const userPermit = async () => {
  const {
    status: cameraRollPermit
  } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  return cameraRollPermit === 'granted'
}
