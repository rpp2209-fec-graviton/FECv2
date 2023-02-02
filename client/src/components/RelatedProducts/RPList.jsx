import React from "react";
import RPCard from "./RPCard.jsx"

function RPList ({ rps, rpStyles, changeProduct }) {
  //eliminate duplicate items
  let uniqueRps = [];
  let uniqueObject = {};
  for (let i in rps) {
    var rpId = rps[i].id;
    uniqueObject[rpId] = rps[i];
  }
  for (let i in uniqueObject) {
    uniqueRps.push(uniqueObject[i]);
  }
  return (
    <div data-testid='rplist'>
      <h2>
      Related Products
      </h2>
      {uniqueRps ? uniqueRps.map((rp, index) => {
        return <RPCard key={rp.id} rp={rp} rpStyles={rpStyles[index]?.results} changeProduct={changeProduct}/>
      }) : null}
    </div>
  );
};

export default RPList;