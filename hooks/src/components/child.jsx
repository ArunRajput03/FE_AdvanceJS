import React, { useEffect, useState } from "react"

const INITIAL_VALUE=""

const Child=()=>{
    const [name, setName]= useState(INITIAL_VALUE)
    const [users, setUsers]= useState([])
    const [err, setErr] = useState(null)
    const [isLoading, setIsLoading]=useState(false)

    console.log("Component Render")

    useEffect(()=>{
        console.log("Component Render: Mount")
    },[])

    useEffect(()=>{
        console.log("Child Component Render: Mount")

        return ()=>{
            console.log("Use Effect: Return function will execute on every reoccur of useEffect method, It's usefull to remove any eventlistener those adding on Mount")
        }

    },[name])

    useEffect(()=> {
        setIsLoading(true)
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res=>{
                if (res.status===200) {
                    return res.json()
                }
                else{
                    return Promise.reject(res)
                }
            })
            .then(data=>{
                setUsers(data)
                console.log(data)
            })
            .catch(e=> setErr(e))
            .finally(()=>{
                console.log("Loaded...")
                setIsLoading(false)
            })
    },[])


    return (
        <>
            <h2>useEffect: Return function will execute on every reoccur of useEffect method, It's usefull to remove any eventlistener those adding on Mount</h2>
            <p>
                useEffect(())={"> { console.log('Function Mount'); return()=> { console.log('On Unmount'); }, [name])"}
            </p>
            <input type="text" value={name} onChange={e=> setName(e.target.value)} />
            <br/>
            <h2>Call API</h2>
            <br/>
            {
                (isLoading ? 
                    (<div>Loading...</div>) : 
                    (
                        <ul>{
                            users.map(usr=>{
                                return (
                                    <React.Fragment key={usr.id}>
                                        <li>{usr.name}</li>
                                    </React.Fragment>
                                )
                            })
                        }
                        </ul>
                    )
                )
            }
            <p>
                
            </p>
        </>
    )

}
export default Child