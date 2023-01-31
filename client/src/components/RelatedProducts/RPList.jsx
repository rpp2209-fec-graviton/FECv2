import React from "react";
import RPCard from "./RPCard.jsx"

function RPList ({ rps }) {
  console.log('rps', rps);
  return (
    <div data-testid='rplist'>
      <h2>
      Related Products
      </h2>
      {rps ? rps.map((rp) => (
        <RPCard key={rp.id} rp={rp}/>
      )) : null}
    </div>
  );
};

export default RPList;