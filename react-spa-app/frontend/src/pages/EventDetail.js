import React, { Suspense } from 'react';
import { Await, defer, json, redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';
import { loadEvents } from './Events';


const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");


  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={event}>
          {loadedEvent => <EventItem event={loadedEvent}></EventItem>}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={events}>
          {loadedEvents => <EventsList events={loadedEvents}></EventsList>}
        </Await>
      </Suspense>
    </>
  )
}

export default EventDetailPage

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/events/' + id)

  if (!response.ok) {
    throw json({ message: 'Could not fetch details for selected event.', status: 500 })
  } else {
    // return response;
    const resData = await response.json();
    return resData.event;
  }
}

export async function loader({ request, params }) {
  const id = params.eventId;

  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  })
}

export async function action({ params, request }) {

  const response = await fetch("http://localhost:8080/events/" + params.eventId, { method: request.method });
  if (!response.ok) {
    throw json({ message: 'fail to delete events' }, { status: 500 })
  }

  return redirect("/events")
}