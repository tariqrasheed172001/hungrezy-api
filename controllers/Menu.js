const {QueryGetMenu,QueryPostMenu} = require('../service/Menu');

const GetMenu = (req,res) =>{
    QueryGetMenu(req,res);
}

const PostMenu = (req,res) =>{
    QueryPostMenu(req,res);
}


module.exports = {GetMenu,PostMenu};

