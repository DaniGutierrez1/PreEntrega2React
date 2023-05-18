import React from 'react'
import {useNavigate} from 'react-router-dom'

const Item = (props) => {
    const {id,marca,modelo,descripcion,img}=props
    const navigate = useNavigate()
  
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{marca}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{modelo}</h6>
            <p className="card-text">{descripcion}</p>
            <p className="btn btn-primary" onClick={()=>navigate(`/item/${id}`)}>Detalles</p>
            </div>
      </div>
  )
}

export default Item