import React from 'react';

const PetForm = props => {
    const {inputs,errors,handleInputChange,handleSubmit,submitValue} = props
    return (
        <form action="" className="col-5 bg-primary text-warning rounded m-0 p-3 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={inputs.name} onChange={handleInputChange} className="form-control"/>
                <span className="text-danger">{errors.name.message ? errors.name.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="type">Type:</label>
                <input type="text" name="type" value={inputs.type} onChange={handleInputChange} className="form-control"/>
                <span className="text-danger">{errors.type.message ? errors.type.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" value={inputs.description} onChange={handleInputChange} className="form-control"/>
                <span className="text-danger">{errors.description.message ? errors.description.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="skillOne">Skill One:</label>
                <input type="text" name="skillOne" value={inputs.skillOne} onChange={handleInputChange} className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="skillTwo">Skill Two:</label>
                <input type="text" name="skillTwo" value={inputs.skillTwo} onChange={handleInputChange} className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="skillThree">Skill Three:</label>
                <input type="text" name="skillThree" value={inputs.skillThree} onChange={handleInputChange} className="form-control"/>
            </div>
            <input type="submit" value={submitValue} className="btn btn-sm btn-warning text-info btn-outline-info"/>
        </form>
    );
}

export default PetForm;