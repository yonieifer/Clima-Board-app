import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
    const name = localStorage.getItem("name")
  return (
    <>
        <h1>Hello, {name}!</h1>
        <nav>
            <Link to="/app/search">Search</Link>
            <Link to="/app/favorites">Favorites</Link>
            <Link to="/app/compare">Compare</Link>
        </nav>
    </>
  )
}

export default Dashboard