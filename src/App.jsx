import { useState } from 'react';
import './App.css';
// Components
import NavBarComponent from './components/NavBarComponent/NavBar';
import ItemListContainer from './components/ItemListContainerComponent/ItemListContainer';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return  (
    <div>
      <div>
        <NavBarComponent/>
      </div>

      <div>
        <main>
          <ItemListContainer greeting="Bienvenidos al mundo de Gin Rada"/>
        </main>
      </div>

      <footer><h4>Todos los derechos reservados</h4></footer>
    
    </div>
  )
  
}

export default App
