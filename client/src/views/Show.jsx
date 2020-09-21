import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';

const Show = props => {
    const initialPet = {
        name:"",
        type:"",
        description:"",
        skillOne:"",
        skillTwo:"",
        skillThree:""
    }
    const [pet,setPet] = useState(initialPet);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pet/${props.id}`)
            .then(res => setPet(res.data.results))
            .catch(err => console.log(err));
    },[props])
    

    const adoptPet = () => {
        Axios.delete(`http://localhost:8000/api/destroy/pet/${props.id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err));
    }
    
    return (
        <div className="col-5 m-0 p-0 bg-primary mx-auto">
            <h2 className="text-warning p-3">This {pet.type} is named {pet.name}.</h2>
            <p className="text-warning">{pet.description}.</p>
            <p className="text-warning">Skill One: {pet.skillOne}</p>
            <p className="text-warning">Skill Two: {pet.skillTwo}</p>
            <p className="text-warning">Skill Three: {pet.skillThree}</p>
            <button className="btn-lg btn-success text-warning font-weight-bolder btn-outline-info btn m-5 p-5" onClick={adoptPet}>Adopt</button>
        </div>
    );
}

export default Show;