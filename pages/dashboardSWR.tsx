import React from 'react'
import useSWR from 'SWR'
  
const fetcher= async()=>{
    const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      return data
}
const dashboardSWR = () => {
    const {data,error}= useSWR('dashboard',fetcher)
    if(error){
        return 'An error has occured'
    }
    if(!data){
        return 'Loading...'
    }
  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <h2>Post-{data.post}</h2>
        <h2>Follower-{data.follwers}</h2>
        <h2>Following-{data.following}</h2>
        <h2>Likes-{data.likes}</h2>
      </div>
    </>
  )
}

export default dashboardSWR
