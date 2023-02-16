import React, { useState } from "react";
import RPCard from "./RPCard.jsx"
import RPComparison from "./RPComparison.jsx";
import { useRPContext } from "./Context/RPProvider.jsx";
import styles from './RP.module.css';

function RPList () {
  const [compareId, setCompareId] = useState(null);
  const { rpData, rpRatings, rpStyles } = useRPContext();

  function toggleComparison(id) {
    setCompareId(id);
  }

  return (
    <div data-testid='rplist'>
      <h2>
      Related Products
      </h2>
      <div>
        {rpData ? rpData.map((rp, index) => {
          return (
          <React.Fragment key={index}>
          <RPCard key={rp.id} rp={rp} rpRating={rpRatings[rp.id]} rpStyles={rpStyles[index]?.results} toggleComparison={toggleComparison}/>
          {compareId === rp.id ? <RPComparison key={rp.id + 'c'} rp={rp} toggleComparison={toggleComparison}/> : null}
          </React.Fragment>
          );
        }) : null}
      </div>
    </div>
  );
};

export default RPList;