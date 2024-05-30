import axios from "axios"

export async function getDogBreeds() {
  const response = await axios.get("https://dog.ceo/api/breeds/list/all")

  return Object.keys(response.data.message)
}
