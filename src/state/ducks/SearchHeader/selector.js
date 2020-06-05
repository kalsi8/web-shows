import { get } from 'lodash'

export const getSearchValue = state => get(state, 'searchHeader.searchValue', '')
