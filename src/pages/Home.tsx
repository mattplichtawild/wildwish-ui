import React from 'react'
import Landing from '../components/Landing'
import AnimalSelectTabs from '../components/AnimalSelectTabs'


// Render Landing only if there is no current session and unmount as soon as it is no longer in view
// How to do that?

export default function Home() {

    return (
        <>
        <Landing />
        <AnimalSelectTabs />
        </>
    )
}