import React, { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"


function useDarkMode(){
    const [SomeValue, setSomeValue] = useLocalStorage()

    useEffect(() => {
        SomeValue 
        ? document.body.classList.add("dark-mode") && document.nav.classList.add("navbar1")
        : document.body.classList.remove("dark-mode") && document.body.classList.remove("navbar1")

    }, [SomeValue])

    return [SomeValue, setSomeValue]
}

export default useDarkMode