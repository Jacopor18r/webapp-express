import express from 'express';
import productsRouter from './routers/productsRouter.js';
import errorsHandler from './Middlewares/errorsHandler.js';
import notFound from './Middlewares/notFound.js';


const app = express();
const port = process.env.APP_PORT || 3001;

// Middleware 
app.use(express.json());

// Routers, una rotta di prova
app.get('/', (req, res) => {
    res.send('Server express online');
});

app.use('/products', productsRouter);

app.use(notFound);
app.use(errorsHandler);

// Avvio del server
app.listen(port, () =>
    console.log(`Server avviato su http://localhost:${port}`),
);