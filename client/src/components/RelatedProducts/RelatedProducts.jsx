const axios = require('axios');

import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { useRPContext } from "./Context/RPProvider.jsx";
import calculateRatings from "./RatingCalculator.jsx";
import RPList from "./RPList.jsx";
import YourOutfitList from "./YourOutfitList.jsx"

import styles from './RP.module.css';
import globalStyles from '../Home/home.module.css';

function RelatedProducts () {
  const { fetchData, useClickLogger, product_id, currentProductData, setCurrentProductData, setRpData, setRpStyles, setRpRatings, setOutfitRatings } = useRPContext();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let idList;
    fetchData(`products/${product_id}/related`)
    .then((ids) => {
      idList = [...new Set(ids)];
      return Promise.all(idList.map((id) => {
        return fetchData(`products/${id}`)
      }))
    })
    .then((data) => {
      setRpData(data);
      return Promise.all(idList.map((id) => {
        return fetchData(`products/${id}/styles`)
      }))
    })
    .then((styles) => {
      setRpStyles(styles);
      return Promise.all(idList.map((id) => {
        return fetchData(`reviews/meta?product_id=${id}`)
      }))
    })
    .then((reviews) => {
      var ratingList = calculateRatings(reviews);
      setRpRatings(ratingList);
      return fetchData(`products/${product_id}`)
    })
    .then((currentProductData) => {
      setCurrentProductData(currentProductData);
      setLoaded(true);
    })
  },[product_id]);

  return (
      <div className={globalStyles.container} data-testid='rp'>
        {loaded ? <><RPList/><br/></> : null}
        {loaded ? <><YourOutfitList/></>: null}
      </div>
  )
}

export default RelatedProducts;