import React from 'react'
import User from './components/user'

const Users = ({users}) => {
  return <>
  
  <div>user list</div>

    
    { users.map((user:any)=>{
        return(
            <>
            <User user={user}/>
        </>
        )
    })}
    </>
}

export default Users


export async function getStaticProps(){
    const response =  await fetch('https://jsonplaceholder.typicode.com/users')
    const data= await response.json()
    console.log(data)

    return {
    props:{
        users:data
    }
    
    }
}