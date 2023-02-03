import React from "react";
import RPCard from "./RPCard.jsx"

function RPList ({ rps, rpStyles, rpRatings, changeProduct }) {
  return (
    <div data-testid='rplist'>
      <h2>
      Related Products
      </h2>
      {rps ? rps.map((rp, index) => {
        return <RPCard key={rp.id} rp={rp} rpRating={rpRatings[rp.id]} rpStyles={rpStyles[index]?.results} changeProduct={changeProduct}/>
      }) : null}
    </div>
  );
};

export default RPList;