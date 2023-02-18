import React from "react";
import RPCard from "./RPCard.jsx"
import RPComparison from "./RPComparison.jsx";
import { useRPContext } from "./Context/RPProvider.jsx";
import RPstyles from './RP.module.css';

function RPList () {
  const { rpData, compareId } = useRPContext();

  return (
    <div data-testid='rplist'>
      <h2>
      Related Products
      </h2>
      <div className={rpData && rpData.length > 5 ? RPstyles['flex-with-scroll'] : RPstyles['flex-center']}>
        {rpData ? rpData.map((rp, index) => {
          return (
          <React.Fragment key={index}>
          <RPCard className={RPstyles['flex-child']} key={rp.id} rp={rp}/>
          {compareId === rp.id ? <RPComparison key={rp.id + 'c'} rp={rp}/> : null}
          </React.Fragment>
          );
        }) : null}
      </div>
    </div>
  );
};

export default RPList;