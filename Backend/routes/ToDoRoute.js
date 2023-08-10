const { Router } = require("express");

const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../controllers/ToDoController");
const {saveUser,getUser, authenticateUser,updateUser,deleteUser} = require("../controllers/userController")

const router = Router();

router.get("/", getToDo);
router.get("/user", getUser);

router.post("/save", saveToDo);
router.post("/user", saveUser);

router.post("/update", updateToDo);
router.post("/update_user", updateUser);

router.post("/delete", deleteToDo);
router.post("/delete_user", deleteUser);
router.post("/authenticate", authenticateUser)

module.exports = router;