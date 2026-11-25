import express from 'express';

const router = express.Router()

// INDEX
router.get('/', (req, res) => {
    res.send('Lista di tutti i prodotti');
});

// SHOW
router.get('/:id', (req, res) => {
    const idProduct = Number(req.params.id);
    res.send(`Dettaglio del prodotto ${idProduct}`);
});

// STORE
router.post('/', (req, res) => {
    const body = req.body;
    console.log(body);
    res.send('Creazione di un nuovo prodotto');
});

// UPDATE
router.put('/:id', (req, res) => {
    const idProduct = Number(req.params.id);
    res.send(`Modifica del prodotto ${idProduct}`);
});

// DESTROY
router.delete('/:id', (req, res) => {
    const idProduct = Number(req.params.id);
    res.send(`Eliminazione del prodotto ${idProduct}`);
});

export default router;

