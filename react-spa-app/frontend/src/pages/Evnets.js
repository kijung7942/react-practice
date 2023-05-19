import React from 'react'
import EventsList from '../components/EventsList'

const DUMMY_EVENT = [
    {id: 1, image:'', title: 'first-event', date: '2023-03-19',},
    {id: 2, image:'', title: 'second-event', date: '2023-04-19',},
    {id: 3, image:'', title: 'third-event', date: '2023-05-19',},
]

const EvnetsPage = () => {
  return (
    <>
        <EventsList events={DUMMY_EVENT}></EventsList>
    </>
  )
}

export default EvnetsPage