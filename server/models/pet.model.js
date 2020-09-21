const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "What is the pet's name?"],
        minlength: [3, "Input needs more characters"]
    },
    type:{
        type: String,
        required: [true, "What type of animal is the pet?"],
        minlength: [3, "Input needs more characters"]
    },
    description:{
        type: String,
        required: [true, "A description of the pet."],
        minlength: [3, "Input needs more characters"]
    },
    skillOne:{
        type: String,
        required: false
    },
    skillTwo:{
        type: String,
        required: false
    },
    skillThree:{
        type: String,
        required: false
    }
},{timestamps:true})

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;