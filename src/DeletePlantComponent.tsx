import React, {useState, FormEvent} from 'react';
import axios from 'axios';

function DeletePlantComponent() {
    const [request, setRequest] = useState({
        id: ''
    });

    const handleChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
      setRequest({
        ...request,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        axios.delete(`/plant/delete?id=${request.id}`)
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
            <h3>Delete</h3>
            <form onSubmit={handleSubmit}>
            <label>
                Id:
                <input
                type="number"
                name="id"
                value={request.id}
                onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
            </form>
        </div>
      );
}

export default DeletePlantComponent;