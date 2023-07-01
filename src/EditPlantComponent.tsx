import React, {useState, FormEvent} from 'react';
import axios from 'axios';

function EditPlantComponent() {
    const [plantData, setPlantData] = useState<UpdatedPlantRequest>({
        plantName: '',
        updatedPlant: { 
          name: '',
          scientificName: ''
        }
  
    });

    interface Plant {
      name: string;
      scientificName: string;
    }
    
    interface UpdatedPlantRequest {
      plantName: string;
      updatedPlant: Plant;
    }

    const handlePlantName = (event:  React.ChangeEvent<HTMLInputElement>) => {
      setPlantData({
          ...plantData,
          plantName: event.target.value,
      });
    }

    const handleNameChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        setPlantData({
            ...plantData,
            updatedPlant: {
              ...plantData.updatedPlant,
              name: event.target.value,
            },
        });
    }

    const handleScientificChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
      setPlantData({
          ...plantData,
          updatedPlant: {
            ...plantData.updatedPlant,
            scientificName: event.target.value,
          },
      });
  }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        axios.put(`/plant/edit`, plantData)
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
      <div>
        <h3>Updating</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Old Name:
            <input
            type="text"
            name="name"
            value={plantData.plantName}
            onChange={handlePlantName}
          />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={plantData.updatedPlant.name}
              onChange={handleNameChange}
            />
          </label>
          <label>
            ScientificName:
            <input
              type="text"
              name="scientificName"
              value={plantData.updatedPlant.scientificName}
              onChange={handleScientificChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        </div>
      );
}

export default EditPlantComponent;