import { useState } from "react"

function CustomHook(){
    const [deletename, setDeletename] = useState('');


    const [user, setUser] = useState(['Huyen', 'Hoa', 'Hung', 'Long']);

    var newArray = user.join(', ');

    const handleChange = (event) => {
        setDeletename(event.target.value);
    }

    const handleDeletename = (name) => {
        setUser(user.filter((x) => x !== name));
    }
    return [deletename, newArray, handleChange, handleDeletename];
}

export default CustomHook
