import logo from './logo.svg';
import './App.css';
import ContactList from './ContactList';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png'
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal(){
  const animals = [ 'bird','dog','cow','gator','horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const type = 'number';
  const minValue = 5;
  const maxValue = 12;
  const[numAnimals,setnumAnimals] = useState(0);
  const[animals, setAnimals] = useState([]);

  const handleClick = () =>{
    console.log('Button was clicked!');
    setAnimals([...animals,getRandomAnimal()]);
    setnumAnimals(numAnimals+1);
  };

  const renderedAnimals = animals.map((animal,index) => {
    return <AnimalShow type={animal} key ={index}/>
  });

  return (
    <div className="App">
     <h1> Animal Show</h1>   
     <button onClick={handleClick}>  Add Animal   </button>
     
     <div >  {renderedAnimals}  </div>


    </div>
  );
}

export default App;
