const {Driver} = require('../models/Driver');

const QueryGetDriver = async (req,res) =>{

    try {
        const drivers = await Driver.findAll();
        res.json(drivers);
    } catch (error) {
        res.json('error');
    }

}

const QueryPostDriver = async (req,res) => {
    const data = req.body;

    try {
        const newDriver = await Driver.create(data);
        res.json(newDriver);
    } catch (error) {
        throw error;
    }

}

module.exports = {QueryGetDriver,QueryPostDriver};