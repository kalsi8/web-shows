import { connect } from 'react-redux'
import ShowsList from './ShowsList'
import { loadMore, fetchInitial } from '../../../../../state/ducks/ShowList/actions'
import { getList, getIsMore, getError } from '../../../../../state/ducks/ShowList/selectors'

const mapStateToProps = (state) => ({
  showLists: getList(state),
  isMore: getIsMore(state),
  error: getError(state)
})

const mapDispatchToProps = {
  loadMore: loadMore,
  fetchInitial: fetchInitial
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowsList)
