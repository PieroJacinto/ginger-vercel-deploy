require("dotenv").config();
const app = require("./src/app")

const port = process.env.PORT || 4000;

app.listen(port);

app.get( "/", ( req, res )=> {
    res.send( "La pagina de inicio ")
})

console.log(`Listen on port ${port}`);