import { useState, useEffect } from "react";


function useDebounce(value:any,delay=300) {
   const [debounceValue, setdeDounceValue] =useState(value)
    useEffect(()=>{
        const timer = window.setTimeout(()=>{
            setdeDounceValue(value)
        },delay)
        return ()=>{
            clearTimeout(timer)
        }
    },[value,delay])
    return debounceValue
}


export  default useDebounce
