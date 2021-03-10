import React , { useState}  from 'react'

import axios from 'axios';

const Pokemon = () =>{

const [pokemons,setPokemon]= useState("");
const [imagen,setImagen]= useState();
const [habilidades,setHabilidades]=useState([]);
const [numero,setNumero]=useState();
const [texto,setTexto]=useState("");
const [modo,setModo]=useState(true);

const cambiarModoRandom=()=>{
    {
        modo ? setModo(false) : setModo(false)
        console.log(modo)
    }
}

const cambiarModo=()=>{
    {
        modo ? setModo(true) : setModo(true)
        console.log(modo)
    }
}

const obtenerPokemon=async(e)=> {
     const apii = await axios .get(`https://pokeapi.co/api/v2/pokemon/${numero}`);
    
    const usarApi= await apii.data;
    e.preventDefault();  // Para que no se reinicie la pagina al apretar boton
    setPokemon(usarApi.name); // Obtengo el nombre del pokemon en variable pokemon
   
    setImagen(usarApi.sprites.back_default); //obtengos imagen del pokemon
    console.log(apii)   //veo los datos por consola
    console.log(usarApi.abilities);
    setHabilidades(usarApi.abilities); //obtengo las habilidades del pokemon , es un array
    setTexto("Habilidades :");  //seteo texto para que aparezca solo si hay un pokemon en pantalla

    /*e.target.classList.remove('habilidades');
    setTimeout(() => e.target.classList.add('habilidades'), 2000) */   
}
 

const obtenerPokemonRandom=async(e)=> {
    const Random = Math.random()*800;
   const numeroRandom = Math.round(Random);
    const apii = await axios .get(`https://pokeapi.co/api/v2/pokemon/${numeroRandom}`);
   const usarApi= await apii.data;
   e.preventDefault();  // Para que no se reinicie la pagina al apretar boton
   setPokemon(usarApi.name); // Obtengo el nombre del pokemon en variable pokemon
   setImagen(usarApi.sprites.back_default); //obtengos imagen del pokemon
   setHabilidades(usarApi.abilities); //obtengo las habilidades del pokemon , es un array
   setTexto("Habilidades :");  //seteo texto para que aparezca solo si hay un pokemon en pantalla
}

   





return(

    <div>

        <div className="columna"> 
            <input className="btnNumero" type="submit" value= "Por numero" onClick={cambiarModo}  /> 
            <input  className="btnRandom1" type="submit"  value="Random" onClick={cambiarModoRandom} />
            
            </div>
            <div className="tituloRandom"> { modo? "" : <p> Random </p>  } </div>
         {modo?
         <input className="btnBuscar" type="submit" onClick= {obtenerPokemon}  value="" /> :
         <input className="btnRandom" type="submit" onClick= {obtenerPokemonRandom}  value="" /> }


        { modo?    
        <input className="inputPokemon" type="text" placeholder="ingrese un numero"
        onChange= { (e)=>{  setNumero(e.target.value);  } } /> :
       <div></div>}
        
        <div className="contenedorPokemon">
                <h1 className="textoPokemon"> {pokemons} </h1>
                <img src={imagen} className="imagen"/>
               
                <h2 className="textoHabilidades"> {texto} </h2>
              {
                  habilidades.map(item =>

                     <div className="contenedorHabilidades">
                            <p className="habilidades" key= {item.slot} > {item.ability.name} </p>
                     </div>
                  )

              }
            
        </div>
         
</div>


);


}


export default Pokemon;