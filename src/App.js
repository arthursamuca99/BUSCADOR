import {useState} from'react';
import { FiSearch } from'react-icons/fi';
import './styles.css';

import api from './services/api'
function App() {

  const[input, setinput] = useState('');
  const[CEP, setCep] = useState('');



  
  async function handleSearch(){
 //01001000/json/

    if(input === ''){
      alert("Preenche algum CEP!")
      return;
    }
    try{
     
     const response = await api.get('${input}/json');
     setCep(response.data)
     setinput("");


    }
    catch{
      alert("Ops erro ao buscar");
      setinput("")


    }
  }


  return (
    <div className="Container">
   <h1 className="title">Buscador de CEP</h1>

   <div className="Containerinput">
    <input 
    type="text"
    placeholder="Digite seu CEP..."
    value={input}
    onChange={(e) => setinput(e.target.value)}
    />
    <button className="ButtonSearch" onClick={handleSearch}>
      <FiSearch size={25} color="#FFF"/>
    </button>
  </div>
     
     {Object.keys(CEP).length > 0 && (
        <main className='main'>
          <h2>CEP: {CEP.CEP}</h2>
        
          <span>{CEP.logradouro}</span>
          <span>{CEP.complemento}</span>
          <span>{CEP.bairro}</span>
          <span>{CEP.localidade} - {CEP.uf}</span>
        </main>
     )}
     
 

    </div>
  );
}

export default App;
