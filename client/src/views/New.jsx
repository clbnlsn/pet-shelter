import React,{useState} from 'react';
import Axios from 'axios';
import {navigate} from '@reach/router';
import PetForm from '../components/PetForm';

const New = props => {
    const initialPet = {
        name:"",
        type:"",
        description:"",
        skillOne:"",
        skillTwo:"",
        skillThree:""
    }
    const initialErrors = {
        name:"",
        type:"",
        description:""
    }
    const [pet,setPet] = useState(initialPet);
    const [errors,setErrors] = useState(initialErrors);

    const handleInputChange = (e) => {
        setPet({
            ...pet,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        setErrors(initialErrors);
        e.preventDefault();
        Axios.post(`http://localhost:8000/api/create/pet`,pet)
            .then(res => {
                if(res.data.results){
                    navigate('/');
                }
                else{
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="col-5 p-3 mx-auto bg-primary text-warning m-0">
            <h3 className="col-5 p-3 mx-auto bg-primary text-warning font-weight-bold font-italic m-0">Send 'em packing! Put 'em up for adoption!</h3>
            <PetForm 
                inputs={pet}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Put 'em up for adoption!"
            />
        </div>
    );
}

export default New;