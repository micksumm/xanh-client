import React, {useState, FormEvent} from 'react';
import axios from 'axios';

function EditPlantComponent() {
    const [plantData, setPlantData] = useState<UpdatedPlantRequest>({
        id: 0,
        updatedPlant: { 
          id: 0,
          name: '',
          scientificName: ''
        }
    });

    interface Plant {
      id: number;
      name: string;
      scientificName: string;
    }
    
    interface UpdatedPlantRequest {
      id: number;
      updatedPlant: Plant;
    }

    const handlePlantName = (event:  React.ChangeEvent<HTMLInputElement>) => {
      setPlantData({
          ...plantData,
          updatedPlant: {
            ...plantData.updatedPlant,
            id: parseInt(event.target.value, 10)
          },
          id: parseInt(event.target.value, 10),
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
        <div className="form-container">
          <h3>Update</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Id:
              <input
                type="number"
                name="id"
                value={plantData.id}
                onChange={handlePlantName}
              />
            </label>
            <label>
              New Name:
              <input
                type="text"
                name="name"
                value={plantData.updatedPlant.name}
                onChange={handleNameChange}
              />
            </label>
            <label>
              New ScientificName:
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