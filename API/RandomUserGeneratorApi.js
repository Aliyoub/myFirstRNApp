export function getItemsFromApiWithSearchedText(text) {
  const url = 'https://randomuser.me/api/?nat=fr&results=20&city=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getItemDetailsFromApi(id){
  //return (id)
}