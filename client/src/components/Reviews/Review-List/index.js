import ListContainer from "./components/Review-List-Container/ListContainer.jsx";
import React from "react";
import useFetchProduct from "../../Hooks/useFetchProduct.jsx";
import { useProductContext } from "../../Context/ContextProvider.jsx";




export default function ReviewList({ children }) {

  const { loading, error, response, handleCurrentId } = useProductContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Review List</h1>
      {/* {console.log(response)} */}
      <button onClick={(event) => { handleCurrentId(event, 71698) }}>switch</button>
      <ListContainer>
        {children}
      </ListContainer>
    </div>
  );
}
