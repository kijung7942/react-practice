import { Await, defer, json, useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  )
}

export default EventsPage;

export async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.'}
    // throw new Response(JSON.stringify({ message: 'Could not fetch events' }), { status: 500 })
    throw json({ message: 'Could not fetch events' }, { status: 500 })
  } else {
    const resData = await response.json(); // defer를 사용하면 직접 파싱을 해야함.
    return resData.events;
    // return response;
  }
}

export async function loader() {
  return defer({
    events: loadEvents()
  })
}