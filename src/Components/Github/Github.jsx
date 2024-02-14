/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github(){
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/sanchit324')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         // console.log(data)
    //         setData(data)
    //     })
    // })
    return(
        <div className="text-center text-3xl bg-gray-300">Github: {data.followers}
        <img src={data.avatar_url} alt="" width={300}/></div>
    )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sanchit324')
    return response.json()
}