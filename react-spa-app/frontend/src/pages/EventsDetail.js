import React from 'react'
import { useParams } from 'react-router-dom'

const EventsDetailPage = () => {
    const params = useParams();
  return (
    <>
        <div>EventsDetailPage</div>
        <h1> Events {params.eventId}</h1>
    </>
  )
}

export default EventsDetailPage