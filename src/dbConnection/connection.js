const mongoose = require('mongoose');

const password = 'Mintic2022*'
// const dbname = 'coworking'
const uri = `mongodb+srv://Administrador:${password}@cluster0.ewuusqd.mongodb.net/?retryWrites=true&w=majority`
module.export = () => mongoose.connect(uri)

// main().catch(err => console.log(err));
// async function main() {
//     await mongoose.connect('mongodb://localhost:27017/test');
    
//     // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
//   }