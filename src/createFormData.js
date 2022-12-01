import mime from 'mime';
export default createFormData = (photo, body = {}) => {
  const data = new FormData();
  const newImageUri =
    'file:///' + photo?.assets[0].uri.split('file:/').join('');
  data.append('photo', {
    uri: newImageUri,
    type: mime.getType(newImageUri),
    name: newImageUri.split('/').pop(),
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};
