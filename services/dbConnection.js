const mongoose = require ('mongoose');

const connectToDatabase = () =>{
    mongoose.connect("mongodb://localhost:1248/musicList_database", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() =>{
        console.log("Connected to database");
    })
    .catch((error) => consol.log(error));
};

module.exports = {
    connect: connectToDatabase,
};