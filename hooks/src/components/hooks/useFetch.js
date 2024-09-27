import { useEffect } from "react"
import { useState } from "react"

const useFetch=(url)=>{
    const [data, setData] = useState(null)
    const [error, setError]= useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        fetch(url)
        .then(res=>{
            if (res.status===200) {
                return res.json()
            }
            else{
                return Promise.reject(res)
            }
        })
        .then(data=>{
            setData(data)
            console.log(data)
        })
        .catch(e=> setError(e))
        .finally(()=>{
            setLoading(false)
        })    
    },[url])

    return {data, loading, error}
}

export default useFetch