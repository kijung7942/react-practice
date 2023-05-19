import React from 'react'
import { Outlet } from 'react-router-dom'
import EventsNavigation from '../components/EventsNavigation'
import MainNavigation from '../components/MainNavigation'

const EventsRootLayout = () => {
  return (
    <>
    <EventsNavigation></EventsNavigation>
    <Outlet></Outlet>
    </>
  )
}

export default EventsRootLayout