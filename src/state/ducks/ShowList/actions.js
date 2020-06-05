/* eslint-disable camelcase */
import { getPageNo } from './selectors'
import { getAnimes } from './api'
import { INITIAL_UPDATE, UPDATE_LIST, UPDATE_ERROR } from './types'

export const loadMore = (searchValue) => async (dispatch, getState) => {
  const state = getState()
  const pageNo = getPageNo(state) + 1
  try {
    const { data: { last_page, results } } = await getAnimes(pageNo, searchValue)
    dispatch({ type: UPDATE_LIST, payload: { lastPage: last_page, list: results, pageNo: pageNo } })
  } catch (e) {
    dispatch({ type: UPDATE_ERROR, payload: { error: 'Something went wrong' } })
  }
}

export const fetchInitial = (searchValue) => async (dispatch, getState) => {
  try {
    const { data: { last_page, results } } = await getAnimes(1, searchValue)
    dispatch({ type: INITIAL_UPDATE, payload: { lastPage: last_page, list: results, pageNo: 1 } })
  } catch (e) {
    dispatch({ type: UPDATE_ERROR, payload: { error: 'Something went wrong' } })
  }
}
