import { UPDATE_LIST, INITIAL_UPDATE, UPDATE_ERROR } from './types'

const initialState = {

}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INITIAL_UPDATE:
      return { ...state, ...payload, error: !payload.list.length ? 'Nothing found search something else' : '' }
    case UPDATE_LIST:
      return { ...state, ...payload, list: [...state.list, ...payload.list], error: '' }
    case UPDATE_ERROR:
      return { ...state }
    default:
      return state
  }
}
