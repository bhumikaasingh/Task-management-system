// queries for product
exports.getAllTodos = "select * from todo";
exports.getTodosByID = "SELECT * FROM todo WHERE id = ?";
exports.addTodos = "INSERT INTO todo(text) VALUES(?) ";
exports.deleteTodos = "delete from todo where id = ?"
exports.updateTodos = "update todo set text = ? where id = ?"



// queries for user and authentication



exports.addUser = "insert into user(name, email,contact, password) values(?,?,?,?) ";
exports.deleteUser = "delete from user where id = ?";
exports.getUserByEmail = "SELECT * FROM user WHERE email = ?";
exports.getUser = "select * from user";
exports.updateUser = "update user set name = ?, email= ?,contact=?, password =? where id = ?";

