import axios from "axios";
import { createContext, useState } from "react";
import { env } from "./Config";

let UserContaxt = createContext()

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState();
    const changeName = async (name) => {
        await axios.post(`${env.api}/login`)
        setUsername(name)
    }

    return (
        <UserContaxt.Provider value={{ username, changeName }}>
            {children}
        </UserContaxt.Provider>
    )
}

export default UserContaxt;