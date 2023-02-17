import React from "react";
import { useRPContext } from "./Context/RPProvider.jsx";
import styles from './RP.module.css';

function RPComparison ({ rp }) {
  const { currentProductData, toggleComparison } = useRPContext();

  function isSharedFeature(feature, arr) {
    return arr.some(x => (feature.value === x.value) && (feature.feature === x.feature))
  }

  return (
    <div className={styles.comparisonContainer}>
      <div className={styles.comparison}>
        <h4>COMPARING</h4>
        <table>
          <tbody>
            <tr key={'header'}>
              <th>{currentProductData.name}</th>
              <th></th>
              <th>{rp.name}</th>
            </tr>
            {currentProductData.features.map((feature, index) => {
              if (isSharedFeature(feature, rp.features)) {
                return (
                  <tr key={index}>
                    <td>&#10003;</td>
                    <td>{feature.value} {feature.feature}</td>
                    <td>&#10003;</td>
                  </tr>
                );
              } else {
                return (
                  <tr key={index}>
                    <td>&#10003;</td>
                    <td>{feature.value} {feature.feature}</td>
                    <td></td>
                  </tr>
                );
              }
            })}
            {rp.features.map((feature, index) => {
              if(!isSharedFeature(feature, currentProductData.features)) {
                return (
                  <tr key={index}>
                    <td></td>
                    <td>{feature.value} {feature.feature}</td>
                    <td>&#10003;</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        <br></br>
        <button className={styles.closeButton} onClick={() => toggleComparison(null)}>Close</button>
      </div>
    </div>
  );
}

export default RPComparison;