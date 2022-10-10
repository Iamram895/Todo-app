import React from 'react'

const categoryList = ({Article,category}) => {
  return (
    <>
    <h1>
     Showing news for category {category} 
    </h1>
    {
        Article.map((elem)=>{
            return(<>

                <div>
                    <h2>{elem.id}  {elem.title}</h2>
                    <p>{elem.description}</p>
                </div>
                <hr />
                </>
            )
        })
    }
    </>
  )
}

export default categoryList


export async function getServerSideProps(context){
    const{params,req,res,query}=context
    console.log(query);
    
    console.log(req.headers.cookie);
    res.setHeader('set-cookie',['name=ram'])
    const{category}= params
   const response= await fetch(`http://localhost:4000/news?category=${category}`)
   const data= await response.json()
    
   return {
    props:{
        Article:data,
        category
    }
   }
}
