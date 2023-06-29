import React, { useState} from 'react';
import './App.css';
import axios from 'axios';

interface Plant {
  name: string;
  scientificName: string;
}
const defaultPlants: Plant[] = [];

function App() {
  const [plants, setPlants]: [Plant[], (plants: Plant[]) => void] = React.useState(
    defaultPlants
  );

  React.useEffect(() => {
    axios.get<Plant[]>('/plants')
      .then((response) => {
        setPlants(response.data);
      })
  }, []);

  return (
    <div className="App">
      <ul className="posts">
        {plants.map((plant) => (
          <li key={plant.name}>
            <h3>{plant.name}</h3>
            <p>{plant.scientificName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
