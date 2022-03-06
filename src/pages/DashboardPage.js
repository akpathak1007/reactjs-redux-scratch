import React from 'react'
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Everything is in one place</p>
      <Link to="/posts" className='button'>
        View Posts
      </Link>
    </div>
  )
}

export default DashboardPage;