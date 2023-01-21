import React, { useState } from "react";

function RPList (props) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  return (
    <div>
    {props.products.map((product) => {
      return <Card productInfo={product} relatedProducts={relatedProducts} setRelatedProducts={setRelatedProducts}/>
    })}
    </div>
  );
};

export default RPList;