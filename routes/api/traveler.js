const router = require('express').Router();
const { Traveler, Trip, Location } = require('../../models');

router.get('/', async(req, res) => {
    try {
        const travelers = await Traveler.findAll();
        res.status(200).json(travelers);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const travelers = await Traveler.findByPk(req.params.id, {
            include: [Trip]
        });
        res.status(200).json(travelers);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/', async(req, res) => {
    try {
        const travelers = await Traveler.create(req.body);
        res.status(200).json(travelers);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const travelers = await Traveler.destroy({ where: { id: req.params.id } });
        res.status(200).json(travelers);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;