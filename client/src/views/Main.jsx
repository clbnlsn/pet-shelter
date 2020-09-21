import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Main = props => {
    const [pets,setPets] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/pets")
            .then(res => setPets(res.data.results))
            .catch(err => console.log(err));
    },[])
    return (
        <div className="card-columns">
        {
            pets.map((p,i) => {
                return(
                    <div key={i} className="card p-4 m-4 bg-primary text-warning font-weight-bold">
                        <div className="card-body">
                            This {p.type} is named {p.name}. {p.description}. First skill-- {p.skillOne}; Second skill-- {p.skillTwo}; Third skill-- {p.skillThree}. 
                            <div>
                                <Link to={`/pet/${p._id}`} className="btn-group-sm btn-sm btn-info text-warning">Show</Link>
                                <Link to={`/edit/${p._id}`} className="btn-group-sm btn-sm btn-info text-warning">Edit</Link>
                            </div>
                        </div>
                    </div>)            
            })
        }
        </div>
    );
}

export default Main;