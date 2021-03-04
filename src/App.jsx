
import './App.css';
import './Style.css';
import ListadoNombres from  './components/ListadoNombres';
import Clima from './components/Clima';
import Pokemon from './components/Pokemon';
import {
 BrowserRouter as Router,
 Switch,
 Route,
 
} from 'react-router-dom'





function App() {
  return (
    <div className="App-header">
      
      <Router>

        
      <ul className="nav">
       <li><a href="/inicio">Inicio</a></li>
       <li><a href="/clima">Clima</a></li>
       <li><a href="/pokemon">Pokemon</a></li>
       <li><a className="navder" href="/">Salir</a></li>
      </ul>
        <Switch>

          <Route exact path="/"> 

              <b><h1 className="h1-bienvenida">
                 Hola , bienvenido.. D:
              </h1>  </b>
             
              inscripcion inscripcion inscripcion inscripcion

           </Route>
        </Switch>
        
        <Switch>
          <Route exact path="/inicio">     
            
              <ListadoNombres></ListadoNombres>
      
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/clima">     
            
             <Clima></Clima>
      
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/pokemon">     
            
              <Pokemon></Pokemon>
      
          </Route>
        </Switch>



      </Router>
    </div>
  );
}

export default App;
