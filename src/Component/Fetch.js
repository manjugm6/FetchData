import { useState, useEffect } from "react"

const Fetch = () => {

    const [user, setUser] = useState([]);


    const fetuserDetails = async() => {

         const result = await fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data => {
            let res = data.results
            setUser(res);
            localStorage.setItem('users',JSON.stringify(user))
        })

        return result
        
    }
    useEffect(() => {

        fetuserDetails();

    }, [])

    return (
        <>
            <h1>Users List</h1>
            <ul>
                {user && user.map((per, index) => {
                    return (
                        <div  key={index}>
                        <li><strong>Name:</strong> {per.name.first}  {per.name.last}</li>
                        <li><strong> email:</strong>{per.email}</li>
                        </div>
                    )
                })}

            </ul>

            <button onClick={fetuserDetails}> Refresh</button>
        </>
    )
}

export default Fetch