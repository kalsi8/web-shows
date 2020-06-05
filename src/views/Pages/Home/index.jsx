import React from 'react'
import SearchHeader from './containers/SearchHeader'
import { useParams } from 'react-router'
import ShowsList from './containers/ShowsList'
import s from './Home.module.scss'
function Home () {
  const { showName } = useParams()
  return (
    <div className = {s.container}>
      <div className = {s.header}>
        <SearchHeader showName = {showName || ''} />
      </div>
      <div className = {s.page}>
        <ShowsList showName = {showName || ''} />
      </div>
    </div>
  )
}

export default Home
