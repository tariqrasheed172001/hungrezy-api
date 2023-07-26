const {QueryGetDriver,QueryPostDriver} = require('../service/Driver');

const GetDriver = (req,res) =>{
    QueryGetDriver(req,res);
}

const PostDriver = (req,res) =>{
    QueryPostDriver(req,res);
}


module.exports = {GetDriver,PostDriver};

