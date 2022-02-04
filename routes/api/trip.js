const router = require('express').Router();
const { Trip } = require('../../models');

router.post('/', async(req, res) => {
    try {
        const trip = await Trip.create(req.body);
        res.status(200).json(trip);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const trip = await Trip.destroy({ where: { id: req.params.id } });
        res.status(200).json(trip);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;