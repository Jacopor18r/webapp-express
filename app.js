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

// Errore in caso di rotta non trovata
app.use((req, res) => {
    res.status(404).json({ message: "Rotta non trovata" });
});

// Errore riguardante il server
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Errore interno del server" });
});

// Avvio del server
app.listen(port, () =>
    console.log(`Server avviato su http://localhost:${port}`),
);