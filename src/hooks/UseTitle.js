import { useEffect } from "react";

// Title Hook

const UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | Teethcares`;
    },[title]);
};

export default UseTitle;