import ListContainer from "./components/Review-List-Container/ListContainer.jsx";
import React from "react";
import useFetchProduct from "../../Hooks/useFetchProduct.js";




export default function ReviewList({ children }) {

  const { response, loading, error } = useFetchProduct(
    { method: 'get', url: '/reviews/page', });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <div>
      <h1>Review List</h1>

      {console.log(response, 'console from useFetchProductHook')}

      <ListContainer>
        {children}
      </ListContainer>
    </div>
  );
}
