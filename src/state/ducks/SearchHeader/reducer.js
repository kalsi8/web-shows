import { SET_SEARCH_VALUE } from './types'

const initialState = {

}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH_VALUE:
      return { ...state, ...payload }

    default:
      return state
  }
}
