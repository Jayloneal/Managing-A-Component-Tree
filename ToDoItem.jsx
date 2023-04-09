import React from "react";

function ToDoItem(props) {   
//eslint-disable-next-line
   return (
     <div
       onClick={() => {
         props.onChecked(props.id);
       }}
     >
       <li>{props.text}</li>
     </div>
   );
 }
 
 export default ToDoItem;
 