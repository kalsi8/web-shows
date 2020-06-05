import Axios from 'axios'

function getAxiosInstance () {
  return Axios.create({
    baseURL: 'https://api.jikan.moe/v3'
  })
}

export default getAxiosInstance()
