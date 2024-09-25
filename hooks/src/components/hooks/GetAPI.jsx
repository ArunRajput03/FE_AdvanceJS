
const GetAPI=()=>{
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
            console.log(data)
        })
        .catch(e=> console.log(e))
        .finally(()=>{
            console.log("loading...")
        })
}

export default GetAPI