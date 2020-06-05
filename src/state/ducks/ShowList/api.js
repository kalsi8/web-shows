import axiosInstance from '../../../utils/axiosInstance'
import { GET_ANIMES } from './urls'

function getAnimes (page, name, limit = 16) {
  return axiosInstance.get(GET_ANIMES, {
    params: { page, q: name, limit }
  })
}

export {
  getAnimes
}
