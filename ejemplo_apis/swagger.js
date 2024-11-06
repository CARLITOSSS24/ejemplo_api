import swaggerJSDOC from "swagger-jsdoc";
import swaggerUI from  "swagger-ui-express";


const options = {
    definition:{
        openapi: "3.0.0",
        info: {
            title: "API CONECTADA",
            version: "1.0.0",
            description: "EJEMPLO CONECTANDOCE Y SEPARANDO LAS RUTAS",
            contact: {
                name: "API SUPPORT",
                URL : "",
                email : "suppor@gmail.com",
            },
        },

        servers: [
            {
                url : "http://localhost9000",
                description: "Docuemetacion de mi API REST colectionHOT",
            },
        ],
    },
    api: ["./routes.js"],
};

const swagerSpec = swaggerJSDOC(options);
const swaggerJSDOCs = (app, port) => {
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    app.get("/api-docs.json", (req, res) => {
        res.setHeader("contenType", "application/json");
        res.send(swagerSpec);
    });
    console.log(
    `Version No 1 de la documentacion estara disponible en http://localhost:${port}/api-docs`
    );
};