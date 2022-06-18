import React from 'react'
import { Link } from 'react-router-dom'

function Header () {

  return (
    <div className="headerCont">
      <div className="headerHomeLinkCont">
        <Link to="/" className="headerHomeLink">
          Home
        </Link>
      </div>
      <div className="headerLinkCont">
        <Link to="/blogs" className="headerLink">
          Blogs
        </Link>
      </div>
      <div className="headerLinkCont">
        <Link to="/videos" className="headerLink">
          Videos
        </Link>
      </div>
      <div className="headerLinkCont">
        <Link to="/pictures" className="headerLink">
          Pictures
        </Link>
      </div>
      <div className="cb"></div>
    </div>
  )

}

export default Header