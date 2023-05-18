import React from 'react'
import Item from '../Components/Item'

const Monitores = () => {
    const items=[
        {
            id:"1",
            marca:"Samsung",
            modelo:"LF22T350FHL",
            img:"/../../public/assets/img/MS22.png",

        },
        {
            id:"2",
            marca:"Samsung",
            modelo:"LF24T350FHL",
            img:"/../../public/assets/img/MS24.png"

        },
        {
            id:"3",
            marca:"Samsung",
            modelo:"LC24RG50",
            img:"/../../public/assets/img/MSC24.png",

        },
        {
            id:"4",
            marca:"MSI",
            modelo:"G271C",
            img:"/../../public/assets/img/MSI27C.png",

        },
        
        
    ]
  return (
    <div>
        {items.map((item)=>(
            <Item key={item.id}{...item}/>
        ))}
    </div>
  )
}

export default Monitores