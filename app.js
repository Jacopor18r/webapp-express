import express from 'express';
import products from './routers/products.js';

const app = express();
const port = process.env.APP_PORT || 3001;

// Middleware 
app.use(express.json());

// Routers, una rotta di prova
app.get('/', (req, res) => {
    res.send('Server express online');
});

app.use('/products', products);

// Avvio del server
app.listen(port, () =>
    console.log(`Server avviato su http://localhost:${port}`),
);