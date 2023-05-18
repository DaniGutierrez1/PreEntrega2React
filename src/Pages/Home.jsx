import React, {Fragment} from 'react'
import Item from '../Components/Item'

const Home = () => {
  const items =[
    {
        id:"1",
        marca:"Samsung",
        modelo:"LC24RG50",
        descripcion: "lorem ipsum",
        img:"../../public/assets/img/MSC24.png"
    },
    {
        id:"2",
        marca:"Logitech",
        modelo:"G203",
        descripcion:"lorem ipsum",
        img:"../../public/assets/img/LG203L.webp"
    }


  ]
  
    return (
    <Fragment>
        <div>
            {items.map((item)=>(
                <Item key={item.id}{...item}/>
            ))}
        </div>

    </Fragment>
    ) 
}

export default Home