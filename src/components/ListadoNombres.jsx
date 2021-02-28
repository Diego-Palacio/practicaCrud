import React , {useState}from 'react';
import uniqid from 'uniqid'


const ListadoNombres=() =>{

const [nombre, setNombre]= useState("");

const [lista,listaNombres]=useState([]);

const [edicion,setEdicion]=useState(false);

const [id,setId]=useState("");

const [error ,setError]= useState(null);


const agregarNombre =(e) =>{
       e.preventDefault();
       setEdicion(false);

       if(!nombre.trim()){ 
         setError( <b> !Campo vacio! </b> )
    }
    else{
        const nuevoNombre={
            id:uniqid(),
            nomb: nombre
        }
       listaNombres([...lista,nuevoNombre]);
       setNombre("");
       setError(null);
       }
      
}
const borrarNombre= (id) =>{
        const nuevoArreglo = lista.filter(item=> item.id!==id);
        listaNombres(nuevoArreglo);

}

const editar=(item)=>{
    setEdicion(true);
    setNombre(item.nomb);
    setId(item.id);
    setError(null);

}
const editarNombre=(e)=>{
    e.preventDefault();
    const otroArreglo = lista.map ( item => item.id===id ? {id:id , nomb:nombre} : item);

    listaNombres(otroArreglo);
    setEdicion(false);
    setNombre("");
    setError(null);
}
return (
<div>
    <div className="row">
        
            <div className="col " style={{background: "rgb(83, 0, 0)" , padding: "50px", marginTop :"60px" }}><h1>Listado de nombres:</h1>
            <ul className="list-group">
                    {
                        lista.map ( item =>
                            <li  style ={{color:"black"}} key= {item.id} className="list-group-item"> {item.nomb}  
                            <button className="btn btn-danger float-right"
                             onClick={() => {borrarNombre(item.id)}}> Borrar </button>
                            

                             <button className="btn btn-info float-right"
                             onClick={() => {editar(item)}}> editar </button>
                           </li>
                            )
                    }     
            </ul>
                
            </div>

            <div className="col">
                <h1 style={{ marginTop:"60px"}}>Formulario para agregar a lista:</h1>
                <form className="form-group" onSubmit= { edicion ? editarNombre :agregarNombre } >
                     <input   value ={nombre}  onChange={ (e) => {setNombre(e.target.value);}} className="form-control mb-3 "  type="text" placeholder="Ingrese su nombre"/>
                     <input   className="btn btn-info btn-block" type="submit" value= { !edicion ? "Ingresar persona al sistema" : "Editar nombre" }   />
                </form>
               { 
                error!=null ?
                   ( <div className="btn btn-danger btn-block">
                     {error}
                     </div>)
                     :
                    ( <div> </div> )        
                }
                


            </div> 
    </div>
</div>
);


}



export default ListadoNombres;