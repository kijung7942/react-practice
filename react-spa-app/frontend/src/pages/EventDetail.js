import React from 'react'
import { useParams } from 'react-router-dom'

const EventDetailPage = () => {
    const params = useParams();
  return (
    <>
        <div>EventsDetailPage</div>
        <h1> Events {params.eventId}</h1>
    </>
  )
}

export default EventDetailPage