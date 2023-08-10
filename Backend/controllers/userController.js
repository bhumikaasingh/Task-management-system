const {connection} = require("../database/connection");
const {getUser,
getUserByEmail,
addUser,
updateUser,
deleteUser} = require("../query/query");

module.exports.getUser = async (req, res) => {
    try{
        connection.query(getUser, (err,results, fields)=>{
            res.status(200).json(results);
        })
    }catch(err){
        res.status(300).send(err);
    }
}
exports.authenticateUser = async(req,res)=>{
    const{email, password} = req.body;
    console.log(req.body);
    try{
        connection.query(getUserByEmail,[email], (err,results, fields)=>{
            if(results.length===0){
                return res.status(300).json({message:"invalid email"})
            }
            if(results[0].password !== password){

                return res.status(300).json({message:"password not matched"})
            }
            return res.status(200).json({message:"user logged in sucessfully"})
        })
    }catch(err){
        res.status(300).send(err);
    }
}


module.exports.saveUser = (req, res) => {
    const { name,email,contact,password } = req.body;
    console.log(name,email,contact,password);
    try{
        connection.query(addUser,[name,email,contact,password], (err,results, fields)=>{
            res.status(200).json(results);
        })
    }catch(err){
        res.status(300).send(err);
    }
}

module.exports.deleteUser = (req, res) => {
    const { id } = req.body;
    
    try{
        connection.query(deleteUser,[id], (err,results, fields)=>{
            return res.status(200).json({message:"data deleted sucessfully"});
        })
    }catch(err){
        return res.status(300).send(err);
    }
}

module.exports.updateUser = (req, res) => {
    const { id, name , email, contact, password } = req.body;
    try{
        connection.query(updateUser,[name, email, contact, password, id], (err,results, fields)=>{
            return res.status(200).json({message:"data updated sucessfully"});
        })
    }catch(err){
        return res.status(300).send(err);
    }

}
