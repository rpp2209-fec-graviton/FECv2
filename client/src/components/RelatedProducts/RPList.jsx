import React from "react";
import RPCard from "./RPCard.jsx"

function RPList ({ rps, rpStyles }) {
  return (
    <div data-testid='rplist'>
      <h2>
      Related Products
      </h2>
      {rps ? rps.map((rp, index) => {
        return <RPCard key={rp.id} rp={rp} rpStyle={rpStyles[index].results}/>
      }) : null}
    </div>
  );
};

export default RPList;