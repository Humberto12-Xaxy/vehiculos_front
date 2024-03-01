import { useState } from "react";

export default function useID() {
    const getID = () => {
        const tokenString = localStorage.getItem('id');
        console.log(tokenString)
        return tokenString
    }
    const [id, setID] = useState(getID());

    const saveID = userID => {
        localStorage.setItem('id', userID);
        setID(userID);
    };

    return {
        setID: saveID,
        id
    }

}