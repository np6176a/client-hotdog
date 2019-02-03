import axios from 'axios'

//the post to AWS S3
export const uploadImgAsync = (uri) => {
  const apiUrl = 'http://localhost:3000/upload'
  const uriParts = uri.split('.')
  const fileType = uriParts[uriParts.length-1]

  let formData= new FormData()
  formData.append('photo', {
    uri,
    name:`photo.${fileType}`,
    type: `image/${fileType}`
  })
  return axios.post(apiUrl, formData, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    }
  })
}


//the post to AWS Rekognition
export const imgRekognition = (imgData) => {
  const apiUrl = 'http://localhost:3000/rekognition'
  axios.post(apiUrl, imgData)
}
