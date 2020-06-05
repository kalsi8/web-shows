import { SET_SEARCH_VALUE } from './types'

export const setSearchValue = (searchValue) => ({
  type: SET_SEARCH_VALUE,
  payload: { searchValue }
})
