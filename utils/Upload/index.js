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
  const opts = {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    }
  }
  return fetch(apiUrl, opts)
}
