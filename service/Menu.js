
const {Menu} = require('../models/Menu');

const QueryGetMenu = async (req,res) =>{

    try {    
        const menu = await Menu.findAll();
        res.json(menu); 
    } catch (error) {
        res.json('error');
    }
   
}

const QueryPostMenu = async (req,res) => {
    const data = req.body;

    try {
        const newMenu = await Menu.create(data);
        res.json(newMenu);
    } catch (error) {
        throw error;
    }
}

module.exports = {QueryGetMenu,QueryPostMenu};