import React from "react";
import { useRPContext } from "./Context/RPProvider.jsx";
import styles from './RPCard.module.css';

function RPComparison ({ rp }) {
  const { currentProductData } = useRPContext();
  return (
    <div className={styles.comparison}>
       <ul>
        {currentProductData.features.map((feature) => {
          if(rp.features.includes(feature)) {
            return <li>&#10003; {feature.value} {feature.feature} &#10003;</li>
          } else {
            return <li>&#10003; {feature.value} {feature.feature}</li>
          }
        })}
        {rp.features.map((feature) => {
          if(!currentProductData.features.includes(feature)) {
            return <li>{feature.value} {feature.feature} &#10003;</li>
          }
        })}
      </ul>
    </div>
  );
}

export default RPComparison;