import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = (props) => {
  const navigate=useNavigate()
  const{navbar__items}= props
  return (
    <nav className="navbar navbar-expand-lg  bg-light">
    <div className="container-fluid barra">
        <p className="navbar-brand barra-logo "onClick={()=>navigate('/')}>TechGames</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            {
                navbar__items.map(({path,name},index)=>(
                    <li key={index} className="nav-item">
                        <NavLink className={'nav-link'} to={path}>{name}</NavLink>
                    </li>

                ))

            }
            
            
        
        </ul>
        </div>

      
    </div>
</nav>
  )
}

export default Navbar