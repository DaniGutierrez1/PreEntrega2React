import React, {Fragment,useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom';

const ItemDetail = () => {
  const navigate=useNavigate();
  const {id} =useParams();
  
  const [item, setItem]=useState({});
  const [loading, setLoading] = useState(true);

  const items=[
    {
        id:'1',
        marca: "Samsung",
        modelo:"LC24RG50",
        descripcion:"FSDFASDASD",
    },
    {
        id:'2',
        marca: "Logitech",
        modelo:"G203",
        descripcion:"FSDFASDASD",
    },
  ]
  
  useEffect(()=>{
    setTimeout(() => {
      const filter = items.find((item) => item.id === id);
      setItem(filter)
      setLoading(false)
    }, 2000);



  }, []);


    return (
        <Fragment>
          {loading && <h1>Cargando..</h1>}
          {item && !loading && (
            <div className="card" style={{width: '18rem'}}>
                <img src={item.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{item.marca}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{item.modelo}</h6>
                <p className="card-text">{item.descripcion}</p>
                <p>Su id es{item.id}</p>
              <div className='btn btn-primary' onClick={()=>navigate(-1)}>
                  Volver atras

              </div>
            </div>

              
                
              </div>

          )}
        </Fragment>
  );
};

export default ItemDetail