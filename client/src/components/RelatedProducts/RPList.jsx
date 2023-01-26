import React from "react";
import RPCard from "./RPCard.jsx"

function RPList ({ rps }) {
  console.log('rps', rps);
  return (
    <div>
      <h2>
      Related Products
      </h2>
      {rps.map((rp) => (
        <RPCard key={rp.id} rp={rp}/>
      ))}
    </div>
  );
};

export default RPList;