import axios from 'axios';

const baseUrl = "https://todo-backend-upwg.onrender.com";

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data--->', data);
            setToDo(data);
        })
}

const addToDo = (text, setText, setToDo) => {
    axios
        .post(`${baseUrl}/posts`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => {
            console.log(err);
        })
}

const updateToDo = (toDoId, text, setText, setToDo, setIsUpdating) => {
    axios
        .put(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => {
            console.log(err);
        })
}

const deleteToDo = (_id, setToDo) => {
    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data);
            getAllToDo(setToDo)
        })
        .catch((err) => {
            console.log(err);
        })
}

export { getAllToDo, addToDo, updateToDo, deleteToDo }