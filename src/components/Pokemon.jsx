import React , { useState,useEffect}  from 'react';
import axios from 'axios';

const Pokemon = () =>{

const [pokemons,setPokemon]= useState("");
const [imagen,setImagen]= useState();

const obtenerPokemon=async()=> {
    const apii = await axios .get('https://pokeapi.co/api/v2/pokemon/24');
    const usarApi= await apii.data;
    console.log(apii);


    setPokemon(usarApi.name);
   
    setImagen(usarApi.sprites.back_default);
    console.log(usarApi.sprites.back_default);
}

    
    useEffect( () => {
    obtenerPokemon()
},[]);


return(
        <div>
                <h1 className="textoPokemon"> {pokemons} </h1>
                <img src={imagen} class="imagen"/>
        </div>


);


}


export default Pokemon;