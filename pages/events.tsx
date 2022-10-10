import React, { useState } from "react";
import { useRouter } from "next/router";

const events = ({ eventdata }) => {
 const[sportslist,setSportsList]=useState(eventdata)
  const router= useRouter()

   const fetchSports=async()=>{
   
    const response = await fetch("http://localhost:4000/events?category=sports");
    const data = await response.json();
    setSportsList(data)
    router.push('/events?category=sports',undefined,{shallow:true})

   }

  return (
    <>

     <button onClick={fetchSports}>Sports</button>

      <h1>Events list</h1>
      <div>
        {sportslist.map((list) => {
          return (
            <>
              <div id={list.id}>
                <h3>
                  {" "}
                  {list.title} {list.date} {list.category}
                </h3>
                <p>{list.description}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default events;

export async function getServerSideProps(context) {
    const{query} =context
    const{category}=query
    const queryString=category
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();
  return {
    props: {
      eventdata: data,
    },
  };
}
