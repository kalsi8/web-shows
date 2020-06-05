import React from 'react'
import PropTypes from 'prop-types'
import s from './ShowCard.module.scss'

function ShowCard ({ name, imageSrc }) {
  return (
    <div className = {s.cardContainer}>
      <img className = {s.image} src={imageSrc} />
      <div className = {s.name}>{name}</div>
    </div>
  )
}

ShowCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
}

export default ShowCard
