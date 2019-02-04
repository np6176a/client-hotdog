import axios from 'axios'

export const awsImgAnalysis = async (pickedImage) => {
  const upload = await uploadImgAsync(pickedImage.uri)
  return await imgRekognition(upload.data)
}
const API_URL_UPLOAD = 'https://server-hotdog-rjnoop5zl.now.sh/upload'
const API_URL_REKOGNITION = 'https://server-hotdog-rjnoop5zl.now.sh/rekognition'

//the post to AWS S3
export const uploadImgAsync = (uri) => {
  const uriParts = uri.split('.')
  const fileType = uriParts[uriParts.length-1]

  let formData= new FormData()
  formData.append('photo', {
    uri,
    name:`photo.${fileType}`,
    type: `image/${fileType}`
  })
  return axios.post(API_URL_UPLOAD, formData, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    }
  })
}


//the post to AWS Rekognition
export const imgRekognition = imgData => axios.post(API_URL_REKOGNITION, imgData)
