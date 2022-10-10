import React from "react";
import { useRouter } from "next/router";

const Post = ({ posts }) => {
    const router= useRouter()
    if(router.isFallback){
        return(<h1>Loading.....</h1>)
    }
  return (
    <>
      <div>
        <h1>{posts.id} {posts.title}</h1>
        <p>{posts.body}</p>
      </div>
    </>
  );
};

export default Post;

export async function getStaticPaths() {

    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const data = await response.json();
    // const paths= data.map((elem)=>{

    //     return{
    //         params:{
    //             postid:`${elem.id}`
    //         }
    //     }
    // })
  return {
    paths: [
      {
        params: { postid: "1" },
      },
      {
        params: { postid: "2" },
      },
      {
        params: { postid: "3" },
      },
    ],
   
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );
  const data = await response.json();
  console.log(`Generating page for posts/${params.postid}`);

  return {
    props: {
      posts: data,
    },
  };
}
