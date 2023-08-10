const {connection} = require("../database/connection");
const {getAllTodos,
addTodos,
updateTodos,
deleteTodos} = require("../query/query");

module.exports.getToDo = async (req, res) => {
    try{
        connection.query(getAllTodos, (err,results, fields)=>{
            res.status(200).json(results);
        })
    }catch(err){
        res.status(300).send(err);
    }
}

module.exports.saveToDo = (req, res) => {
    const { text } = req.body;
    console.log(text);
    try{
        connection.query(addTodos,[text], (err,results, fields)=>{
            res.status(200).json(results);
        })
    }catch(err){
        res.status(300).send(err);
    }
}

module.exports.deleteToDo = (req, res) => {
    const { id } = req.body;
    
    try{
        connection.query(deleteTodos,[id], (err,results, fields)=>{
            return res.status(200).json({message:"data deleted sucessfully"});
        })
    }catch(err){
        return res.status(300).send(err);
    }
}

module.exports.updateToDo = (req, res) => {
    const { id, text } = req.body;
    try{
        connection.query(updateTodos,[text,id], (err,results, fields)=>{
            return res.status(200).json({message:"data updated sucessfully"});
        })
    }catch(err){
        return res.status(300).send(err);
    }

}