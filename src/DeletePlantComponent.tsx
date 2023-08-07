import React, {useState, FormEvent} from 'react';
import axios from 'axios';

function DeletePlantComponent() {
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
        
        axios.delete(`/plant/delete?name=${plantData.name}`)
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
            <h3>Delete</h3>
            <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                type="text"
                name="name"
                value={plantData.name}
                onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
            </form>
        </div>
      );
}

export default DeletePlantComponent;