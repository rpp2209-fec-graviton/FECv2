import ListContainer from "./components/Review-List-Container/ListContainer.jsx";
import React from "react";


export default function ReviewList({ children }) {

  return (
    <div>
      <h1>Review List</h1>
      <ListContainer>
        {children}
      </ListContainer>
    </div>
  );
}
