import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import SearchInput from '../../components/SearchInput/SearchInput'
import { useHistory } from 'react-router-dom'

function SearchHeader ({ searchValue, setSearchValue, showName }) {
  const history = useHistory()
  useEffect(() => {
    history.push(searchValue)
  }, [searchValue])
  return (
    <SearchInput initialValue = {showName} onClick = {setSearchValue} />
  )
}

SearchHeader.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  showName: PropTypes.string.isRequired
}

export default SearchHeader
