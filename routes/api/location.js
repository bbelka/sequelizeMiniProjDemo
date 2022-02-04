const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');

router.get('/', async(req, res) => {
    try {
        const locations = await Location.findAll();
        res.status(200).json(locations);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const locations = await Location.findByPk(req.params.id, {
            include: [Trip]
        });
        res.status(200).json(locations);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/', async(req, res) => {
    try {
        const locations = await Location.create(req.body);
        res.status(200).json(locations);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const locations = await Location.destroy({ where: { id: req.params.id } });
        res.status(200).json(locations);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;