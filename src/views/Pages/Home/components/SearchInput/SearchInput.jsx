import React, { useState } from 'react'
import s from './SearchInput.module.scss'
import PropTypes from 'prop-types'

export default function SearchInput ({
  initialValue,
  onChange,
  onClick
}) {
  const [searchValue, setSearchValue] = useState(initialValue)

  return (
    <div className = {s.searchContainer}>
      <input
        className = {s.searchInput}
        value = {searchValue}
        placeholder= {'Enter a search value'}
        onChange = {(e) => { setSearchValue(e.target.value); onChange(e.target.value) }} />
      <div
        onClick = {() => onClick(searchValue)}
        className = {s.searchButton}>
        Go
      </div>
    </div>
  )
}

SearchInput.defaultProps = {
  initialValue: '',
  onChange: () => {},
  onClick: () => {}

}

SearchInput.propTypes = {
  initialValue: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func
}
