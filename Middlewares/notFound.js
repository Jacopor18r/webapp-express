function notFound(req, res, next) {
    res.status(404).json({ error: 'Risorsa non trovata' })
}

export default notFound