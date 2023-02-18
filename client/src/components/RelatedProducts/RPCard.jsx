import React, { useEffect } from "react";
import { useRPContext } from './Context/RPProvider.jsx'
import RPComparison from './RPComparison.jsx';
import RPCardSetup from './RPCardSetup.jsx'
import RPStars from './RPStars.jsx';
import styles from './RP.module.css';

function RPCard ({ rp }) {
  const { rpStyles, rpRatings, toggleComparison, changeProduct } = useRPContext();

  var rpStyle = rpStyles[rp.id];
  var rpRating = rpRatings[rp.id];

  var cardInfo = RPCardSetup(rpStyle);

  return (
    <div className={styles.card} data-testid='rpcard'>
      <img src={cardInfo[0]} onClick={() => changeProduct(rp.id)}/>
      <span className={styles.action} onClick={() => toggleComparison(rp.id)}>⭐</span>
      <br/>
      {rp.category}
      <br/>
      {rp.name}
      <br/>
      {cardInfo[2] && <span className={styles.red}>${cardInfo[2]} <strike>${cardInfo[1]}</strike></span>}
      {cardInfo[1] && <span>${cardInfo[1]}</span>}
      <br/>
      <RPStars id={rp.id} rating={rpRating} prefix={'R'}/>
      <br/>
    </div>
  )
}

export default RPCard;