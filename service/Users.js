const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const {User} = require('../models/User');

const QueryAllUsers = async (req,res) =>{

    // ORM---->
    try {
        const userss = await User.findAll(); // Perform the SELECT * FROM users query
        // Send the users as a JSON response
        res.json(userss);
      } catch (error) {
        console.error('Error fetching all users:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

const QueryLogin = async (req,res) => {

    // ---> ORM

    const {email,passwordd} = req.body;

    try {
        const user = await User.findOne({where:{email}});

        // console.log(user.name);
        if(!user || !user.passwordd){
            return res.status(401).json({message:'Wrong email or password'});
        }


        const isMatch = await bcrypt.compare(passwordd,user.passwordd);

        if(isMatch){
            console.log('Password matched! User can log in.');

            // jwt token
            const name = user.name;

            console.log(name)
            const token = jwt.sign({ name }, process.env.JWT_SECRET, { expiresIn: '1d' });
            console.log(token);
            res.cookie('token', token,{
                httpOnly: true, // The cookie cannot be accessed through JavaScript (for added security)
                secure: true, // The cookie will be sent only over HTTPS (recommended for production)
              });
            
            

            return res.status(200).json({ user, message: 'Successfully logged in' });
        }else{
            console.log('Incorrect password. User cannot log in.');
            return res.status(201).json({ user, message: 'Wrong email or password' });
        }

    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }

}

const QueryRegister = async (req,res) => {

    // ---> ORM

    const data = req.body;

    try {
        const result = await User.create(data);
        res.send({result,message:"You have successfully signed up"});
    } catch (error) {
        console.error('Error creating user',error);
        res.status(500).json({message:'Internval server error'});
    }
}

const QueryVerification = (req,res) =>{
    return res.send({Status:'Success',name: req.name});
}

const QueryLogout = (req,res) => {
    res.clearCookie('token');
    return res.json({status:"success"});
}

const doesEmailExist = async (req,res) => {
    const email = req.body.email;
    try {   

      const existingUser = await User.findOne({where:{email}});
      return !!existingUser;
      
    } catch (error) {
      // Handle any errors that occurred during the database query.
      console.error('Error checking email existence:', error);
      return false; // You can choose to handle this differently based on your use case.
    }
  }


module.exports = {QueryAllUsers,QueryLogin,QueryRegister,QueryVerification,QueryLogout,doesEmailExist};