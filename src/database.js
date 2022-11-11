const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/notasdb")
    .then(db => console.log("Base de datos conectada"))
    .catch(error => console.log(error));