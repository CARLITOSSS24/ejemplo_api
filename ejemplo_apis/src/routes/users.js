import express from "express";

import userSchema from "../controllers/userController.js";
const router = express.Router();

router.post("/permisos", (req, res) => {
    userSchema
        .save()
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(404).json({ message: error }))
});

router.get("/permisos", (req, res)=>{
    userSchema
    .find()
    .then((data) =>res.status(200).json(data))
    .catch((error) => res.status(404).json({message: error}))
});
router.get("/permisos/:id", (req, res)=>{
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(404).json({ message: error}));
});

export default router;