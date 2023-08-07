import React, {useState, FormEvent} from 'react';
import axios from 'axios';
import './CreatePlantComponent.css';

function CreatePlantComponent() {
    const [plantData, setPlantData] = useState({
        name: '', 
        scientificName: ''
    });

    const handleChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        setPlantData({
            ...plantData,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        axios.post(`/plant/create?name=${plantData.name}&sciName=${plantData.scientificName}`)
          .then((response) => {
            // Handle the response
            console.log(response.data);
          })
          .catch((error) => {
            // Handle the error
            console.error(error);
          });
      };

      return (
        <form className="form-container" onSubmit={handleSubmit}>
          <h3>Add A Plant</h3>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={plantData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            ScientificName:
            <input
              type="text"
              name="scientificName"
              value={plantData.scientificName}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      );
    }

export default CreatePlantComponent;