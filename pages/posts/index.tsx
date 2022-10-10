import { copyFileSync } from "fs";
import React from "react";
import Link from "next/link";

const index = ({posts}) => {
  return (
    <>
      <div>post list</div>
      {posts.map((elem: any) => {
        return (
          <>
            <div key={elem.id}>
     <Link href={`posts/${elem.id}`}>
              <p>
              
                {elem.id} :{elem.title}
              </p>
     </Link>
            </div>
            <hr />
          </>
        );
      })}
    </>
  );
};

export default index;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  //console.log(data);

  return {
    props: {
      posts: data
    },
  };
}
