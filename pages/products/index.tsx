import React from 'react'

const index = ({products}) => {
  return (
    <>
    <div>products list</div>
    
    {
        products.map((item)=>{
            return(
                <>
                <div key={item.id}>
                <h1>{item.id} {item.title} {item.price}</h1>

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
 const response= await fetch('http://localhost:4000/products')
 const data= await response.json()
 return{
    props:{
        products:data
    }
 }

}