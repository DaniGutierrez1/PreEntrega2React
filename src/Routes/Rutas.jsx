import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Home from '../Pages/Home'
import ItemDetail from '../Pages/ItemDetail'
import Logo from '../Pages/Logo'
import Monitores from '../Pages/Monitores'

const Rutas = () => {
  const navbar__items= [
    {
        path:"/",
        name:"Home",
    },
    {
      path:"monitores/",
      name:"Monitores",
    },
    {
      path:"perifericos/",
      name:"Perifericos",
    },
    {
      path:"Componentes/",
      name:"Componentes",
    },
    
    
  ]
  
  
    return (
    <BrowserRouter>
        <Navbar navbar__items={navbar__items}/>
        <Routes>
            <Route path='/' element={<Logo/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/item/:id' element={<ItemDetail/>}/>
            <Route path='monitores/' element={<Monitores/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Rutas