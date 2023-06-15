import React ,{useEffect, useState}from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"; 
import axios from "axios";
import DetailProducto from "../../components/DetailProducto/DetailProducto";
const DetailPage = () => {

    let {id} = useParams();
    const [producto,setProducto] = useState({});

    useEffect(() => {
        axios
          .get(`https://fakestoreapi.com/products/${id}`)
          .then((response) => {
            setProducto(response.data);
          })
          .catch((error) => {
            console.error("Error al obtener los productos:", error);
          });
      }, [id]);

  return (
    <div className="text-center">
    <h1>DETALLES DEL PRODUCTO</h1>
    <br />
    {producto && <DetailProducto producto={producto}/>}   
    
    </div> 
  );
};

export default DetailPage;
