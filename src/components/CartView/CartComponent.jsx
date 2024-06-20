import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { getProducts } from '../../firebase/firebase';
import { ProductContext } from '../../context/ProductsContext';

import './CartComponent.css'

export default function Cart() {

    const [products, setProducts] = useContext(ProductContext);


    function eliminarProd(prodId) {
        setProducts(products.filter((prod) => {
            return prod.id !== prodId;
        }));
    };


    // Función para vaciar el carrito
    function vaciarCarrito() {
        setProducts([]);
    }

    return (
        <>
            <h2 style={{ margin: "10px" }}>Tus eTickets </h2>
            <div className="list">

                {products.map((prod) => (

                    <div key={prod.id} className="list-group">
                        <div className="list-group-item d-flex justify-content-between" >
                            <img src={prod.image} style={{ width: "150px", height: "80px" }}></img>
                            <h4 className="text-white">{prod.title}</h4>
                            <h5 className="text-white">Cantidad:{ }</h5>
                            <h6 className="text-white">c/u ${prod.price}</h6>
                            <h6 className="text-white"> ${prod.price * 5}</h6>
                            <button className="btn btn-danger" onClick={() => eliminarProd(prod.id)}> Eliminar</button>

                        </div>

                    </div>
                ))}

                <div className="buttons">

                    <h4>Total de la compra: { }</h4>

                    <Link to="/checkout">
                        <button className="button-warning"> Continuar con mi compra </button>
                    </Link>

                    <button className="button-danger" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>

                </div>

            </div>

        </>
    )
}
