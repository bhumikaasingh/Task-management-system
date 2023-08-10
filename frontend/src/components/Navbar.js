import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="right">
          <div className="link"><Link to="/">My task management system</Link></div>
        </div>
        <div className="left">
            <div className="button"><Link to="/login">Login</Link></div>
            <div className="button"><Link to = "/signup">Signup</Link></div>
        </div>
      </div>
    </div>
  )
}
