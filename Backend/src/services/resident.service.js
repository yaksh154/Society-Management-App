const Resident = require("../models/resident.model")

const create = async(body)=>{
    return Resident.create(body)
}

const findemail = async(email)=>{
    return await Resident.findOne({Email:email})
}