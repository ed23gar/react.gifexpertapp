import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import {GifgrIdItem} from "./GifgrIdItem";



export const GifGrid = ({category}) =>{

 const {data:images, loading} = useFetchGifs(category);

    return (
        <>
        <h3>{category}</h3>

            {loading && <p>Cargando...</p>}

            <div className="card-grid">
          { 
            images.map(img =>(
            <GifgrIdItem key={img.id} {...img} />
                 )) }
            </div> 
        </>
    );
}