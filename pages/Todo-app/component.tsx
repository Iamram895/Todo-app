import React from 'react'

const Component = (props) => {
  return (
    <div>
          <h2 >
                {props.index+1} {props.elem}
                
              <button onClick={()=>{
                props.onSelect(props.id)
              }}>remove</button>
              </h2>
    </div>
  )
}

export default Component