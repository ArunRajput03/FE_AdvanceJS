import { useEffect } from "react"
import { useState } from "react"
import useFetch from "./hooks/useFetch"

const ConsumeCustomHooks=()=>{
    const [data, setData]= useState({
        name:"",
        age:0
    })


    const {data: apiData, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users")

    return (
        <div>
            <span>Name:</span>
            <input type="text" value={data.name || ''} onChange={(e)=> setData({name: e.target.value , age: data.age})}/>
            <br/>
            <span>Name:</span>
            <input type="number" value={data.age || 0} onChange={(e)=> setData({name: data.name, age: e.target.value})}/>
            <br/>
            {JSON.stringify(data)}
            <br/>
            <h3>Custom Hook:</h3>
            <input type="text" {...useCustomHuk(true)}/>
            <br/>
            <span>Name:</span>
            <input type="number" {...useCustomHuk(false)}/>
            <br/>
            <h3>Generic Custom Hook: useFetch API</h3>
            {
                (loading ? <span>Please wait.. data fetching is in progress</span>:
                    (
                        <ul>
                            {
                                apiData.map((dt)=>{
                                    return (
                                        <li key={dt.id} style={{"listStyle":"none","paddingLeft":"0", "marginLeft":"0"}}>
                                            <ol style={{"listStyle":"none","padding":"5px", "marginLeft":"0","border":"1px solid red", "marginBottom":"20px"}}>
                                                <li><strong>{dt.name}</strong></li>
                                                <li><strong>{dt.company.name}</strong></li>
                                                <li>{dt.username}</li>
                                                <li>{dt.address.street}, {dt.address.suite}, {dt.address.city}, {dt.address.zipcode}</li>
                                                <li>{dt.email}</li>
                                            </ol>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
                )
            }
        </div>
    )
}

function useCustomHuk(isName){
    const [datas, setDatas]= useState({
        name:"",
        age:0
    })

    useEffect(()=>{
        console.log(datas)
    },[datas])

    return {
        value: (isName ? (datas.name || '') : (datas.age || 0)),
        onChange: (e)=> (isName ? 
            setDatas({name: e.target.value , age: datas.age})
            :
            setDatas({name: datas.name , age: e.target.value})
        )
    }
}

export default ConsumeCustomHooks
