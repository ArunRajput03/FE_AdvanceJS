import { useState } from "react"

const useArray=(initalValue)=>{
    const [array, setArray] = useState(initalValue)

    const push= (newValue)=>{
        setArray(old=>{
            return [...old,newValue]
        })
    }
    const pop= (index)=>{
        setArray(old=>{
            return [...old.slice(0, index),...old.slice(0, index+1) ]
        })
    }
    const update= (index,val)=>{
        setArray(old=>{
            return [...old.slice(0, index), val , ...old.slice(0, index+1) ]
        })
    }

    return {array, setArray: setArray, push, pop, update}
}

export default useArray
