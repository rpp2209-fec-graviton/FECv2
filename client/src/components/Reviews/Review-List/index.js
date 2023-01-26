import ListContainer from "./components/Review-List-Container/ListContainer.jsx";
import React from "react";
import useFetchProduct from "../../Hooks/useFetchProduct.js";




export default function ReviewList({ children }) {


  const { response, loading, error } = useFetchProduct({
    method: 'get',
    url: '/products'
  });



  return (
    <div>
      <h1>Review List</h1>
      {response}
      {console.log(response, 'sd')}

      <ListContainer>
        {children}
      </ListContainer>
    </div>
  );
}
