import { connect } from 'react-redux'
import SearchHeader from './SearchHeader'
import { getSearchValue } from '../../../../../state/ducks/SearchHeader/selector'
import { setSearchValue } from '../../../../../state/ducks/SearchHeader/actions'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => ({
  searchValue: getSearchValue(state)
})

const mapDispatchToProps = (dispatch) =>
  ({
    setSearchValue: bindActionCreators(setSearchValue, dispatch)
  })

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader)
