import { useState } from "react";

const initialTasks = [
    { id: 1, name: " ", conplete: false },
];

const List = () => {
    const [tasks, setTasks] = useState([...initialTasks]);
    const [value, setValue] = useState("");

    const addTask = () => {
        if (value.trim() !== "") {
            setTasks((prevState) => [
                ...prevState
            ]
            )
        }
    }
}