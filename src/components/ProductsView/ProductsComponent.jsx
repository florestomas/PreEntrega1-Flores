import { useState, useEffect } from 'react';
import { getProducts } from '../../firebase/firebase';
import { Link } from 'react-router-dom';

import './ProductsComponent.css'

export default function ProductsComponent({category}) {

  const [myProds, setMyProds] = useState([]);

  useEffect(() => {
    obtenerProductos(category);
  }, [category]);

  async function obtenerProductos(category) {

    let myProductos = await getProducts();

    let filteredProducts = myProductos;

    if(category){
        filteredProducts = myProductos.filter((prod)=> prod.torneo == category);
    }

    setMyProds(filteredProducts);
  }


  return (
    <>
      <div className='product-container'>
        {myProds.map((prod) => (

          <div key={prod.id}  className='container'>
            <h4>{prod.title}</h4>
            <Link to={`/${prod.torneo}/${prod.id}`}>

            <img src= {prod.image} className='image'></img>

            </Link>
          </div>  
        ))}
      </div>
    </>
  );
}

