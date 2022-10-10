import React from 'react'

const index = ({news}) => {
  return (
    <>
    <div>News list</div>
    
    {
        news.map((item)=>{
            return(
                <>
                <div key={item.id}>
                <h1>{item.id} {item.title} {item.category}</h1>

                </div>
                </>
            )

        })
    }

    </>
  )
}

export default index



export async function getStaticProps(){
 const response= await fetch('http://localhost:4000/news')
 const data= await response.json()
 return{
    props:{
        news:data
    }
 }

}