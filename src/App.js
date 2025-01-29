import { useState } from 'react';
import './App.css';
import imgRickMorty from './img/rick-morty.png'
import Characteres from './components/Characteres';


function App() {
  const [characteres, setCharacteres] = useState(null);
  const reqApi = async ()=>{
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();
    setCharacteres(characterApi.results);
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1 className='title'>Rick & Morty</h1>
       {characteres ? (
        <Characteres characteres = {characteres} setCharacteres = {setCharacteres} /> 
        ): (
          <>
        {imgRickMorty ? (
            <img src={imgRickMorty} alt="Rick & Morty" className="img-home" />
          ) : (
            <p>No se pudo cargar la imagen</p>
          )}
          <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
