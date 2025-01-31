import { useState, useEffect } from 'react';
import './App.css';
import imgRickMorty from './img/rick-morty.png'
import Characteres from './components/Characteres';
import axios from 'axios';


function App() {
  const [characteres, setCharacteres] = useState(null);
  const reqApi = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      setCharacteres(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    reqApi();
  }, []);

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
