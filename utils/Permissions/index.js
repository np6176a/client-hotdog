import { Permissions } from 'expo'

export const userCameraRollPermit = async () => {
  const {
    status: cameraPermit
  } = await Permissions.askAsync(Permissions.CAMERA)
  return cameraPermit === 'granted'
}

export const userCameraPermit = async () => {
  const {
    status: cameraRollPermit
  } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  return cameraRollPermit === 'granted'
}
