import React , { useState,useEffect}  from 'react';
import axios from 'axios';

const Clima = () =>{

    const [temperatura,setTemperatura]= useState();
    const [temperaturaf,setTemperaturaf]=useState(); 
    
    const obtenerTemperatura= async()=>{
       // const resp= await axios.get('https://pokeapi.co/api/v2/pokemon/6');
      // const resp= await axios.get('https://jsonplaceholder.typicode.com/users');
       const resp = await axios .get ('http://api.weatherunlocked.com/api/current/ar.B1665?app_id=9665fa7e&app_key=d79e722fcb961e7a22c2ba89af9b2135')
        const respuesta= await resp.data ;
       console.log(resp.data)

        setTemperatura(respuesta.temp_c)
        setTemperaturaf(respuesta.wx_icon)
     
    }
    
   useEffect( () => {
        obtenerTemperatura()
    },[])
 

    return (

        <div className="contenedor-temperatura">
            
            <h1 className="texto-tempBsAs"> Temperatura en Buenos aires </h1>
            <h2 className="temperatura" >{temperatura}º </h2>
           
        </div>
    );

}

export default Clima;