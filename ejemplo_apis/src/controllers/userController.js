import userSchema from "../models/permisos.js";
const createUser = (req, res)=>{
const user = userSchema(req.body);
user
    .save()
    .then((data) => res.status(201).json(data))
    .catch((error) => res.status(503).json({ message: error }))
};

const consultarUsers = (req, res) => {
    userSchema
        .find()
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(404).json({ message: error }))
};

const consultarUser = (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(404).json({ message: error }));
};

export default {createUser, consultarUsers, consultarUser};
