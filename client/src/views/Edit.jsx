import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import PetForm from '../components/PetForm';
import {navigate} from '@reach/router';

const Edit = props => {
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
    const [edit,setEdit] = useState(initialPet);
    const [errors,setErrors] = useState(initialErrors);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pet/${props.id}`)
            .then(res => setEdit(res.data.results))
            .catch(err => console.log(err))
    },[props])

    const handleInputChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        setErrors(initialErrors);
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/update/pet/${props.id}`,edit)
            .then(res => {
                if(res.data.results){
                    navigate(`/pet/${props.id}`);
                }
                else{
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="col-5 bg-primary text-warning p-3 m-0 mx-auto">
            <PetForm 
                inputs={edit}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Submit Edits"
            />
        </div>
    );
}

export default Edit;