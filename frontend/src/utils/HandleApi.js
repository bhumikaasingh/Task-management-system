import axios from 'axios'

const baseUrl = "http://localhost:9001"

const getAllToDo = async (setToDo) => {
    const res = await axios.get(baseUrl);
    console.log(res.data);
    setToDo(res.data);
}

const addToDo = (text, setText, setToDo) => {

    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    

    axios
        .post(`${baseUrl}/update`, { id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const deleteToDo = (id, setToDo) => {

    axios
        .post(`${baseUrl}/delete`, { id })
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}


export { getAllToDo, addToDo, updateToDo, deleteToDo }