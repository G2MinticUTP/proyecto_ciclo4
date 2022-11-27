const express = require('express');

const app = express();
const port = process.env.PORT || 9000;

app.listen(9000, () => console.log("El servidor esta escuchando en el puerto", 9000));
