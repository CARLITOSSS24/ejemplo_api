import express from "express";
const routes = express.Router();

routes.get("/", (req, res) => {
    req.getConnection((error, conexion) => {
        if(error) return res.send(error);
        conexion.query("SELECT * FROM pieza", (err, piezasRows) => {
            if(err) return res.send(err);
            res.json(piezasRows);
        });
    });
});




