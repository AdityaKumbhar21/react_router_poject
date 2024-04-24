import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

  // Calling and fetching data using standard way 
    // const url = "https://api.github.com/users/AdityaKumbhar21"
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // },[data])

    const data = useLoaderData()

  return (
    <div className='bg-gray-800 text-center text-white text-3xl m-4 p-3 rounded-xl flex flex-col items-center wrap-content'>
        Github Followers: {data.followers}
            <br />
        <img className="align-center" src={data.avatar_url} alt='profile image'/>
    </div>
  )
}

export default Github

// fecting the api using useLoaderData() hook in order to optimize the load time
export const githubLoader  = async() =>{
    const response = await fetch("https://api.github.com/users/AdityaKumbhar21")
    return response.json()
}