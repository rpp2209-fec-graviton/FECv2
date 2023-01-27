import ListContainer from "./components/Review-List-Container/ListContainer.jsx";
import React from "react";
import useFetchProduct from "../../Hooks/useFetchProduct.jsx";




export default function ReviewList({ children }) {

  const { response, loading, error } = useFetchProduct(71697)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <div>
      <h1>Review List</h1>


      <ListContainer>
        {children}
      </ListContainer>
    </div>
  );
}
