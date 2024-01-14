import  express  from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 1234;

const app = express();

app.disable("x-powered-by"); // desabilita el header x-powerd-by: Expess


app.get('/', (req, res)=> {
    res.json({message: 'Hola maikidev'})
})

// levantar el servidor
app.listen(PORT,()=> {
    console.log(`Server listening on port http://localhost:${PORT}`)
});
