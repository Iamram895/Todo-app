import React from "react";
import { useState } from "react";
import Component from "./component";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const index = () => {
  const [item, setItem] = useState("");
  const [data, setData] = useState([]);

  const addItem = () => {
    setData((olditem) => {
      return [...olditem, item];
    });
    setItem("");
  };
  const removeItem = (id) => {
    setData((olditem) => {
      return olditem.filter((curelem, index) => {
        return index !== id;
      });
    });
  };

 

  const onDragEnd = (result) => {
    console.log(result);
    
    const {source,destination}= result
     if (!result.destination) {
      return result;
  };
      const Items = data
      const [reorderItem]=Items.splice(source.index,1)
      Items.splice(destination.index,0,reorderItem)

      setData(Items);
}

  return (
    <>
      <input
        type="text"
        placeholder="enter text"
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button onClick={addItem}> add item</button>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable1">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {data.map((elem, index) => {
                const mystyle = {
                  color: "white",
                  backgroundColor: "blue",
                  padding: "10px",
                  //fontFamily: "Arial",
                  width: "400px",
                  height: "90px",
                  margin: "10px",
                };
                return (
                  <>
                    <Draggable key={index} draggableId={`data${index}`} index={index}>
                      {(provided, snapshot) => (
                        <>
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={mystyle}
                          >
                            <Component
                              key={index}
                              elem={elem}
                              id={index}
                              index={index}
                              onSelect={removeItem}

                            />
                            {/* {provided.placeholder} */}
                          </div>
                        </>
                      )}
                    </Draggable>
                  </>
                );
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default index;
