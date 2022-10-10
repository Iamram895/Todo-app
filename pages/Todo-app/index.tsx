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

  //   const reorder = (list, startIndex, endIndex) => {
  //     const result = Array.from(list);
  //     const [removed] = result.splice(startIndex, );
  //     result.splice(endIndex,  removed);
  //     return result;
  //   };

  const onDragEnd = () => {
    // if (!result.destination) {
    //   return result;
  };
  //     const reOrderItems = reorder(
  //       data,
  //       result.source.index,
  //       result.destination.index
  //     );
  //     console.log(reOrderItems);
  //     setData(reOrderItems);
  //   };

  return (
    <>
      <input
        type="text"
        placeholder="enter text"
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button onClick={addItem}> add item</button>
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="droppable-1">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              //   style={{
              //     backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
              //   }}
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
                    <Draggable key={index} draggableId={elem} index={index}>
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
                            {provided.placeholder}
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
