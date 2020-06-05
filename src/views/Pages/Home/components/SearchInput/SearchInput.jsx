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
    <form className = {s.searchContainer} onSubmit = {(e) => { e.preventDefault(); onClick(searchValue) }}>
      <input
        className = {s.searchInput}
        value = {searchValue}
        placeholder= {'Enter a search value'}
        onChange = {(e) => { setSearchValue(e.target.value); onChange(e.target.value) }} />
      <button
        type="submit"
        className = {s.searchButton}>
        Go
      </button>
    </form>
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
