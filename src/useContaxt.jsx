import axios from "axios";
import { createContext, useState } from "react";

let UserContaxt = createContext()

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState();
    const changeName = async (name) => {
        await axios.post(`https://6300faaee71700618a325118.mockapi.io/api/v1/users`)
        setUsername(name)
    }

    return (
        <UserContaxt.Provider value={{ username, changeName }}>
            {children}
        </UserContaxt.Provider>
    )
}

export default UserContaxt;