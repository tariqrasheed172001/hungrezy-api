const jwt = require('jsonwebtoken');
const verifyUser = (req,res,next) =>{
    const token = req.cookies.token;

    if(!token){
        return res.json({Error: "Your are not Logged In"})
    }else{
        jwt.verify(token,process.env.JWT_SECRET,(error,decoded) => {

            if(error){
                return res.json({Error: "Token error"});
            }else{
                req.name = decoded.name;
                next();
            }
        });
    }
}

module.exports = {verifyUser};