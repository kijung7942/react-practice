import React from 'react'
import { Outlet } from 'react-router-dom'
import EventsNavigation from '../components/EventsNavigation'
import MainNavigation from '../components/MainNavigation'

const EventRootLayout = () => {
  return (
    <>
    <MainNavigation></MainNavigation>
    <EventsNavigation></EventsNavigation>
    <Outlet></Outlet>
    </>
  )
}

export default EventRootLayout