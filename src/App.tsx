import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CreatePlantComponent from './CreatePlantComponent';
import EditPlantComponent from './EditPlantComponent';
import DeletePlantComponent from './DeletePlantComponent';

interface Plant {
  id: number;
  name: string;
  scientificName: string;
}
const defaultPlants: Plant[] = [];

function App() {
  const [plants, setPlants]: [Plant[], (plants: Plant[]) => void] = useState(
    defaultPlants
  );

  useEffect(() => {
    axios.get<Plant[]>('/plants')
      .then((response) => {
        setPlants(response.data);
      })
  }, []);

  return (
    <div className="background">
      <div className="container">
        <CreatePlantComponent />
        <DeletePlantComponent/>
        <EditPlantComponent />
      </div>
      <div className="App">
        <div className="card-container">
          {plants.map((plant) => (
            <div key={plant.name} className="card">
              <h3 className="card-title">{plant.id}. {plant.name}</h3>
              <p className="card-text">{plant.scientificName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
