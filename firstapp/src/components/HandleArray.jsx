import {useState} from  'react'
const INITAL_VALUE = ['A','B','C','D','E']

const HandleArray= () => {

    const [array, setArray] = useState(INITAL_VALUE)

    const removeIstElement=()=>{
        setArray(array.slice(1))

        if (array.length===0){
            setArray(INITAL_VALUE)
        }
    }

    const removeAllB=(letter)=>{
        setArray(oldArray=> {
            return (oldArray.filter(e=> e !== letter))
        })
    }

    const addAinStart = (letter) => {
        setArray(oldArray=>{
            return [letter, ...oldArray]
        })
    }

    const addZinLast = (letter) => {
        setArray(oldArray=>{
            return [...oldArray, letter]
        })
    }

    const updateAtoH = (oldLetter, newLetter) => {
        setArray(oldArray=>{
            return oldArray.map(e=> {
                if (e=== oldLetter) return newLetter
                return e
            })
        })
    }

    return (
        <>
            {array.join(',')}
            <br/>
            <button onClick={removeIstElement}>Remove First Element: {array.join(',')}</button>
            <br/>
            <button onClick={()=> {
                return removeAllB('B')
            }}>Remove (B) Element = {array.join(',')}</button>
            <br/>
            <button onClick={()=> {
                return addAinStart('A')
            }}>Add (A) In Start: {array.join(',')}</button>
            <br/>
            <button onClick={()=> { return addZinLast('Z')}}>Add (Z) In End: {array.join(',')}</button>
            <br/>
            <button onClick={()=> { return updateAtoH('A','A1')}}>Update (A to H) In End: {array.join(',')}</button>
        </>

    )
}

export default HandleArray
