const BASE_URL = 'https://pixabay.com/api/';
const ApiKey = '23292675-06f406722274daa99671b1028';

export const getImages = (pictureTag, page) => {
  return fetch(
    `${BASE_URL}?q=${pictureTag}&page=${page}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`,
  )
    .then(res => res.json())
    .then(data => data.hits);
};
