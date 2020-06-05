/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ShowCard from '../../components/ShowCard/ShowCard'
import s from './ShowList.module.scss'
import Loader from '../../../../../components/loader/Loader'

function ShowsList ({ showLists, isMore, loadMore, showName, fetchInitial, error }) {
  const [showLoader, setShowLoader] = useState(false)
  useEffect(() => {
    if (showName) {
      setShowLoader(true)
      fetchInitial(showName).then(() => setShowLoader(false))
    }
  }, [showName])
  return (
    <React.Fragment>
      <div className = {s.list}>
        {
          showLists.map(({ mal_id, url, image_url, title }) => <ShowCard onClick = {() => { window.history.location = url }} key={mal_id} name={title} imageSrc = {image_url}/>)
        }
      </div>

      {
        isMore &&
          <div className = {s.loadMore} onClick = {() => { setShowLoader(true); loadMore(showName).then(() => setShowLoader(false)) }}>Load more</div>
      }
      {
        !showLists.length && <div className = {s.loadMore}>{error || 'Search some title'}</div>
      }
      {
        showLoader && <Loader/>// using loacal loader can do it with axios interceptor also
      }
    </React.Fragment>
  )
}

ShowsList.propTypes = {
  showLists: PropTypes.array.isRequired,
  isMore: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired,
  fetchInitial: PropTypes.func.isRequired,
  showName: PropTypes.string.isRequired,
  error: PropTypes.string
}

export default ShowsList
