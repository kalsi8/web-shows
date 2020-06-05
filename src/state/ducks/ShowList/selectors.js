import { get } from 'lodash'

export const getPageNo = state => get(state, 'showList.pageNo', 0)
export const getIsMore = state => get(state, 'showList.pageNo', 0) < get(state, 'showList.lastPage', 0)
export const getList = state => get(state, 'showList.list', [])
export const getError = state => get(state, 'showList.error', '')
