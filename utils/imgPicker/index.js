import { ImagePicker } from 'expo'

const IMAGE_PICKER_OPTIONS = {
  allowsEditing: true,
  aspect: [4, 3]
}

export const imgCameraPicker = async () => await ImagePicker.launchCameraAsync(IMAGE_PICKER_OPTIONS)
export const imgLibPicker = async () => await ImagePicker.launchImageLibraryAsync(IMAGE_PICKER_OPTIONS)
